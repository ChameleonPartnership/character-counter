# Character Counter Pro

A production-ready, free online character and word counter tool with real-time counting, reading time estimates, and platform-specific character limits.

## 🎯 Features

### Core Counting Features
- **Real-time Character Count** (with and without spaces)
- **Word Count** (with punctuation awareness)
- **Line Count** (accurate line tracking)
- **Sentence Count** (smart sentence detection)
- **Paragraph Count** (double newline detection)

### Advanced Features
- **Reading Time Estimate** (customizable WPM: 200/250/300)
- **Platform-Specific Limits** (Twitter, LinkedIn, Email, Page Title, Meta Description)
- **Detailed Statistics** (uppercase, lowercase, numbers, spaces, special characters)
- **Word Analysis** (average length, longest word, shortest word)
- **Copy Stats** (exportable statistics report)
- **Clear with Confirmation** (prevents accidental data loss)

### User Experience
- **Dark Mode Toggle** (system preference detection + local storage)
- **Real-time Updates** (no delay, instant feedback)
- **Responsive Design** (mobile-first, desktop optimized)
- **WCAG AA Accessibility** (keyboard navigation, screen readers)
- **Toast Notifications** (success/error feedback)
- **Keyboard Shortcuts** (Ctrl/Cmd+Shift+C, L, D)

### Developer Features
- **Vanilla JavaScript** (no dependencies)
- **Production-Ready Code** (optimized, minifiable)
- **SEO Optimized** (meta tags, schema.org, Open Graph)
- **Static Deployment** (Vercel, Netlify, GitHub Pages compatible)

## 📁 Project Structure

```
character-counter/
├── index.html                  # Main HTML file (SEO-optimized)
├── assets/
│   ├── css/
│   │   └── styles.css         # Responsive styles, dark mode, accessibility
│   └── js/
│       └── app.js             # Production JavaScript (19KB)
├── robots.txt                 # SEO robots configuration
├── sitemap.xml               # XML sitemap for search engines
├── .gitignore                # Git ignore rules
├── README.md                 # This file
└── package.json              # NPM metadata (optional)
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod --dir=.
```

### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in repository settings
3. Select `main` branch as source

### Traditional Server
Simply upload all files via FTP/SSH to your web server.

## 💻 Local Development

### Quick Start
1. Clone the repository:
```bash
git clone https://github.com/yourusername/character-counter.git
cd character-counter
```

2. Open in browser:
```bash
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

### Development Server (Optional)
```bash
npm install
npm start
```

## 🎨 Customization

### Change Primary Color
Edit `assets/css/styles.css`:
```css
:root {
    --color-primary: #4F46E5;  /* Change this hex code */
}
```

### Modify Platform Limits
Edit `assets/js/app.js` in the `updatePlatformLimits()` method:
```javascript
{ fill: this.twitterFill, text: this.twitterText, max: 280, name: 'Twitter' }
```

### Add Custom Keyboard Shortcuts
Edit the `handleKeyboardShortcuts()` method in `assets/js/app.js`.

## 📊 Performance

### Lighthouse Score Target: 85+
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 95+
- **SEO:** 100

### File Sizes
- `index.html`: ~14.5 KB
- `styles.css`: ~17.9 KB
- `app.js`: ~19 KB
- **Total:** ~51.4 KB (uncompressed)
- **Gzipped:** ~15 KB

## ♿ Accessibility

### WCAG AA Compliance
- ✅ Keyboard Navigation (Tab, Enter, Escape)
- ✅ Screen Reader Support (ARIA labels, roles)
- ✅ Color Contrast (minimum 4.5:1)
- ✅ Focus Indicators (visible outlines)
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Skip Links (skip to main content)
- ✅ Live Regions (status updates announced)

### Tested With
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

## 🌙 Dark Mode

### System Detection
The app automatically detects system preference:
- Light mode (default)
- Dark mode (when system prefers dark)
- Manual toggle available

### localStorage
User preference is saved in localStorage and persists across sessions.

## 🔒 Privacy & Security

- **No data collection** - all counting happens locally
- **No cookies** - except localStorage for preferences
- **No external requests** - self-contained tool
- **HTTPS recommended** - for deployment

## 📱 Mobile Responsive

### Breakpoints
- **Large Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

### Touch-Friendly
- Large tap targets (minimum 48px)
- Swipe-friendly layout
- Readable font sizes
- Proper spacing

## 🔍 SEO Features

### Meta Tags
- Title and description optimized for "character counter word counter online free"
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URL

### Structured Data
- SoftwareApplication schema.org
- Aggregate rating support
- Pricing information

### Search Engine Support
- robots.txt configuration
- XML sitemap
- Semantic HTML
- Fast load times

## 🛠️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

MIT License - feel free to use and modify for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or feature requests:
- GitHub Issues: [Create an issue](https://github.com/yourusername/character-counter/issues)
- Email: support@character-counter.pro

## 🚀 Roadmap

### Upcoming Features
- [ ] PDF export functionality
- [ ] Text analysis (readability score)
- [ ] Multiple text comparison
- [ ] Browser extension
- [ ] Mobile apps (iOS/Android)
- [ ] API endpoint for third-party integration

## 📈 Performance Metrics

- **First Contentful Paint (FCP):** < 1s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3s

## 🔐 Security

- No server-side processing
- All calculations happen client-side
- No sensitive data transmitted
- No database or backend required

## 💡 Tips & Tricks

### Keyboard Shortcuts
- `Ctrl/Cmd + Shift + C` - Copy all stats to clipboard
- `Ctrl/Cmd + Shift + L` - Clear text with confirmation
- `Ctrl/Cmd + Shift + D` - Toggle detailed statistics

### Using Different WPM Rates
- **200 WPM (Slow)** - Technical content, non-native readers
- **250 WPM (Average)** - General content, most readers
- **300 WPM (Fast)** - Skimming, familiar content

### Platform Tips
- **Twitter:** Keep under 280 characters for single tweets
- **LinkedIn:** Use up to 3000 characters for detailed posts
- **Email Subject:** Keep under 50 for mobile preview
- **Page Title:** 50-60 characters is optimal for SEO
- **Meta Description:** 155-160 characters is best

## 📊 Analytics Integration (Optional)

To add Google Analytics:
```html
<!-- Add to index.html before closing </body> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🎓 Educational Use

Perfect for:
- Classroom writing assignments
- Blog post optimization
- Social media content planning
- Email campaign writing
- SEO content optimization
- Student writing practice

---

**Made with ❤️ for writers, marketers, and content creators worldwide.**

Version 1.0.0 | Last Updated: July 2, 2026
