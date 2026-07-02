# Character Counter Pro - Testing Guide

## Functional Testing

### Core Counting Features
- [ ] Character count updates in real-time as you type
- [ ] Character count (without spaces) is accurate
- [ ] Word count is correct (handles punctuation)
- [ ] Line count increments correctly with newlines
- [ ] Sentence count detects . ! ? properly
- [ ] Paragraph count uses double newline detection

### Advanced Features
- [ ] Reading time updates based on WPM selection
- [ ] WPM selector changes reading time estimates
- [ ] Twitter limit (280) progress bar works
- [ ] LinkedIn limit (3000) progress bar works
- [ ] Email subject (50) progress bar works
- [ ] Page title (60) progress bar works
- [ ] Meta description (160) progress bar works
- [ ] Progress bars change color at 80% (warning) and 100%+ (danger)

### Detailed Statistics
- [ ] Uppercase letter count is accurate
- [ ] Lowercase letter count is accurate
- [ ] Number count includes all digits
- [ ] Space count includes all whitespace
- [ ] Special character count is correct
- [ ] Average word length calculated correctly
- [ ] Longest word identified correctly
- [ ] Shortest word identified correctly
- [ ] Show/Hide Details toggle works

### Button Functionality
- [ ] Copy Stats button copies all statistics to clipboard
- [ ] Copy Stats shows success toast notification
- [ ] Clear button shows confirmation modal
- [ ] Clear confirms before clearing
- [ ] Clear empties textarea and resets all counts
- [ ] Cancel in clear modal closes without clearing
- [ ] All buttons are keyboard accessible (Tab, Enter)

### User Interface
- [ ] Dark mode toggle switches theme
- [ ] Dark mode preference saved to localStorage
- [ ] System preference detected on first load
- [ ] All text readable in both light and dark modes
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Focus indicators visible on all interactive elements
- [ ] Animations smooth and appropriate
- [ ] No layout shift when content updates

### Keyboard Navigation
- [ ] Tab key navigates through all controls
- [ ] Shift+Tab navigates backwards
- [ ] Enter activates buttons
- [ ] Escape closes modals
- [ ] Ctrl/Cmd+Shift+C copies stats
- [ ] Ctrl/Cmd+Shift+L clears text
- [ ] Ctrl/Cmd+Shift+D toggles details

### Mobile Responsiveness
- [ ] Layout responsive at 320px width
- [ ] Layout responsive at 480px width
- [ ] Layout responsive at 768px width
- [ ] Layout responsive at 1200px width
- [ ] Touch targets minimum 48px
- [ ] Buttons stack on mobile
- [ ] Textarea full width on mobile
- [ ] Font sizes readable on mobile
- [ ] No horizontal scroll at any breakpoint

### Accessibility (WCAG AA)
- [ ] Page has semantic HTML structure
- [ ] H1 present and unique
- [ ] Heading hierarchy correct (H1 > H2)
- [ ] Images have alt text (if any)
- [ ] Form inputs have labels
- [ ] Links are keyboard accessible
- [ ] Color not only means of conveyance
- [ ] Focus outline visible (2px)
- [ ] Live region announcements work
- [ ] Error messages clear and helpful

### Screen Reader Testing (NVDA/JAWS/VoiceOver)
- [ ] Page title announced correctly
- [ ] Main content landmark identified
- [ ] Form labels associated with inputs
- [ ] Button purposes clear
- [ ] Stat values announced with context
- [ ] Status updates announced
- [ ] Modal announced as dialog
- [ ] Skip link functional
- [ ] No empty headings or labels

### Browser Compatibility

**Desktop Browsers:**
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

**Mobile Browsers:**
- [ ] iOS Safari (iPhone/iPad)
- [ ] Chrome Android
- [ ] Samsung Internet
- [ ] Firefox Android

**Mobile OS:**
- [ ] iOS 14+
- [ ] Android 11+

### Performance Testing

#### Lighthouse Metrics
```
Target Scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100
```

#### Core Web Vitals
- [ ] FCP (First Contentful Paint): < 1s
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] TTI (Time to Interactive): < 3s
- [ ] FID (First Input Delay): < 100ms

