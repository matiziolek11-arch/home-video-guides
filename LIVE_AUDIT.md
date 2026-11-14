# Live Hub check — 2026-11-04

## What I verified publicly

- The public homepage returns and a Google web search for the exact site returned the homepage. This establishes that the homepage appears in the search result set used by this search; it **does not** establish how many product pages Google indexed or whether they rank.
- Homepage output reports 7,583 videos/pages.
- The sitemap endpoint responds and lists many video and category URLs. A sitemap submission is not proof of indexing.
- `robots.txt` was previously checked: crawling is allowed and a sitemap is declared.

## Concrete quality issues visible on the live homepage

- A visible video summary calls a product “one of the more popular options” and displays generic prompt-like fragments such as “tank size and runtime noise level for night use”. This is not useful evidence and can mislead readers.
- Some card summaries are just manufacturer descriptions pasted in, while others say there is no useful summary. The page does not consistently distinguish video observations from seller/manufacturer claims.
- The page advertises “14 country editions” / retailer deals although those buttons are localized retailer search links—not 14 distinct editorial editions or confirmed live prices.
- The site has a large set of product URLs. The sitemap alone cannot tell whether each page deserves indexing; a Search Console page/query export is required to make safe index/noindex/consolidation decisions.

## Work applied locally in this package

- Kept the evergreen category-hub architecture, but only includes actually matched videos and removes unsupported ranking/test claims.
- Added a useful, interactive appliance-energy cost calculator, linked from homepage and sitemap.
- Improved source-summary cleaning to strip specific generic/generated filler while preserving available concrete product details. Tested against a representative noisy sample.
- Replaced unsupported “price comparison”, “60%-off” and “14 country editions” language in the generator copy with accurate retailer-listing wording.
- Updated product page label to identify summaries as based on the published video description rather than pretending they are spoken-video transcripts.
- Added self-referencing canonicals to homepage, video, category-hub, comparison, and calculator templates.
- Fixed sitemap generation: deduplicates and XML-escapes absolute URLs, writes a sitemap index when more than one chunk is needed, and removes obsolete chunks after a smaller rebuild.
- Added Google Video sitemap output for published watch pages, with the stable YouTube thumbnail, title, description, and embeddable player URL; robots.txt declares the video sitemap(s).
- Expanded summary cleanup for known generic prompt fragments. On the local 5,933-record video library, the checked families of templated filler fell from 1,106 matches to zero. This is a mechanical test, not a full human review of 5,933 descriptions.

## Validation and limits

- Python syntax check passed.
- Summary-cleanup test passed.
- Synthetic category-hub generation and category-match checks passed.
- Sitemap tests passed for XML escaping, URL deduplication, sitemap-index generation, and stale-chunk cleanup.
- No GitHub push or deployment was possible here. These fixes are not live yet.
- Google cannot be forced to index URLs. To identify actual non-indexed pages, duplicates, canonical issues, and query opportunities, we need the site's Search Console Performance and Pages/Indexing reports. I did not claim those reports were accessed.
