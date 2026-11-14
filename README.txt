HUB CONTENT QUALITY UPGRADE — LOCAL FILES ONLY

Main file: autopilot_generator.py

Changes made:
- Adds a standalone appliance electricity-cost calculator, linked from the homepage and included in the generated sitemap. It works in the browser without external services and clearly explains its estimate assumptions.
- Keeps the category hub pages as the traffic architecture, but removes unsubstantiated rank/test claims. Pages group videos only when a product title actually matches the category; empty categories are omitted, and irrelevant category links are not added. This avoids presenting the hub itself as a ranking of products without evidence.
- Replaces several unsupported “hands-on”, testing, verified-review, specs and price-comparison claims with accurate video-overview language and source/listing caveats.
- Keeps existing affiliate links and affiliate disclosures.
- Fixes IndexNow wording so it does not promise indexing.

Validation performed:
- Python syntax compilation passed.
- The calculator page was generated and checked for its core formula, canonical tag and interactive script.
- Three category-matching checks passed (matching category, avoiding overly broad “air” matching, and no false match). A synthetic build produced matched category hubs and sitemap entries without ranking/test claims.
- Sitemap and video-sitemap XML tests passed, including deduplication, XML escaping, sitemap index creation and stale chunk cleanup.
- Summary cleanup was tested on a sample and against the local 5,933-record library for named generic template phrases; this is not a full manual content review.

Important: These are local files. Nothing was pushed to GitHub or deployed. The public scheduled autopilot still needs the workflow to be installed in the remote repository and a scheduled run to succeed before it is restored.

Read TRAFFIC_SYSTEM.md for the implemented hub architecture, maintenance loop, limitations, and sources.

A live-page audit is in LIVE_AUDIT.md. It records public observations, local fixes, validation, and what cannot be verified without Search Console.

AUTOPILOT: The package workflow is scheduled every 4 hours UTC and also supports manual runs. It does not publish Blogger or WordPress posts; it scans/builds/deploys the Hub only. GitHub must have this workflow committed on the default branch with Actions enabled.