#### Page Size
- [ ] HTML: < 15 KB
- [ ] CSS: < 20 KB
- [ ] JS: < 20 KB
- [ ] Total: < 60 KB (uncompressed)
- [ ] Gzipped total: < 16 KB

### SEO Testing
- [ ] Page title optimized (50-60 chars)
- [ ] Meta description present (155-160 chars)
- [ ] Canonical URL correct
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Schema.org markup valid
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Images have descriptive alt text
- [ ] Internal links working

### Security Testing
- [ ] No sensitive data in localStorage (except preferences)
- [ ] No API keys exposed in code
- [ ] No hardcoded URLs (use relative)
- [ ] CSP headers configured
- [ ] X-Frame-Options set (SAMEORIGIN)
- [ ] X-Content-Type-Options set (nosniff)
- [ ] HTTPS enforced
- [ ] No external script injections
- [ ] Form validation on client-side

### Data Privacy
- [ ] No data collected or sent to servers
- [ ] All calculations local (client-side only)
- [ ] localStorage only stores preferences
- [ ] No cookies set (except session if needed)
- [ ] Privacy policy available
- [ ] No third-party trackers
- [ ] AdSense properly disclosed

### Content Testing
- [ ] No typos in content
- [ ] All links working
- [ ] Footer links correct
- [ ] Email links formatted properly
- [ ] Social media links correct (if present)
- [ ] Contact information accurate
- [ ] Copyright year current
- [ ] Brand messaging consistent

## Manual Test Cases

### Test Case 1: Empty Input
**Steps:**
1. Open Character Counter
2. Do not type anything
3. Verify all counts show 0
4. Verify reading time shows "0 min"
5. Verify all progress bars empty

**Expected Result:** ✓ All counts at 0

### Test Case 2: Single Word
**Steps:**
1. Type "Hello"
2. Check counts

**Expected Result:**
- Characters (with spaces): 5
- Characters (without spaces): 5
- Words: 1
- Lines: 1
- Sentences: 0
- Paragraphs: 1

### Test Case 3: Multiple Sentences
**Steps:**
1. Type: "Hello world! How are you? I'm fine."
2. Check sentence count

**Expected Result:** Sentence count: 3

### Test Case 4: Multiple Paragraphs
**Steps:**
1. Type text with double newlines between paragraphs
2. Check paragraph count

**Expected Result:** Paragraph count: correct number

### Test Case 5: Special Characters
**Steps:**
1. Type: "@#$%^&*()"
2. Check special character count

**Expected Result:** Special characters: 10

### Test Case 6: Numbers
**Steps:**
1. Type: "123 456 789"
2. Check number count

**Expected Result:** Numbers: 9

### Test Case 7: Reading Time Calculation
**Steps:**
1. Type 250 words
2. Select 250 WPM
3. Check reading time

**Expected Result:** Reading time: 1 min

**Step:**
4. Select 200 WPM
5. Check reading time

**Expected Result:** Reading time: 2 min (rounded)

### Test Case 8: Twitter Limit (280 chars)
**Steps:**
1. Type exactly 280 characters
2. Check progress bar (should be full)
3. Add 1 character
4. Check progress (should show danger)

**Expected Result:** ✓ Progress bar danger at 281+ chars

### Test Case 9: Copy Stats
**Steps:**
1. Type some text
2. Click "Copy Stats" button
3. Paste somewhere (Notes app, email, etc.)

**Expected Result:** ✓ Full formatted report copied

### Test Case 10: Clear with Confirmation
**Steps:**
1. Type text in textarea
2. Click "Clear" button
3. Verify modal appears
4. Click "Cancel"

**Expected Result:** ✓ Text remains, modal closes

**Steps (continued):**
5. Click "Clear" button again
6. Click "Clear" in modal

**Expected Result:** ✓ Text cleared, counts reset

### Test Case 11: Dark Mode Toggle
**Steps:**
1. Click theme toggle button
2. Verify dark mode activates
3. Refresh page
4. Verify dark mode persists

**Expected Result:** ✓ Theme saved and persists

