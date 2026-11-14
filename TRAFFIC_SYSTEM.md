HUB TRAFFIC SYSTEM — IMPLEMENTED DESIGN

The category hubs remain. The change is not to abandon hub pages; it is to make them honest, useful destinations rather than pretend rankings.

1. Intent-led hub pages
- Keep one evergreen hub per product family (kitchen, bedroom, climate, cleaning, office, gadgets, pets).
- Include only videos whose actual product title matches that hub. Drop empty hubs and do not insert unrelated videos just to fill ten slots.
- Present the content as product-video guides, not “best”, “top-rated”, tested, or ranked unless the site has documented, reproducible comparisons to support those claims.
- Each card leads to a deeper source-video page and retains disclosed affiliate destinations.

2. Useful ownable tool
- Publish the appliance electricity-cost calculator at /tools/appliance-energy-cost-calculator.html.
- Link it from the homepage and the sitemap. It estimates user-entered wattage × usage × price, states assumptions, and does not invent appliance specifications or current prices.

3. Continuous improvement loop
- Existing scheduled GitHub workflow remains the automation path; this local package does not change the remote schedule.
- On each build: refresh the video library, generate matched hub pages, create the calculator, and write sitemap links.
- Monthly: use Search Console queries/pages to find impressions without clicks and queries where the site is already visible; improve the matching hub with genuinely useful selection guidance and correct links. Merge or remove empty/duplicate pages rather than scaling page count.
- Track affiliate click-through separately from search visibility. Search Console impressions/clicks/queries are the discovery signal; affiliate click events are the commercial-intent signal. No ranking or traffic outcome is guaranteed.

4. What a hub needs before it can honestly become a ranked “Top 10”
A defined selection rule, a real comparison table using verified attributes, documented evidence for each inclusion, and a stated update date. A video title or scraped product description alone is not a rank/test. Until those inputs exist, keep the hub, but describe the videos accurately.

Research basis (checked 2026-11-04):
- Google Search Essentials / spam policies say scaled pages need added value; thin affiliate pages are a risk, while useful comparisons, original testing and product navigation/features can add value: https://developers.google.com/search/docs/essentials/spam-policies
- Google's people-first self-assessment asks for original analysis, substantial value, clear sourcing, and demonstrated first-hand expertise: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google says Product snippets are for pages focused on a single product; do not add product review/rating markup to a category list or fabricate ratings: https://developers.google.com/search/docs/appearance/structured-data/product-snippet and https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Google documents VideoObject and video sitemap fields that help it discover and understand videos; the generator now emits video sitemaps without inventing upload dates: https://developers.google.com/search/docs/appearance/structured-data/video and https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
- Google recommends canonical URLs and up-to-date sitemaps, while emphasizing that sitemaps do not guarantee indexing: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls and https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google says affiliate links should be qualified as sponsored (nofollow remains acceptable): https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
- A GitHub comparison-engine project reinforces using licensed/entered price data and tracking affiliate clicks, not scraping retailer prices: https://github.com/aimoneystacks-code/comparison-engine
- Reddit discussions are anecdotal, not ranking evidence. The useful repeated caution is that comparisons need real distinct evidence/trade-offs, and mass-publishing thousands of near-identical pages is not a durable traffic method: https://www.reddit.com/r/indiehackers/comments/1rs0cz4/use_the_comparison_seo_strategy_early_to_get_more/

Limitations
- Search was a targeted review of official Google documentation plus representative Reddit and GitHub material, not literally every page on those services.
- No Search Console or analytics account was connected in this task, so this package is not data-driven against your actual query/click performance.
- No GitHub push, live deployment, indexing or traffic result has been verified.
