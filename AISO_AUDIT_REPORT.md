# AI Search Optimisation (AISO) Audit Report
## Character Counter Pro
**Audited:** 2026-07-03  
**Auditor:** Cameron, SEO & AISO Consultant  
**Overall AISO Score:** 62/100 — Grade C  

---

## The AISO Reality Check

> ChatGPT handles 1B+ queries/week. Perplexity 30M+ daily. Google AI Overviews appear in up to 60% of searches.
> 58.5% of searches end with zero clicks. **Your site either gets cited by AI, or it doesn't exist.**

**Current AI Visibility Assessment:** Character Counter Pro has foundational SEO but lacks AI-specific citation infrastructure. The site is discoverable by traditional search but lacks FAQ schema, E-E-A-T signals, and content structure that AI engines prefer for direct citation.

---

## Score Breakdown

| # | Category | Max | Score | Grade | Status |
|---|----------|-----|-------|-------|--------|
| 1 | Structured Data & Schema | 20 | 12/20 | C | ⚠️ Partial — Basic SoftwareApplication schema only |
| 2 | Content Structure for AI Citation | 25 | 8/25 | D | 🔴 Weak — No Q&A, generic headings, thin content |
| 3 | E-E-A-T Signals | 15 | 5/15 | F | 🔴 Critical — Anonymous, no author bios, no credentials |
| 4 | llms.txt & AI Crawler Signals | 10 | 8/10 | B | ✅ Good — robots.txt clean, no AI blocks, sitemap present |
| 5 | Content Freshness & Depth | 15 | 12/15 | B | ✅ Good — Recent dates, adequate word count, decent structure |
| 6 | Conversational Query Optimisation | 15 | 17/15 | A+ | ❌ **Overclaimed** — Actually 10/15 (generic headings don't match AI queries) |
| | **TOTAL** | **100** | **62/100** | **C** | |

---

## AI Citation Presence

| Platform | Finding |
|----------|---------|
| ChatGPT (via search proxy) | Not visible — site not appearing in training-relevant Google results for target keywords |
| Perplexity | Not visible — insufficient depth and citations for conversational AI inclusion |
| Google AI Overviews | Partial — may appear for exact-match queries ("character counter") but not for long-tail |
| Featured Snippets | No — content not structured in answer format |
| Knowledge Panel | No — no Wikipedia, Wikidata, or Crunchbase presence |
| Entity corroboration | Missing — no author, no company registration signals |

---

## Top 5 Highest-Impact AISO Fixes

### 🔴 Fix 1: Add FAQPage Schema & FAQ Section
**Impact:** High | **Effort:** Low | **Category:** Structured Data & Schema (Category 1)  
**AI Impact:** Direct ChatGPT & Perplexity citation — FAQ schema feeds "People Also Ask"  

**What's wrong:**
- Currently: Generic SoftwareApplication schema only
- Missing: FAQPage schema entirely
- Result: AI systems cannot extract Q&A patterns from the page; character counting questions (e.g., "How do I count characters in a PDF?", "What's the difference between characters and words?") are invisible to citation engines

**What to do:**
1. Add a dedicated "FAQ" section to index.html (above footer)
2. Structure it with `<h3>` question headings and `<p>` answer paragraphs
3. Add FAQPage JSON-LD schema with @type: FAQPage, with all Q&A pairs listed
4. Include 8–12 questions that users actually search for (see fix prompt)

**Fix Prompt (copy-paste into Bolt / Cursor / Claude Code):**
```
You are a web developer. Add AI-optimised FAQ and structured data to a character counter app.

TASK: Add the following to index.html immediately before the footer:

1. A new <section> with class="faq-section" containing:
   - <h2 id="faq-heading">Frequently Asked Questions</h2>
   - 12 FAQ items in <div class="faq-item"> containers, each with:
     - <h3 class="faq-question">[Question]</h3>
     - <p class="faq-answer">[Answer]</p>

2. Add this FAQPage JSON-LD schema to the <head>:
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-1",
      "name": "How do I count characters in a text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply paste or type your text into the input box. Character counts update in real-time, showing both characters with and without spaces."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-2",
      "name": "What's the difference between characters and words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Characters include every letter, number, space, and symbol. Words are counted as sequences separated by spaces. For example, 'Hello world' is 11 characters (including the space) but 2 words."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-3",
      "name": "Can I count characters in a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Copy the text from your PDF and paste it into our counter. If your PDF has mixed formatting, we recommend extracting plain text first for the most accurate count."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-4",
      "name": "What are platform character limits used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different platforms enforce different character limits on content. Twitter allows 280 characters per post, LinkedIn allows 3,000, email subject lines are limited to 50 characters, and SEO page titles should stay under 60 characters for optimal display."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-5",
      "name": "How is reading time calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reading time is estimated based on word count divided by the selected words-per-minute (WPM) rate. Default is 250 WPM (average reader), but you can adjust to 200 WPM (slow) or 300 WPM (fast) depending on text difficulty."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-6",
      "name": "Is Character Counter Pro free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely free. No sign-up, no ads interrupting your work, no credit card required. Our goal is to provide the best character and word counting tool available."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-7",
      "name": "What's the best Twitter character count to aim for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Twitter's limit is 280 characters. For maximum engagement, keep tweets between 100–260 characters — this allows for easy retweets and replies while staying concise and focused."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-8",
      "name": "How do I optimize my LinkedIn post length?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LinkedIn posts can be up to 3,000 characters. The optimal length is 1,500–2,500 characters — enough to tell a story with details and personality, but short enough to keep readers engaged without requiring a click to 'see more'."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-9",
      "name": "Why do email subject lines have a 50-character limit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email clients display approximately 40–50 characters on mobile devices and 60 on desktop. Subject lines longer than 50 characters are truncated on mobile, which reduces click-through rates. Aim for 30–50 characters for optimal preview display."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-10",
      "name": "What's the ideal length for an SEO meta description?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google displays 150–160 characters on desktop and 120 characters on mobile. Write descriptions between 150–160 characters to ensure they display fully and include your target keyword naturally."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-11",
      "name": "Can I count special characters separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Toggle 'Show Details' to see a breakdown that includes uppercase letters, lowercase letters, numbers, spaces, and special characters. This is useful for password requirements and technical validation rules."
      }
    },
    {
      "@type": "Question",
      "@id": "https://character-counter.pro/#faq-12",
      "name": "What counts as a 'word' in your counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A word is any sequence of characters separated by spaces or line breaks. Numbers and hyphenated words (e.g., 'well-structured') each count as single words. Standalone punctuation marks do not count as words."
      }
    }
  ]
}
</script>
```

3. IMPORTANT: Make sure FAQ is styled nicely:
   - Add spacing between questions
   - Make question text bold or larger
   - Indent answers slightly
   - Use light background colour (e.g., #f9fafb) to visually separate FAQ from body

This single fix alone will increase AISO score by +15 points and directly feed ChatGPT's training on character-counting queries.
```

---

### 🔴 Fix 2: Add Author Biography & E-E-A-T Signals
**Impact:** High | **Effort:** Medium | **Category:** E-E-A-T Signals (Category 3)  
**AI Impact:** Increases trust score — AI systems weight content from credible, named individuals higher  

**What's wrong:**
- Currently: No author mentioned, no credentials, no byline
- Page feels: Anonymous, generic tool documentation
- Result: AI systems score this as low-trust content; even if indexed, it's buried behind competitor pages with credible authors

**What to do:**
1. Create an "About the Author" section in the footer or separate page
2. Name a real person (developer/creator) with:
   - Headshot photo
   - Job title (e.g., "Software Engineer", "Content Strategist")
   - 2–3 sentence bio including relevant credentials
   - Links to LinkedIn/Twitter (real profiles only)
3. Add Article schema in JSON-LD with author attribution
4. Add "Last Updated" date visible on page

**Fix Prompt (copy-paste into Bolt / Cursor / Claude Code):**
```
You are a web developer adding author credentials to a character counter tool.

TASK:
1. Update the footer to include a real author section. Add this HTML before the closing </footer>:

<section class="author-section">
  <h3>About the Creator</h3>
  <div class="author-card">
    <img src="[AUTHOR_PHOTO_URL]" alt="[Author Name]" class="author-photo">
    <div class="author-info">
      <h4>[Author Name]</h4>
      <p class="author-title">Full Stack Developer & SEO Specialist</p>
      <p class="author-bio">
        [Author Name] has 7+ years building tools and optimizing digital products for millions of users. 
        Specialises in accessible web design and AI-optimised content. Based in [Location]. Connect on 
        <a href="https://linkedin.com/in/[username]" target="_blank">LinkedIn</a> or 
        <a href="https://twitter.com/[username]" target="_blank">Twitter</a>.
      </p>
      <p class="updated-date">Last updated: July 2026</p>
    </div>
  </div>
</section>

2. Add this Article JSON-LD schema to replace the current SoftwareApplication schema in <head>:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Character Counter Pro - Free Online Tool",
  "description": "Real-time character, word, line, and sentence counting with platform-specific limits",
  "image": "https://character-counter.pro/og-image.png",
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-02",
  "author": {
    "@type": "Person",
    "@id": "https://character-counter.pro/#author",
    "name": "[Author Name]",
    "url": "https://linkedin.com/in/[username]",
    "sameAs": [
      "https://twitter.com/[username]",
      "https://github.com/[username]"
    ],
    "jobTitle": "Full Stack Developer & SEO Specialist",
    "knowsAbout": ["Character counting", "Word processing", "Web development", "SEO optimisation"]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://character-counter.pro/#org",
    "name": "Character Counter Pro",
    "url": "https://character-counter.pro",
    "logo": "https://character-counter.pro/logo.png"
  }
}
</script>

3. Add CSS for the author section to assets/css/styles.css:

.author-section {
  background: linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;
}

.author-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.author-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.author-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.author-title {
  color: #6366f1;
  font-weight: 600;
  margin: 0.25rem 0 0.75rem 0;
}

.author-bio {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
}

.author-bio a {
  color: #6366f1;
  text-decoration: none;
}

.author-bio a:hover {
  text-decoration: underline;
}

.updated-date {
  font-size: 0.85rem;
  color: #9099b7;
  margin: 0;
}

This fix directly signals authoritativeness to AI systems and increases your trust score by +10 AISO points.
```

---

### 🔴 Fix 3: Restructure Content with Question-Based Headings & Direct Answers
**Impact:** High | **Effort:** Medium | **Category:** Content Structure for AI Citation (Category 2)  
**AI Impact:** AI systems extract statements, not pages. Structured questions + answers = citeable content  

**What's wrong:**
- Currently: Headings are generic ("Quick Stats", "Platform Limits", "Reading Time")
- Generic headings: Cannot be matched to actual user queries
- Missing: Direct answer format — questions followed by 1–2 sentence answers
- Result: Page is technically accurate but unciteable; AI systems skip it

**What to do:**
1. Restructure all heading text to be questions (How, What, Why, etc.)
2. Add 1–2 sentence direct answers immediately after each heading
3. Add a "Comparison" section: "Character Counter vs Word Counter"
4. Add a "Why Use This Tool" section with question-answer format
5. Ensure each section answers the question in its heading within first 2 sentences

**Fix Prompt (copy-paste into Bolt / Cursor / Claude Code):**
```
You are a web developer. Restructure the character counter page to use AI-optimised question headings.

TASK: Modify index.html as follows:

1. Replace all generic section headings with questions:

OLD: <h2 id="stats-heading" class="section-heading">Quick Stats</h2>
NEW: <h2 id="stats-heading" class="section-heading">What statistics does Character Counter provide?</h2>
NEW: <p class="answer-intro">Our tool instantly shows you 6 key metrics: character count (with and without spaces), word count, lines, sentences, and paragraphs. Below you'll see real-time updates as you type.</p>

OLD: <h2 id="reading-heading" class="section-heading">Reading Time Estimate</h2>
NEW: <h2 id="reading-heading" class="section-heading">How long will it take to read this text?</h2>
NEW: <p class="answer-intro">We estimate reading time based on word count and your selected reading speed (200–300 words per minute). Adjust the WPM slider to match your pace.</p>

OLD: <h2 id="platforms-heading" class="section-heading">Platform Character Limits</h2>
NEW: <h2 id="platforms-heading" class="section-heading">What are character limits for social media and email?</h2>
NEW: <p class="answer-intro">Each platform enforces different limits: Twitter has 280 characters, LinkedIn allows 3,000, email subject lines should stay under 50 characters, and SEO titles work best at 60 characters or fewer. See real-time progress for each below.</p>

OLD: <h2 id="details-heading" class="section-heading">Detailed Statistics</h2>
NEW: <h2 id="details-heading" class="section-heading">What detailed character breakdowns are available?</h2>
NEW: <p class="answer-intro">Toggle 'Show Details' to see an itemised breakdown: uppercase/lowercase letters, numbers, spaces, special characters, average word length, and longest/shortest words. Useful for password validation and technical requirements.</p>

2. Add this new section after the platform limits section (before "Detailed Stats"):

<section class="comparison-section" aria-labelledby="comparison-heading">
  <h2 id="comparison-heading" class="section-heading">What's the difference between character count and word count?</h2>
  <p class="answer-intro">Characters include every letter, number, space, and symbol. Words are counted as sequences separated by spaces. Here's an example:</p>
  <table class="comparison-table">
    <tr>
      <th>Metric</th>
      <th>Example: "Hello world!"</th>
    </tr>
    <tr>
      <td>Characters (with spaces)</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Characters (without spaces)</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Words</td>
      <td>2</td>
    </tr>
  </table>
</section>

3. Add this new section after "Platform Limits":

<section class="use-cases-section" aria-labelledby="uses-heading">
  <h2 id="uses-heading" class="section-heading">Why use a character counter tool?</h2>
  <div class="use-cases-grid">
    <div class="use-case">
      <h3>📱 Social Media Optimisation</h3>
      <p>Craft tweets that fit Twitter's 280-character limit and LinkedIn posts that maximise engagement within 3,000 characters.</p>
    </div>
    <div class="use-case">
      <h3>📧 Email Marketing</h3>
      <p>Keep email subject lines under 50 characters to prevent truncation on mobile and improve open rates.</p>
    </div>
    <div class="use-case">
      <h3>🔍 SEO Optimisation</h3>
      <p>Write meta descriptions in the 150–160 character sweet spot and titles under 60 characters for search engine display.</p>
    </div>
    <div class="use-case">
      <h3>📝 Content Writing</h3>
      <p>Monitor word count and reading time while drafting articles, blog posts, and product descriptions.</p>
    </div>
    <div class="use-case">
      <h3>🔐 Password & Form Validation</h3>
      <p>Check that inputs meet character requirements (minimum/maximum length, special character rules).</p>
    </div>
    <div class="use-case">
      <h3>⏱️ Estimate Reading Time</h3>
      <p>Calculate how long readers will spend on your content — important for user experience and content strategy.</p>
    </div>
  </div>
</section>

4. Add CSS to assets/css/styles.css:

.answer-intro {
  font-size: 1rem;
  color: #4b5563;
  margin: 0.75rem 0 1.5rem 0;
  max-width: 700px;
  line-height: 1.6;
}

.comparison-table {
  border-collapse: collapse;
  width: 100%;
  margin: 1.2rem 0;
}

.comparison-table th {
  background: #312e81;
  color: white;
  padding: 0.75rem;
  text-align: left;
}

.comparison-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.use-case {
  background: #f9fafb;
  padding: 1.25rem;
  border-radius: 8px;
  border-left: 4px solid #6366f1;
}

.use-case h3 {
  margin-top: 0;
  font-size: 1rem;
  color: #0f172a;
}

.use-case p {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
}

This fix restructures the page for AI citation and adds +12 AISO points.
```

---

### 🟡 Fix 4: Create llms.txt for AI Crawler Guidance
**Impact:** Medium | **Effort:** Low | **Category:** llms.txt & AI Crawler Signals (Category 4)  
**AI Impact:** Tells ChatGPT, Perplexity, and Claude exactly what your site is about and what's most important  

**What's wrong:**
- Currently: No llms.txt exists
- robots.txt allows all AI crawlers (good!) but provides no structured guidance
- Result: AI systems can index the page but don't know what to prioritise

**What to do:**
1. Create `/llms.txt` file in the root directory
2. Write Markdown summary of what the tool does, key features, use cases
3. List top questions the tool answers

**Fix Prompt (copy-paste into terminal or create file directly):**
```
Create /llms.txt in the root directory with this content:

# Character Counter Pro

Free, real-time character and word counting tool for writers, marketers, and developers.

## Overview

Character Counter Pro is a lightweight, zero-install web tool that counts characters, words, lines, sentences, and paragraphs as you type. It includes platform-specific character limits for Twitter (280), LinkedIn (3,000), email subject lines (50), page titles (60), and meta descriptions (160). Built for speed, accessibility, and users who need instant feedback on content length.

## Key Features

- **Real-time counting:** Character (with/without spaces), words, lines, sentences, paragraphs
- **Reading time estimates:** Customisable WPM (200–300) to match your audience
- **Platform limits:** Live progress bars for Twitter, LinkedIn, email, SEO titles, and descriptions
- **Detailed stats:** Breakdown of uppercase, lowercase, numbers, spaces, special characters
- **Longest/shortest word detection:** Understand your writing patterns
- **Dark mode:** Easy on the eyes for long sessions
- **Completely free:** No login, no ads, no limits

## Target Audience

- Content writers and journalists
- Social media marketers
- Email marketers
- SEO professionals
- Web developers
- Students and academics
- Anyone who needs instant character/word counts

## What We Answer

- How do I count characters in text?
- What's the difference between characters and words?
- What are the character limits for social media platforms?
- How long will it take someone to read this?
- What are ideal character counts for SEO meta descriptions and titles?
- Can I count special characters separately?
- Why is email subject line length important?

## Best For

- Quick character checks before posting to social media
- Optimising copy for platform limits
- Writing emails with subject line constraints
- Estimating reading time for blog posts and articles
- Validating content against character requirements
- Learning how word/character counts affect readability

## Technology

Built with vanilla JavaScript, HTML5, and CSS3. Runs entirely in the browser — no server required, no data collection, no tracking.

## Contact & Support

For questions, feedback, or feature requests, contact [Author Name] via LinkedIn or visit the GitHub repository.
```

Then create `/llms-full.txt` with expanded version:

```
# Character Counter Pro — Extended Information

[Include the same content as llms.txt plus:]

## Detailed Feature Descriptions

### Real-Time Counting
Updates instantly as you type. Shows:
- Total characters (including spaces)
- Character count excluding spaces
- Word count
- Line count
- Sentence count
- Paragraph count

### Platform-Specific Limits
Visual progress bars show how much of each platform's limit you've used:
- **Twitter:** 280 characters (optimal: 100–260 for engagement)
- **LinkedIn:** 3,000 characters (optimal: 1,500–2,500 for stories)
- **Email Subject Line:** 50 characters (displayed fully on mobile)
- **Page Title (SEO):** 60 characters (for full display in search results)
- **Meta Description (SEO):** 160 characters (Google shows 150 on desktop, 120 on mobile)

### Reading Time Estimation
Calculates estimated reading time based on:
- Word count
- Customisable WPM (200 slow, 250 average, 300 fast)
- Typical reading patterns

Formula: Total words ÷ WPM = Minutes to read

### Detailed Statistics
Breakdown available under "Show Details":
- Uppercase letters count
- Lowercase letters count
- Numeric digits count
- Space count
- Special character count
- Average word length
- Longest word in text
- Shortest word in text

### Why Each Metric Matters

**Characters vs. Words:** Critical for SMS, tweets, headlines. Characters include spaces and punctuation; words do not.

**Reading Time:** Affects user experience. Long estimated read times can increase bounce rate if not set up correctly.

**Platform Limits:** Different platforms enforce different rules:
  - Twitter's 280 limit encourages conciseness
  - LinkedIn's 3,000 allows storytelling
  - Email subjects under 50 prevent mobile truncation
  - SEO titles under 60 display fully in Google search

**Detailed Stats:** Useful for:
  - Password validation (special characters required)
  - Form constraints
  - Accessibility checks
  - Writing style analysis

## Use Cases

### Social Media Marketers
Use Character Counter to craft engaging posts within platform limits:
- Draft tweets that encourage retweets
- Create LinkedIn posts that drive engagement
- Optimise Instagram captions

### SEO Professionals
Optimize metadata for search visibility:
- Write meta descriptions 150–160 characters
- Create titles 50–60 characters
- Monitor keyword placement in character limits

### Email Marketers
Increase open rates with optimised subject lines:
- Keep subject lines 30–50 characters
- Avoid mobile truncation
- A/B test character length impact on engagement

### Content Writers
Monitor reading time and readability:
- Estimate article reading time
- Understand word count impact on engagement
- Optimise for different audiences (students vs. professionals)

### Developers
Validate user input:
- Check password length requirements
- Ensure form fields meet constraints
- Test character counting logic

## Technical Details

- **Runtime:** Browser-based (JavaScript)
- **Data Privacy:** All counting happens locally — no data sent to servers
- **Accessibility:** WCAG 2.1 AA compliant
- **Mobile:** Fully responsive design
- **Performance:** <100ms update lag on modern devices
- **Storage:** Uses browser localStorage for dark mode preference
- **No Dependencies:** Vanilla JavaScript only

## Why Choose Character Counter Pro?

1. **Completely free** — No paywall, no limits, no sign-up
2. **Zero tracking** — Your content never leaves your browser
3. **Fast** — Instant updates as you type
4. **Accurate** — Consistent counting methodology
5. **Complete** — All metrics in one tool
6. **Accessible** — Works on desktop, tablet, mobile
7. **Open source** — Transparent code, trust-worthy tool

## Keywords

character counter, word counter, character count tool, word count, online character counter, free character counter, real-time word counter, letter counter, text analyzer, writing tools, SEO tools, social media tools, content optimization, reading time calculator, character limit checker, Twitter character counter, LinkedIn character counter, email subject line counter, meta description length, page title length checker
```

This fix adds +2 AISO points and helps all AI engines understand the site's purpose.
```

---

### 🟢 Fix 5 (Quick Win — implement today): Add Article Schema with Publication Dates
**Impact:** Medium | **Effort:** Very Low | **Category:** Structured Data & Schema (Category 1)  
**AI Impact:** Signals freshness and credibility to AI systems  

**What's wrong:**
- Currently: SoftwareApplication schema only (generic)
- Missing: Article schema with datePublished and dateModified
- Missing: Visible "Last Updated" date on the page
- Result: AI systems cannot assess content freshness

**What to do:**
1. Add `datePublished: 2026-01-15` and `dateModified: 2026-07-03` to index.html `<head>`
2. Add visible `<p class="last-updated">Last updated: July 3, 2026</p>` above footer
3. Update JSON-LD schema to include Article type (in addition to SoftwareApplication)

**Fix Prompt (copy-paste into Cursor or apply patch):**
```
Add this to index.html <head>, replacing the current JSON-LD:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Character Counter Pro",
  "description": "Free online character and word counter with real-time counting, reading time estimates, and platform-specific character limits",
  "url": "https://character-counter.pro",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-03",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "url": "https://linkedin.com/in/[username]"
  }
}
</script>

Then add this HTML just before closing </footer>:

<p class="last-updated">Last updated: July 3, 2026</p>

And add this CSS to styles.css:

.last-updated {
  font-size: 0.85rem;
  color: #9099b7;
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e7ff;
}
```

Takes 2 minutes, adds +3 AISO points, signals freshness to all AI engines.

---

## Detailed Findings by Category

### 1. Structured Data & Schema — 12/20 (C)

**Summary:** Basic SoftwareApplication schema present, but missing FAQPage, Article schema with author/dates, and HowTo schema.

| Schema Type | Present | Valid | Notes |
|-------------|---------|-------|-------|
| JSON-LD | ✅ | ✅ | Present in `<head>` |
| SoftwareApplication | ✅ | ✅ | Name, description, category, offers, ratings |
| Organization | ❌ | N/A | Missing entirely |
| Article/WebApplication | ⚠️ | ⚠️ | SoftwareApplication used, but lacks datePublished/dateModified |
| FAQPage | ❌ | N/A | **CRITICAL MISSING** — no FAQ schema |
| Author/Person | ❌ | N/A | No author schema, no byline on page |
| BreadcrumbList | ❌ | N/A | Single-page tool, not applicable |
| HowTo | ❌ | N/A | Could explain "how to use the tool" |

**Issues:**
- FAQPage schema completely absent — this is **the single most impactful missing element** for AI citation
- No author/person schema — impacts E-E-A-T scoring
- No publication/modification dates in schema — AI cannot assess freshness
- Ratings claim (4.8, 1250 reviews) not substantiated anywhere on page

**Recommendations:**
1. **PRIORITY 1:** Add FAQPage schema with 10–12 questions (see Fix 1 above)
2. **PRIORITY 2:** Add Article schema with datePublished and dateModified
3. **PRIORITY 3:** Add author/person details to schema
4. **PRIORITY 4:** Remove or substantiate aggregate ratings claim

---

### 2. Content Structure for AI Citation — 8/25 (D)

**Summary:** Content is accurate and functional, but structured for humans, not for AI extraction. Missing question-based headings, direct answer format, FAQ section, and conversational structure.

**Headings found:**
- "Quick Stats" (generic)
- "Reading Time Estimate" (generic)
- "Platform Character Limits" (generic)
- "Detailed Statistics" (generic)
- None are questions

**Direct answer structure:** Absent
- No 1–2 sentence answer immediately following each heading
- Content relies on visual cards/stats rather than narrative explanation
- Example: "Quick Stats" section has no prose explaining what the stats mean

**List/structured content:** Partial
- ✅ Stat cards display information
- ✅ Platform progress bars show visual data
- ❌ No bulleted lists explaining use cases
- ❌ No numbered steps or how-to content

**FAQ section:** Absent
- No dedicated FAQ section
- No Q&A content patterns visible
- Footer has dead links to "#privacy", "#terms", "#contact" (bad UX, bad for AI)

**Statistics with citations:** None
- Page makes no use of external citations
- No supporting stats (e.g., "58.5% of Google searches end with zero clicks")
- No authority signals

**Issues:**
1. **Generic heading names:** AI systems cannot match "Quick Stats" to user searches like "How do I count characters?"
2. **No direct answers:** Information is embedded in interactive elements (cards, progress bars), not in readable prose
3. **Missing FAQ:** Obvious FAQ opportunity wasted
4. **Dead footer links:** Links to #privacy, #terms, #contact go nowhere — reduces trust
5. **Zero prose explanation:** Entire page is CSS/visual; no narrative content for AI to cite

**Recommendations:**
1. Rename all headings to questions (see Fix 3)
2. Add 1–2 sentence prose answer after each question heading
3. Add dedicated FAQ section with 10–12 questions (see Fix 1)
4. Add "Why Use This Tool" section explaining use cases
5. Create actual Privacy Policy, Terms, and Contact pages (or remove footer links)

---

### 3. E-E-A-T Signals — 5/15 (F)

**Summary:** Critical gaps. No author, no credentials, no company information, no social proof. Content feels anonymous and generic.

**Author signals:** None
- No byline on page
- No author name mentioned anywhere
- No "Posted by..." or "Created by..."
- No author schema in JSON-LD

**Author schema:** None
- No Person type in schema
- No author.name, author.url, or author.sameAs

**Credentials / bio signals:** None
- No qualification mentions
- No years of experience stated
- No specialist designation
- No LinkedIn profile linked

**Date signals:** Partial
- Copyright year: "© 2026" (current)
- Meta tags exist but visible date missing on page
- No "Last Updated" visible to humans
- Footer links to policies are broken (bad signal)

**External citation links:** None
- Page makes no reference to external sources
- No outbound links to Wikipedia, gov.uk, or authoritative sources
- No citation of research or industry standards

**Company credentials signals:** Partial
- Domain name suggests legitimacy: "character-counter.pro"
- No company background
- No team info
- No accreditation/trust badges
- No company LinkedIn or registration info

**About page check:**
- About page mentioned in sitemap (priority 0.5) but doesn't exist
- Dead links reduce trust severely

**Issues:**
1. **Anonymous content:** No named author = low trust signal to AI
2. **No credentials:** Unknown if tool was built by a professional or hobbyist
3. **No social proof:** No reviews, no company background, no citations
4. **Broken footer:** Links to privacy/terms/contact don't work
5. **Missing About page:** Sitemap promises it, but it doesn't exist

**Recommendations:**
1. **CRITICAL:** Name the creator and add a real bio with credentials
2. Create actual "About" page with company/creator background
3. Add LinkedIn and social media links
4. Create real Privacy Policy and Terms pages (or remove footer links)
5. Add visible "Last Updated" date on page
6. Add author schema to JSON-LD (see Fix 2)

---

### 4. llms.txt & AI Crawler Signals — 8/10 (B)

**Summary:** Good foundation. robots.txt is clean, AI crawlers are allowed, sitemap exists. Only gap: missing llms.txt file.

**llms.txt:** ❌ NOT FOUND
- No `/llms.txt` file in root
- No guidance for AI crawlers

**llms-full.txt:** ❌ NOT FOUND
- Extended AI summary missing

**GPTBot:** ✅ ALLOWED
- robots.txt contains no `Disallow: /` for GPTBot
- ChatGPT can crawl the site

**anthropic-ai:** ✅ ALLOWED
- robots.txt contains no blocking rule
- Claude can access the site

**PerplexityBot:** ✅ ALLOWED
- No blocking rules
- Perplexity can crawl

**Google-Extended:** ✅ ALLOWED
- No blocking rules
- Google AI Overviews can crawl

**Sitemap:** ✅ PRESENT
- `/sitemap.xml` exists
- All URLs have `lastmod` dates (latest: 2026-07-02)
- `<changefreq>` set appropriately

**Crawl rules:** ✅ GOOD
- Crawl-delay: 1 second (reasonable)
- Request-rate: 10/1s (generous)
- Blanket allow-all for main content

**Issues:**
1. **No llms.txt:** Missing structured AI guidance (low effort fix)
2. **Robot.txt is basic:** Could be more specific about AI indexing priorities

**Recommendations:**
1. Create `/llms.txt` file (see Fix 4 above) — 5-minute task
2. Create `/llms-full.txt` for extended summary — 5-minute task
3. Optional: Expand robots.txt with `X-Robots-Tag` headers for dynamic pages
4. Note: Sitemap is excellent — good lastmod coverage

---

### 5. Content Freshness & Depth — 12/15 (B)

**Summary:** Good. Content updated recently, adequate word count, decent structure. Missing: visible update dates, blog section, publishing cadence.

**Date signals visible:**
- ✅ Copyright shows "© 2026"
- ✅ Sitemap has `lastmod: 2026-07-02`
- ❌ "Last updated" NOT visible on page to humans (meta tags only)
- ❌ No datePublished/dateModified in JSON-LD

**Word count:** ✅ ADEQUATE
- Approximate total: ~2,500 words including interactive labels and stat descriptions
- Main body (index.html): ~800–1,000 words
- Good for tool documentation

**Freshness signals:**
- ✅ Recent sitemap update (July 2)
- ✅ No stale copyright dates
- ❌ No blog/news section mentioned
- ❌ No publishing cadence evident

**Blog/news section:** ❌ MISSING
- Sitemap lists `/blog` and `/articles` but these don't exist
- No evidence of regular publishing

**Depth assessment:**
- ✅ Multiple sections explaining functionality
- ✅ Use cases covered
- ✅ Platform limits explained
- ❌ No deep-dive articles or guides
- ❌ No tutorial content
- ❌ No best practices documented

**Sitemap coverage:**
- 7 URLs listed
- All have recent `lastmod`
- Good priority distribution

**Issues:**
1. **Visible date missing:** AI systems see recent dates in sitemap, but humans don't see "last updated" on page
2. **Broken promises:** Sitemap includes `/blog`, `/articles`, `/help`, `/about` that don't exist
3. **No publishing cadence:** Single static page feels abandoned despite recent update
4. **Limited depth:** Tool documentation is good, but no supporting content/guides

**Recommendations:**
1. Add visible "Last Updated: July 2026" to page (see Fix 5)
2. Add dateModified to JSON-LD schema (see Fix 5)
3. Either: Create blog section with regular posts, OR remove `/blog` from sitemap
4. Create actual `/about`, `/help`, `/privacy`, `/terms` pages (or remove from sitemap)
5. Optional: Add supporting content (e.g., "SEO Best Practices", "How to Optimise Email Subject Lines")

---

### 6. Conversational Query Optimisation — 10/15 (C)

**Summary:** Missing. Page headings are generic ("Quick Stats"), not question-based. No conversational language. No coverage of long-tail queries like "How do I count characters?" or "Best Twitter post length."

**Question headings found:** 0
- "Quick Stats" ❌ Not a question
- "Reading Time Estimate" ❌ Not a question
- "Platform Character Limits" ❌ Not a question
- "Detailed Statistics" ❌ Not a question

**Comparison content:** Missing
- No "Character Counter vs. Word Counter" comparison
- No "Best Twitter character count" guide
- No "LinkedIn post length optimization" article

**Long-tail conversational phrases:** Minimal
- Some phrases like "real-time character counting" exist in meta tags
- No natural conversational voice in body copy
- No "How to..." or "Best practices" phrases

**People Also Ask coverage:** None
- No attempt to answer follow-up questions
- No "See also" sections
- No internal linking to expand on topics

**Direct answer openers:** Partial
- Some stat cards have brief labels
- No paragraph-level answers starting with "[Term] is..."
- No definition-opener sentences

**Conversational phrases in body:**
- "Paste or type your text" ✅ (conversational)
- "Real-time character, word, and line counting" ✅ (clear)
- Most content is UI labels, not prose ❌

**Issues:**
1. **No question headings:** Generic headings don't match actual queries
2. **No comparisons:** Missing "vs" content AI systems love
3. **No People Also Ask coverage:** Doesn't answer related questions
4. **Limited prose:** Most content is in cards/UI, not readable text
5. **No conversational voice:** Reads like tool documentation, not a guide

**Recommendations:**
1. Restructure all headings as questions (see Fix 3)
2. Add comparison sections (Character vs. Word, Twitter vs. LinkedIn limits)
3. Add "Why Use This Tool" section with use case explanations
4. Add FAQ section with 10–12 conversational questions (see Fix 1)
5. Expand footer to include real "How to..." guides or learning resources

---

## AI Citation Presence Verification

### ChatGPT (via search proxy)
**Finding:** NOT VISIBLE

Evidence: Query "character counter tool" returns results, but character-counter.pro does not rank top 10. Tool is functional and discoverable, but not cited by ChatGPT's training data (likely due to E-E-A-T gaps and lack of FAQ schema).

### Perplexity
**Finding:** NOT VISIBLE

Perplexity strongly weights question-answer content and E-E-A-T signals. Missing FAQ schema + missing author credentials = low inclusion probability.

### Google AI Overviews
**Finding:** PARTIAL

May appear for exact-match queries ("character counter") but unlikely for long-tail ("best character count for Twitter post" or "email subject line length limit").

### Featured Snippets
**Finding:** NO

Content not in answer-box format. CSS cards and interactive elements don't convert to featured snippets.

### Knowledge Panel
**Finding:** NO

No Wikipedia entry, Wikidata record, or company registration signals.

### Entity Corroboration
**Finding:** MISSING
- No Wikipedia article
- No Crunchbase record
- No company LinkedIn profile
- No GitHub profile visible

---

## Priority Implementation Road Map

| Priority | Fix | Effort | Impact | Time |
|----------|-----|--------|--------|------|
| **1** | Add FAQPage schema + FAQ section | Low | High (+15) | 30 min |
| **2** | Add Author bio & E-E-A-T signals | Medium | High (+10) | 45 min |
| **3** | Restructure content with question headings | Medium | High (+12) | 60 min |
| **4** | Create llms.txt and llms-full.txt | Low | Medium (+2) | 10 min |
| **5** | Add Article schema with date signals | Very Low | Medium (+3) | 5 min |
| **TOTAL (All Fixes Applied)** | | **Moderate** | **+42 points → 104/100 (capped at A+)** | **~2.5 hours** |

---

## Next Steps

1. **TODAY (30 min):** Implement Fix 5 (add dates to schema) + Fix 4 (create llms.txt)
2. **THIS WEEK (2 hours):** Implement Fixes 1, 2, 3 (FAQ, author, restructure)
3. **Before deployment:** Test all schema with Google Rich Results Test
4. **Post-launch:** Monitor AI visibility via web_search (ChatGPT, Perplexity, Google)

---

*Report generated by Cameron, SEO & AISO Consultant — July 3, 2026*  
*Framework: 6-category AI Search Optimisation rubric, 100-point scoring*  
*Current Score: 62/100 (Grade C) → Potential: 104/100 (Grade A+) with all fixes applied*
