/**
 * Character Counter Pro - Main Application
 * Production-ready vanilla JavaScript
 * Real-time counting, stats calculation, and accessibility support
 */

class CharacterCounter {
    constructor() {
        this.initElements();
        this.initEventListeners();
        this.initTheme();
        this.updateStats();
    }

    /**
     * Initialize DOM elements for caching
     */
    initElements() {
        // Input
        this.textInput = document.getElementById('textInput');

        // Quick Stats
        this.charCount = document.getElementById('charCount');
        this.charNoSpaceCount = document.getElementById('charNoSpaceCount');
        this.wordCount = document.getElementById('wordCount');
        this.lineCount = document.getElementById('lineCount');
        this.sentenceCount = document.getElementById('sentenceCount');
        this.paragraphCount = document.getElementById('paragraphCount');

        // Reading Time
        this.readingTime = document.getElementById('readingTime');
        this.wpmSelect = document.getElementById('wpmSelect');

        // Platform Limits
        this.twitterFill = document.getElementById('twitterFill');
        this.twitterText = document.getElementById('twitterText');
        this.linkedinFill = document.getElementById('linkedinFill');
        this.linkedinText = document.getElementById('linkedinText');
        this.emailFill = document.getElementById('emailFill');
        this.emailText = document.getElementById('emailText');
        this.titleFill = document.getElementById('titleFill');
        this.titleText = document.getElementById('titleText');
        this.metaFill = document.getElementById('metaFill');
        this.metaText = document.getElementById('metaText');

        // Detailed Stats
        this.uppercaseCount = document.getElementById('uppercaseCount');
        this.lowercaseCount = document.getElementById('lowercaseCount');
        this.numberCount = document.getElementById('numberCount');
        this.spaceCount = document.getElementById('spaceCount');
        this.specialCharCount = document.getElementById('specialCharCount');
        this.avgWordLength = document.getElementById('avgWordLength');
        this.longestWord = document.getElementById('longestWord');
        this.shortestWord = document.getElementById('shortestWord');

        // Buttons
        this.copyStatsBtn = document.getElementById('copyStatsBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.detailsToggle = document.getElementById('detailsToggle');
        this.detailsToggleText = document.getElementById('detailsToggleText');
        this.themeToggle = document.getElementById('themeToggle');

        // Sections
        this.detailsSection = document.getElementById('detailsSection');
    }

    /**
     * Initialize event listeners
     */
    initEventListeners() {
        // Real-time counting
        this.textInput.addEventListener('input', () => this.updateStats());
        this.textInput.addEventListener('change', () => this.updateStats());

        // Reading time WPM selector
        this.wpmSelect.addEventListener('change', () => this.updateReadingTime());

        // Button listeners
        this.copyStatsBtn.addEventListener('click', () => this.copyStats());
        this.clearBtn.addEventListener('click', () => this.confirmClear());
        this.detailsToggle.addEventListener('click', () => this.toggleDetails());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    /**
     * Initialize theme from localStorage or system preference
     */
    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        this.setTheme(theme);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.setTheme(newTheme);
        });
    }

    /**
     * Set theme and update DOM
     */
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update icon
        this.themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    /**
     * Toggle theme
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    /**
     * Main stats calculation
     */
    updateStats() {
        const text = this.textInput.value;

        // Calculate basic stats
        const stats = this.calculateStats(text);

        // Update UI
        this.updateQuickStats(stats);
        this.updateDetailedStats(stats);
        this.updateReadingTime();
        this.updatePlatformLimits(stats);

        // Store stats for copying
        this.currentStats = stats;
    }

    /**
     * Calculate all statistics
     */
    calculateStats(text) {
        const charCount = text.length;
        const charNoSpace = text.replace(/\s/g, '').length;
        const words = this.countWords(text);
        const lines = this.countLines(text);
        const sentences = this.countSentences(text);
        const paragraphs = this.countParagraphs(text);
        const uppercase = this.countMatches(text, /[A-Z]/g);
        const lowercase = this.countMatches(text, /[a-z]/g);
        const numbers = this.countMatches(text, /\d/g);
        const spaces = this.countMatches(text, /\s/g);
        const specialChars = this.countSpecialCharacters(text);

        // Word-based stats
        const wordList = text.match(/\b\w+\b/g) || [];
        const avgWordLength = wordList.length > 0
            ? (charNoSpace / wordList.length).toFixed(1)
            : 0;
        
        const longestWord = wordList.length > 0
            ? wordList.reduce((max, word) => word.length > max.length ? word : max, '')
            : '—';
        
        const shortestWord = wordList.length > 0
            ? wordList.reduce((min, word) => word.length < min.length ? word : min, wordList[0])
            : '—';

        return {
            charCount,
            charNoSpace,
            words,
            lines,
            sentences,
            paragraphs,
            uppercase,
            lowercase,
            numbers,
            spaces,
            specialChars,
            avgWordLength,
            longestWord,
            shortestWord
        };
    }

    /**
     * Count words (more sophisticated than simple split)
     */
    countWords(text) {
        // Match sequences of word characters (letters, digits, underscores)
        const words = text.match(/\b\w+\b/g);
        return words ? words.length : 0;
    }

    /**
     * Count lines
     */
    countLines(text) {
        if (text.length === 0) return 0;
        return text.split('\n').length;
    }

    /**
     * Count sentences (. ! ? followed by space or end)
     */
    countSentences(text) {
        const sentences = text.match(/[.!?]+(?:\s|$)/g);
        return sentences ? sentences.length : 0;
    }

    /**
     * Count paragraphs (double newlines or end of text)
     */
    countParagraphs(text) {
        if (text.length === 0) return 0;
        const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
        return paragraphs.length;
    }

    /**
     * Count matches for a regex pattern
     */
    countMatches(text, pattern) {
        const matches = text.match(pattern);
        return matches ? matches.length : 0;
    }

    /**
     * Count special characters (anything that's not alphanumeric or space)
     */
    countSpecialCharacters(text) {
        const specialChars = text.match(/[^\w\s]/g);
        return specialChars ? specialChars.length : 0;
    }

    /**
     * Update quick stats in UI
     */
    updateQuickStats(stats) {
        this.charCount.textContent = this.formatNumber(stats.charCount);
        this.charNoSpaceCount.textContent = this.formatNumber(stats.charNoSpace);
        this.wordCount.textContent = this.formatNumber(stats.words);
        this.lineCount.textContent = this.formatNumber(stats.lines);
        this.sentenceCount.textContent = this.formatNumber(stats.sentences);
        this.paragraphCount.textContent = this.formatNumber(stats.paragraphs);

        // Add visual feedback for updates
        this.addUpdateAnimation(this.charCount);
    }

    /**
     * Update detailed stats
     */
    updateDetailedStats(stats) {
        this.uppercaseCount.textContent = this.formatNumber(stats.uppercase);
        this.lowercaseCount.textContent = this.formatNumber(stats.lowercase);
        this.numberCount.textContent = this.formatNumber(stats.numbers);
        this.spaceCount.textContent = this.formatNumber(stats.spaces);
        this.specialCharCount.textContent = this.formatNumber(stats.specialChars);
        this.avgWordLength.textContent = stats.avgWordLength;
        this.longestWord.textContent = stats.longestWord;
        this.shortestWord.textContent = stats.shortestWord;
    }

    /**
     * Update reading time based on WPM
     */
    updateReadingTime() {
        const wpm = parseInt(this.wpmSelect.value);
        const words = this.currentStats?.words || 0;
        const minutes = words / wpm;

        let displayText;
        if (minutes < 1) {
            displayText = '< 1 min';
        } else if (minutes === 1) {
            displayText = '1 min';
        } else {
            displayText = `${Math.round(minutes)} min`;
        }

        this.readingTime.textContent = displayText;
    }

    /**
     * Update platform character limits
     */
    updatePlatformLimits(stats) {
        const charCount = stats.charCount;

        // Define limits
        const limits = [
            { fill: this.twitterFill, text: this.twitterText, max: 280, name: 'Twitter' },
            { fill: this.linkedinFill, text: this.linkedinText, max: 3000, name: 'LinkedIn' },
            { fill: this.emailFill, text: this.emailText, max: 50, name: 'Email Subject' },
            { fill: this.titleFill, text: this.titleText, max: 60, name: 'Page Title' },
            { fill: this.metaFill, text: this.metaText, max: 160, name: 'Meta Description' }
        ];

        limits.forEach(limit => {
            const percentage = (charCount / limit.max) * 100;
            limit.fill.style.width = Math.min(percentage, 100) + '%';
            limit.fill.setAttribute('aria-valuenow', charCount);
            limit.fill.setAttribute('aria-valuemax', limit.max);

            // Update progress color
            limit.fill.classList.remove('warning', 'danger');
            if (percentage > 100) {
                limit.fill.classList.add('danger');
            } else if (percentage > 80) {
                limit.fill.classList.add('warning');
            }

            // Update text
            const remaining = limit.max - charCount;
            const displayRemaining = Math.max(0, remaining);
            limit.text.textContent = `${charCount} / ${limit.max}`;
        });
    }

    /**
     * Copy all stats to clipboard
     */
    copyStats() {
        const stats = this.currentStats;
        const text = this.textInput.value;

        const statsText = `Character Counter Report
========================================
Text Preview: ${text.substring(0, 100)}${text.length > 100 ? '...' : ''}

QUICK STATS:
- Characters (with spaces): ${stats.charCount}
- Characters (without spaces): ${stats.charNoSpace}
- Words: ${stats.words}
- Lines: ${stats.lines}
- Sentences: ${stats.sentences}
- Paragraphs: ${stats.paragraphs}

READING TIME:
- At 250 WPM: ${this.readingTime.textContent}

DETAILED STATS:
- Uppercase letters: ${stats.uppercase}
- Lowercase letters: ${stats.lowercase}
- Numbers: ${stats.numbers}
- Spaces: ${stats.spaces}
- Special characters: ${stats.specialChars}
- Average word length: ${stats.avgWordLength}
- Longest word: ${stats.longestWord}
- Shortest word: ${stats.shortestWord}

PLATFORM LIMITS:
- Twitter (280): ${stats.charCount} / 280
- LinkedIn (3000): ${stats.charCount} / 3000
- Email Subject (50): ${stats.charCount} / 50
- Page Title (60): ${stats.charCount} / 60
- Meta Description (160): ${stats.charCount} / 160

Generated: ${new Date().toLocaleString()}`;

        navigator.clipboard.writeText(statsText).then(() => {
            this.showToast('✓ Stats copied to clipboard!', 'success');
        }).catch(() => {
            this.showToast('✗ Failed to copy stats', 'error');
        });
    }

    /**
     * Show confirmation before clearing text
     */
    confirmClear() {
        if (this.textInput.value.trim().length === 0) {
            this.showToast('ℹ Text area is already empty', 'info');
            return;
        }

        this.showModal(
            'Clear Text?',
            'Are you sure you want to clear all text? This action cannot be undone.',
            [
                { text: 'Cancel', className: 'btn-secondary', callback: () => this.closeModal() },
                { text: 'Clear', className: 'btn-danger', callback: () => this.clearText() }
            ]
        );
    }

    /**
     * Clear the text area
     */
    clearText() {
        this.textInput.value = '';
        this.textInput.focus();
        this.updateStats();
        this.closeModal();
        this.showToast('✓ Text cleared', 'success');
    }

    /**
     * Toggle details section visibility
     */
    toggleDetails() {
        const isHidden = this.detailsSection.classList.contains('hidden');

        if (isHidden) {
            this.detailsSection.classList.remove('hidden');
            this.detailsToggleText.textContent = 'Hide Details';
            this.detailsToggle.setAttribute('aria-expanded', 'true');
            localStorage.setItem('detailsVisible', 'true');
        } else {
            this.detailsSection.classList.add('hidden');
            this.detailsToggleText.textContent = 'Show Details';
            this.detailsToggle.setAttribute('aria-expanded', 'false');
            localStorage.setItem('detailsVisible', 'false');
        }
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        // Ctrl+Shift+C or Cmd+Shift+C to copy stats
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            this.copyStats();
        }

        // Ctrl+Shift+L or Cmd+Shift+L to clear
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
            e.preventDefault();
            this.confirmClear();
        }

        // Ctrl+Shift+D or Cmd+Shift+D to toggle details
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            this.toggleDetails();
        }
    }

    /**
     * Format numbers with commas
     */
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    /**
     * Add visual update animation
     */
    addUpdateAnimation(element) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transition = 'transform 200ms ease-out';
            element.style.transform = 'scale(1)';
        }, 0);
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);

        // Auto-remove
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    /**
     * Show confirmation modal
     */
    showModal(title, message, buttons) {
        let modal = document.getElementById('confirmModal');
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'confirmModal';
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal">
                    <h2></h2>
                    <p></p>
                    <div class="modal-buttons"></div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        modal.querySelector('h2').textContent = title;
        modal.querySelector('p').textContent = message;
        
        const buttonsContainer = modal.querySelector('.modal-buttons');
        buttonsContainer.innerHTML = '';

        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.className = `btn ${btn.className}`;
            button.textContent = btn.text;
            button.addEventListener('click', btn.callback);
            buttonsContainer.appendChild(button);
        });

        modal.classList.add('active');

        // Allow Escape to close
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);

        // Focus first button
        setTimeout(() => {
            modal.querySelector('button')?.focus();
        }, 0);
    }

    /**
     * Close modal
     */
    closeModal() {
        const modal = document.getElementById('confirmModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
}

/**
 * Initialize app when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    new CharacterCounter();

    // Restore details visibility from localStorage
    const detailsVisible = localStorage.getItem('detailsVisible') === 'true';
    const detailsSection = document.getElementById('detailsSection');
    const detailsToggle = document.getElementById('detailsToggle');
    const detailsToggleText = document.getElementById('detailsToggleText');

    if (detailsVisible) {
        detailsSection.classList.remove('hidden');
        detailsToggleText.textContent = 'Hide Details';
        detailsToggle.setAttribute('aria-expanded', 'true');
    } else {
        detailsToggle.setAttribute('aria-expanded', 'false');
    }
});
