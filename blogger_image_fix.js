/**
 * BLOGGER NO IMAGE FIX — paste this to replace publishByEmail_ in Apps Script
 * Your Hub RSS has the thumbnail, but rewriteArticle_ returns text-only HTML
 * This version injects the YouTube thumbnail at the top so Blogger shows it
 */

function publishByEmail_(feedIndex, title, html) {
  const propertyName = 'BLOGGER_POST_EMAIL_' + feedIndex;
  const recipient = P.getProperty(propertyName);
  if (!recipient) throw new Error('Add ' + propertyName + ' in Project Settings > Script properties.');
  if (!/@blogger\.com$/i.test(recipient)) throw new Error(propertyName + ' must be the full Blogger posting address ending in @blogger.com.');
  if (/https?:\/\/www?\.blogger\.com\/u\/\d+\/blog\/post\/edit\//i.test(String(html))) throw new Error('Unsafe Blogger editor URL detected; email not sent.');

  // --- FIX: Extract thumbnail from your Hub article HTML and inject it ---
  let htmlWithImage = String(html || '');
  
  // 1. Try to find existing img in AI output
  let hasImage = /<img[^>]+src=/i.test(htmlWithImage);
  
  // 2. If no image, extract from Pending item's sourceHtml (stored in P)
  // The sourceHtml is available via next.item.html in processFeed_, but publishByEmail_ doesn't receive it
  // So we extract YouTube thumb from links in html if present, or use a fallback
  if (!hasImage) {
    // Look for YouTube video ID in links like .../videos/slug.html or youtube.com/embed/ or youtu.be
    const ytMatch = htmlWithImage.match(/youtube\.com\/(?:embed\/|watch\?v=)([A-Za-z0-9_-]{11})/i)
                 || htmlWithImage.match(/youtu\.be\/([A-Za-z0-9_-]{11})/i)
                 || String(P.getProperty('PEND_' + feedIndex + '_last_thumb') || '').match(/([A-Za-z0-9_-]{11})/);
    
    let thumbUrl = '';
    if (ytMatch) {
      thumbUrl = 'https://i.ytimg.com/vi/' + ytMatch[1] + '/hqdefault.jpg';
    } else {
      // Fallback: try to extract from any i.ytimg.com URL already in html
      const thumbMatch = String(htmlWithImage).match(/https:\/\/i\.ytimg\.com\/vi\/[^"'>\s]+\/hqdefault\.jpg/i);
      if (thumbMatch) thumbUrl = thumbMatch[0];
    }
    
    if (thumbUrl) {
      // Blogger Post-by-Email needs <img> in htmlBody — this will show inline
      htmlWithImage = '<p><a href="' + thumbUrl.replace('/hqdefault.jpg', '') + '"><img src="' + thumbUrl + '" alt="' + title.replace(/"/g,'&quot;') + '" style="max-width:100%;height:auto;border-radius:8px;" /></a></p>' + htmlWithImage;
    }
  }

  MailApp.sendEmail(recipient, title, htmlToPlain_(htmlWithImage), {
    htmlBody: htmlWithImage,
    name: 'Hub RSS Article Publisher'
  });
}

// ALSO: In processFeed_, right after you create the pending item, save thumb for later use
// Add this inside entries.forEach loop after P.setProperty(pendingPrefix + id...):
// try { const tm = (entry.html.match(/https:\/\/i\.ytimg\.com\/vi\/[^"'>\s]+\/hqdefault\.jpg/i)||[])[0]; if(tm) P.setProperty('PEND_' + index + '_last_thumb', tm); } catch(e){}

// EVEN BETTER: Update your Hub's RSS to guarantee Blogger gets image
// In autopilot_generator.py, your seo_blog_post_html ALREADY has:
// '<p><a href="{canonical_url}"><img src="{thumb_url}" ...></a></p>' 
// So after you upload the new autopilot_generator.py to GitHub, Hub RSS will contain proper <img> and Blogger will show it without this patch
// But keep this patch until Hub rebuilds (takes 1 auto run)
