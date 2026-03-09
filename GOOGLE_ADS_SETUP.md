# Google Ads & SEO setup (Finlytiq)

This project is set up so you can run Google Ads easily with **one landing page per service** and **keyword-friendly** content.

## What’s already done

- **Separate URLs per service** – Use these as **Final URL** in Google Ads:
  - `/services/income-tax-filing`
  - `/services/gst-registration-returns`
  - `/services/virtual-cfo`
  - `/services/startup-advisory`
  - `/services/company-incorporation`
  - `/services/trademark-registration`
  - `/services/other-services`
- **SEO per page** – Each service page has its own **title**, **meta description**, **canonical URL**, **Open Graph** tags, and **meta keywords**.
- **Structured data (JSON-LD)** – LocalBusiness on all pages; Service on each service page (helps Google understand your business and services).
- **Keyword-rich content** – Each service has:
  - `keywords` – used in `<meta name="keywords">` and as a **keyword idea list** for your ads.
  - `seoIntro` – short paragraph with location + service terms (Hyderabad, Telangana).
- **Sitemap & robots** – `public/sitemap.xml` and `public/robots.txt` so Google can discover and index your pages.

## What you need to do

### 1. Set your live domain

When you have a live URL (e.g. `https://www.finlytiq.com`):

- **Option A (recommended):** Create a `.env` in the project root and add:
  ```env
  REACT_APP_SITE_URL=https://www.finlytiq.com
  ```
  Rebuild and redeploy. Canonical URLs and JSON-LD will use this.

- **Option B:** In `public/sitemap.xml` and `public/robots.txt`, replace `https://www.finlytiq.com` with your real domain (e.g. find-and-replace).

### 2. Use the keyword list in Google Ads

- Open **`src/data/servicesData.js`**.
- For each service you run ads for, use the **`keywords`** and **`metaTitle`** / **`metaDescription`** as ideas for:
  - **Search keywords** (e.g. “Income tax filing Hyderabad”, “GST registration Telangana”).
  - **Ad headlines and descriptions** (match the message on the landing page).

Create **one campaign or ad group per service** and send traffic to the matching URL (e.g. “GST registration” ads → `/services/gst-registration-returns`).

### 3. After going live

- In **Google Search Console**: add your site and submit `https://yourdomain.com/sitemap.xml`.
- In **Google Ads**: use the service URLs above as landing pages and make sure **Final URL** matches the page (good for Quality Score).

### 4. Optional: add a share image

- Add an image (e.g. 1200×630) under `public/` (e.g. `og-image.png`).
- In `public/index.html`, add:
  ```html
  <meta property="og:image" content="https://www.finlytiq.com/og-image.png" />
  ```
  (Use your real domain.) This improves link previews when people share your pages.

---

**Summary:** Each service has its own page, URL, title, description, and keywords. Use those URLs in Google Ads and the keyword strings as ideas for your campaigns.
