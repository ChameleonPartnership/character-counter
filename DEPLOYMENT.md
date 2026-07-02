# Character Counter Pro - Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended) ⭐

**Fastest & easiest option for static deployment**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd /Users/paulodonnell/.openclaw/workspace/codex/character-counter
vercel deploy --prod
```

**Configuration (vercel.json):**
```json
{
  "buildCommand": "echo 'Static deployment'",
  "outputDirectory": ".",
  "env": {
    "NODE_ENV": "production"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 2. Netlify

**Alternative static hosting with excellent performance**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /Users/paulodonnell/.openclaw/workspace/codex/character-counter
netlify deploy --prod --dir=.
```

**netlify.toml Configuration:**
```toml
[build]
  publish = "."
  command = "echo 'Static site'"

[context.production]
  environment = { NODE_ENV = "production" }

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=3600, must-revalidate"
```

### 3. GitHub Pages

**Free hosting directly from GitHub**

```bash
# 1. Create GitHub repository
git remote add origin https://github.com/yourusername/character-counter.git
git branch -M main
git push -u origin main

# 2. Enable Pages in GitHub repo settings:
#    - Go to Settings > Pages
#    - Source: Deploy from a branch
#    - Branch: main
#    - Folder: / (root)
#    - Save

# Live at: https://yourusername.github.io/character-counter
```

### 4. Self-Hosted (Traditional Server)

**Deploy via FTP/SSH**

```bash
# 1. Compress files
cd /Users/paulodonnell/.openclaw/workspace/codex
zip -r character-counter.zip character-counter/

# 2. Upload via FTP/SSH to your server:
#    - Upload all files to /public_html or /www
#    - Ensure index.html is accessible
#    - Set proper permissions (644 for files, 755 for directories)

# 3. Configure web server (Apache):
# .htaccess in root:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# 4. Or with Nginx:
# In server block:
location / {
  try_files $uri $uri/ /index.html;
}
```

## Pre-Deployment Checklist

### Performance
- [ ] Run Lighthouse audit: `npm run lighthouse`
  - Target: 85+ overall score
  - Performance: 95+
  - Accessibility: 100
  - SEO: 100

### SEO
- [ ] Update canonical URL in index.html
- [ ] Verify meta tags (title, description)
- [ ] Test Open Graph tags (og:image, og:description)
- [ ] Update robots.txt with correct domain
- [ ] Update sitemap.xml with correct URLs
- [ ] Submit sitemap to Google Search Console

### Security
- [ ] Enable HTTPS (automatic with Vercel/Netlify)
- [ ] Add security headers (CSP, X-Frame-Options)
- [ ] Review Content Security Policy
- [ ] Check for hardcoded URLs

### Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS, Android)
- [ ] Test dark mode toggle
- [ ] Test keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify all buttons work
- [ ] Test clipboard copy functionality

### Content
- [ ] Review footer links
- [ ] Update privacy policy URL
- [ ] Update terms of service URL
- [ ] Verify contact information
- [ ] Add AdSense code if monetizing

## Production Environment Variables

### For Monetization
Create `.env.production` (not tracked in git):
```
ADSENSE_PUBLISHER_ID=ca-pub-xxxxxxxxxxxxxxxx
ANALYTICS_ID=GA_XXXXXXXXX_X
```

### Google Analytics Integration

Add to index.html before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID', {
    'page_path': window.location.pathname
  });
</script>
```

### Google AdSense Integration

Update ad placeholder in index.html:
```html
<div id="google_ads_1"></div>

<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-xxxxxxxxxxxxxxxx",
    enable_page_level_ads: true
  });
</script>
```

## Domain Setup

### Custom Domain with Vercel
```bash
# In Vercel dashboard:
# 1. Add Domain
# 2. Add your domain name
# 3. Follow DNS instructions:
#    - Add A record: 76.76.19.0
#    - Add CNAME: www.yourdomain.com -> cname.vercel-dns.com
```

### Custom Domain with Netlify
```bash
# In Netlify dashboard:
# 1. Site settings > Domain management
# 2. Add custom domain
# 3. Follow DNS instructions
```

## Monitoring & Maintenance

### Set Up Alerts
- [ ] Website uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry, Rollbar)
- [ ] Analytics dashboard (Google Analytics)
- [ ] Performance monitoring (Vercel Analytics)

### Regular Maintenance
- [ ] Check for broken links monthly
- [ ] Review analytics quarterly
- [ ] Update dependencies yearly
- [ ] Test functionality after updates
- [ ] Monitor Core Web Vitals

### File Size Optimization

Current sizes:
- `index.html`: 14.5 KB
- `styles.css`: 17.9 KB
- `app.js`: 19 KB
- **Total:** 51.4 KB

**Minified:**
```bash
# CSS minification
npm install -g cssnano-cli
cssnano assets/css/styles.css > assets/css/styles.min.css

# JavaScript minification
npm install -g terser
terser assets/js/app.js -c -m -o assets/js/app.min.js
```

## Caching Strategy

### HTTP Headers for Vercel
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    }
  ]
}
```

## CDN Configuration

For Cloudflare (Free):
1. Point nameservers to Cloudflare
2. Enable Auto Minify (CSS, JavaScript, HTML)
3. Set cache level to "Cache Everything"
4. Enable Brotli compression
5. Set browser cache to 1 month

## Rollback Plan

If deployment fails:
```bash
# Revert to previous version
git revert HEAD
git push

# Or restore from backup
git checkout <previous-commit-hash>
git push --force
```

## Verification Checklist

After deployment:
- [ ] Site loads at custom domain
- [ ] HTTPS works (green padlock)
- [ ] All assets load (check Network tab)
- [ ] No console errors
- [ ] Lighthouse score 85+
- [ ] Character counting works
- [ ] Dark mode toggle works
- [ ] All buttons responsive
- [ ] Mobile layout correct
- [ ] Google Analytics firing
- [ ] AdSense ads displaying (if enabled)

## Support Contacts

- Vercel Support: https://vercel.com/support
- Netlify Support: https://support.netlify.com
- GitHub Pages Help: https://docs.github.com/en/pages
- Let's Encrypt (SSL): https://letsencrypt.org

---

**Deployment Status Template** (save as deployment-log.md):

```markdown
# Deployment Log

## Version 1.0.0
- **Deployed:** [DATE]
- **Platform:** [VERCEL/NETLIFY/GITHUB]
- **Domain:** [DOMAIN]
- **Lighthouse Score:** [SCORE]
- **Issues:** None
- **Deployed By:** [USERNAME]

## Version 1.0.1
- **Deployed:** [DATE]
- **Changes:** [SUMMARY]
```