### Test Case 12: Details Toggle
**Steps:**
1. Verify details section hidden by default
2. Click "Show Details"
3. Verify section visible
4. Refresh page
5. Verify details state restored

**Expected Result:** ✓ State persists across refreshes

### Test Case 13: Paste Large Text
**Steps:**
1. Copy 5000+ character text
2. Paste into textarea
3. Verify counts update instantly
4. Verify no lag or frozen UI

**Expected Result:** ✓ Instant update, responsive

### Test Case 14: Keyboard Shortcuts
**Steps:**
1. Type text
2. Press Ctrl/Cmd+Shift+C
3. Verify stats copied (toast shows)

**Expected Result:** ✓ Shortcut works

**Steps:**
4. Press Ctrl/Cmd+Shift+D
5. Verify details toggle

**Expected Result:** ✓ Shortcut works

**Steps:**
6. Press Ctrl/Cmd+Shift+L
7. Verify clear modal shown

**Expected Result:** ✓ Shortcut works

### Test Case 15: Longest/Shortest Words
**Steps:**
1. Type: "The quick brown fox jumps"
2. Check longest word: should be "quick" or "brown" (5 chars)
3. Type: "I a an the"
4. Check shortest word: should be "I" or "a" (1 char)

**Expected Result:** ✓ Correct word lengths identified

## Automated Test Template (QA Checklist)

```
Date: ________________
Tester: ________________
Build: ________________
Platform: Chrome | Firefox | Safari | Edge | Other
OS: Windows | macOS | Linux | iOS | Android

CRITICAL FEATURES:
☐ Character count works
☐ Word count works
☐ Copy stats works
☐ Clear text works
☐ No console errors

IMPORTANT FEATURES:
☐ Dark mode toggles
☐ Details expand/collapse
☐ Reading time updates
☐ Platform limits show
☐ Mobile responsive

NICE TO HAVE:
☐ Keyboard shortcuts
☐ Accessibility passes
☐ Lighthouse 85+
☐ All links working

ISSUES FOUND:
1. ________________
2. ________________
3. ________________

OVERALL STATUS: [ ] PASS [ ] FAIL

Signed: ________________ Date: ________________
```

## Performance Testing Checklist

### Browser DevTools
- [ ] Open DevTools (F12)
- [ ] Go to Lighthouse tab
- [ ] Run audit (Mobile)
- [ ] Score should be 85+
- [ ] Check Performance metrics
- [ ] Check Opportunities
- [ ] Check Diagnostics

### Network Performance
- [ ] Network tab shows < 60KB total
- [ ] No failed requests
- [ ] Assets cached properly
- [ ] Gzip compression enabled

### Memory/CPU
- [ ] No memory leaks on long typing
- [ ] CPU usage low while idle
- [ ] Smooth scroll performance

## Sign-Off Checklist

Before deploying to production:

### Code Quality
- [ ] No console errors or warnings
- [ ] No hardcoded values
- [ ] Comments clear
- [ ] Code formatted consistently
- [ ] No dead code

### Documentation
- [ ] README.md complete
- [ ] DEPLOYMENT.md complete
- [ ] Inline code comments clear
- [ ] Version number updated

### Testing
- [ ] All functional tests pass
- [ ] Accessibility audit passes
- [ ] Performance meets targets
- [ ] Cross-browser testing done
- [ ] Mobile testing done

### Security
- [ ] No sensitive data exposed
- [ ] HTTPS configured
- [ ] Security headers set
- [ ] Privacy policy available

### SEO
- [ ] Meta tags optimized
- [ ] sitemap.xml valid
- [ ] robots.txt configured
- [ ] Schema markup validated

---

**Test Execution Report Template:**

```markdown
# Test Execution Report
**Date:** [DATE]
**Version:** 1.0.0
**Tester:** [NAME]

## Summary
- Total Tests: XX
- Passed: XX
- Failed: XX
- Blocked: XX

## Failed Tests
1. [TEST NAME] - [ISSUE DESCRIPTION]
2. ...

## Approved for Production
- [ ] Yes
- [ ] No (Reason: _________)

**Signed:** _________________ **Date:** _________
```
