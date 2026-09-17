(function () {
    const $ = (id) => document.getElementById(id);

    const formatNumber = (num) => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const wordsOf = (text) => text.match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)?/g) || [];
    const sentenceCount = (text) => (text.match(/[^.!?]+[.!?]+(?:\s|$)/g) || []).length || (text.trim() ? 1 : 0);
    const paragraphCount = (text) => text.split(/\n\s*\n/).filter((p) => p.trim()).length;
    const timeLabel = (words, wpm) => {
        if (!words) return '0 min';
        const minutes = words / wpm;
        if (minutes < 1) return '< 1 min';
        const rounded = Math.round(minutes);
        return `${rounded} min`;
    };

    function initTheme() {
        const toggle = $('themeToggle');
        if (!toggle) return;
        const icon = toggle.querySelector('.theme-icon');
        const apply = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        };
        apply(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
        toggle.addEventListener('click', () => apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
    }

    function copyTextFrom(targetId) {
        const target = $(targetId);
        if (!target) return;
        const text = target.value !== undefined ? target.value : target.textContent;
        if (!text) return;
        navigator.clipboard.writeText(text).catch(() => {
            const area = document.createElement('textarea');
            area.value = text;
            document.body.appendChild(area);
            area.select();
            document.execCommand('copy');
            area.remove();
        });
        const live = $('toolToast');
        if (live) live.textContent = 'Copied to clipboard';
    }

    function initCopyButtons() {
        document.querySelectorAll('.copy-output').forEach((button) => {
            button.addEventListener('click', () => copyTextFrom(button.dataset.target));
        });
    }

    function initHomeCounter() {
        const input = $('textInput');
        if (!input) return;
        const ids = ['charCount', 'charNoSpaceCount', 'wordCount', 'sentenceCount', 'paragraphCount', 'readingTime', 'lineCount', 'uppercaseCount', 'lowercaseCount', 'numberCount', 'spaceCount', 'specialCharCount', 'avgWordLength', 'longestWord'];
        const els = Object.fromEntries(ids.map((id) => [id, $(id)]));
        const limits = [
            ['twitter', 280], ['instagram', 2200], ['linkedin', 3000], ['meta', 160],
            ['title', 60], ['sms', 160], ['facebook', 63206], ['youtube', 100]
        ];
        const update = () => {
            const text = input.value;
            const words = wordsOf(text);
            const chars = text.length;
            const noSpace = text.replace(/\s/g, '').length;
            const stats = {
                charCount: chars,
                charNoSpaceCount: noSpace,
                wordCount: words.length,
                sentenceCount: text.trim() ? sentenceCount(text) : 0,
                paragraphCount: text.trim() ? paragraphCount(text) : 0,
                readingTime: timeLabel(words.length, 225),
                lineCount: text ? text.split('\n').length : 0,
                uppercaseCount: (text.match(/[A-Z]/g) || []).length,
                lowercaseCount: (text.match(/[a-z]/g) || []).length,
                numberCount: (text.match(/\d/g) || []).length,
                spaceCount: (text.match(/\s/g) || []).length,
                specialCharCount: (text.match(/[^\w\s]/g) || []).length,
                avgWordLength: words.length ? (words.join('').length / words.length).toFixed(1) : '0',
                longestWord: words.reduce((a, b) => b.length > a.length ? b : a, '')
            };
            Object.entries(stats).forEach(([id, value]) => {
                if (els[id]) els[id].textContent = typeof value === 'number' ? formatNumber(value) : value;
            });
            limits.forEach(([name, max]) => {
                const fill = $(`${name}Fill`);
                const label = $(`${name}Text`);
                const remaining = max - chars;
                const percent = Math.min((chars / max) * 100, 100);
                if (fill) {
                    fill.style.width = `${percent}%`;
                    fill.setAttribute('aria-valuenow', chars);
                    fill.classList.toggle('warning', percent >= 80 && percent <= 100);
                    fill.classList.toggle('danger', chars > max);
                }
                if (label) label.textContent = remaining >= 0 ? `${formatNumber(remaining)} remaining (${formatNumber(chars)} / ${formatNumber(max)})` : `${formatNumber(Math.abs(remaining))} over (${formatNumber(chars)} / ${formatNumber(max)})`;
            });
        };
        input.addEventListener('input', update);
        $('clearBtn')?.addEventListener('click', () => { input.value = ''; input.focus(); update(); });
        $('copyStatsBtn')?.addEventListener('click', () => {
            const text = `Characters: ${els.charCount.textContent}\nCharacters without spaces: ${els.charNoSpaceCount.textContent}\nWords: ${els.wordCount.textContent}\nSentences: ${els.sentenceCount.textContent}\nParagraphs: ${els.paragraphCount.textContent}\nReading time: ${els.readingTime.textContent}`;
            navigator.clipboard.writeText(text);
        });
        $('detailsToggle')?.addEventListener('click', () => {
            const details = $('detailsSection');
            const label = $('detailsToggleText');
            if (!details) return;
            const hidden = details.classList.toggle('hidden');
            if (label) label.textContent = hidden ? 'Show details' : 'Hide details';
        });
        update();
    }

    function initWordCounter() {
        const panel = document.querySelector('[data-tool="word-counter"]');
        if (!panel) return;
        const input = $('toolText');
        const keyword = $('keywordInput');
        const update = () => {
            const text = input.value;
            const words = wordsOf(text);
            $('wcWords').textContent = formatNumber(words.length);
            $('wcSentences').textContent = formatNumber(text.trim() ? sentenceCount(text) : 0);
            $('wcParagraphs').textContent = formatNumber(text.trim() ? paragraphCount(text) : 0);
            $('wcReading').textContent = timeLabel(words.length, 225);
            $('wcSpeaking').textContent = timeLabel(words.length, 140);
            const phrase = keyword.value.trim().toLowerCase();
            let density = 0;
            if (phrase && words.length) {
                const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const matches = (text.toLowerCase().match(new RegExp(`\\b${escaped}\\b`, 'g')) || []).length;
                density = (matches / words.length) * 100;
            }
            $('keywordDensity').textContent = `Keyword density: ${density.toFixed(2)}%`;
        };
        input.addEventListener('input', update);
        keyword.addEventListener('input', update);
        update();
    }

    class CaseConverter {
        static toUpperCase(text) { return text.toUpperCase(); }
        static toLowerCase(text) { return text.toLowerCase(); }
        static toTitleCase(text) { return text.toLowerCase().split(/\s+/).map((word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' '); }
        static toSentenceCase(text) { const trimmed = text.trim(); return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase() : text; }
        static toCamelCase(text) { return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).map((word, index) => index ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(''); }
        static toPascalCase(text) { return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).map((word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : '').join(''); }
        static toSnakeCase(text) { return text.trim().replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, ''); }
        static toKebabCase(text) { return text.trim().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''); }
        static toConstantCase(text) { return this.toSnakeCase(text).toUpperCase(); }
        static toAlternatingCase(text) { let i = 0; return text.split('').map((char) => /[a-z]/i.test(char) ? (i++ % 2 ? char.toUpperCase() : char.toLowerCase()) : char).join(''); }
        static toInverseCase(text) { return text.split('').map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join(''); }
    }

    function initCaseConverter() {
        const input = $('caseInput');
        if (!input) return;
        const update = () => {
            const text = input.value;
            const values = {
                uppercaseOutput: CaseConverter.toUpperCase(text),
                lowercaseOutput: CaseConverter.toLowerCase(text),
                titlecaseOutput: CaseConverter.toTitleCase(text),
                sentencecaseOutput: CaseConverter.toSentenceCase(text),
                camelcaseOutput: CaseConverter.toCamelCase(text),
                pascalcaseOutput: CaseConverter.toPascalCase(text),
                snakecaseOutput: CaseConverter.toSnakeCase(text),
                kebabcaseOutput: CaseConverter.toKebabCase(text),
                constantcaseOutput: CaseConverter.toConstantCase(text),
                alternatingcaseOutput: CaseConverter.toAlternatingCase(text),
                inversecaseOutput: CaseConverter.toInverseCase(text)
            };
            Object.entries(values).forEach(([id, value]) => { $(id).textContent = value; });
        };
        input.addEventListener('input', update);
        update();
    }

    function initLineBreaks() {
        const input = $('lineInput');
        if (!input) return;
        const update = () => {
            let text = input.value.replace(/\s*\n\s*/g, ' ');
            if ($('collapseWhitespace').checked) text = text.replace(/[ \t]{2,}/g, ' ');
            if ($('trimText').checked) text = text.trim();
            $('lineOutput').value = text;
        };
        [input, $('collapseWhitespace'), $('trimText')].forEach((el) => el.addEventListener('input', update));
        update();
    }

    function initDedupe() {
        const input = $('dedupeInput');
        if (!input) return;
        const update = () => {
            const seen = new Set();
            const out = [];
            input.value.split(/\r?\n/).forEach((line) => {
                const compareBase = $('dedupeTrim').checked ? line.trim() : line;
                const key = $('dedupeCase').checked ? compareBase.toLowerCase() : compareBase;
                if (!seen.has(key)) {
                    seen.add(key);
                    out.push($('dedupeTrim').checked ? line.trim() : line);
                }
            });
            $('dedupeOutput').value = out.join('\n');
            $('dedupeStats').textContent = `${Math.max(0, input.value.split(/\r?\n/).length - out.length)} lines removed.`;
        };
        [input, $('dedupeTrim'), $('dedupeCase')].forEach((el) => el.addEventListener('input', update));
        update();
    }

    function initSlug() {
        const input = $('slugInput');
        if (!input) return;
        const stop = new Set('a an and are as at be but by for from how in into is it of on or the this to with your'.split(' '));
        const update = () => {
            const sep = $('slugSeparator').value;
            let words = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().match(/[a-z0-9]+/g) || [];
            if ($('slugStopWords').checked) words = words.filter((word) => !stop.has(word));
            $('slugOutput').value = words.join(sep);
        };
        [input, $('slugSeparator'), $('slugStopWords')].forEach((el) => el.addEventListener('input', update));
        update();
    }

    function initLorem() {
        const output = $('loremOutput');
        if (!output) return;
        const sentences = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Integer vitae justo eget magna fermentum iaculis.',
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
            'Donec ullamcorper nulla non metus auctor fringilla.',
            'Aenean lacinia bibendum nulla sed consectetur.',
            'Curabitur blandit tempus porttitor.'
        ];
        const update = () => {
            const count = Math.max(1, Math.min(20, parseInt($('loremCount').value, 10) || 1));
            const type = $('loremType').value;
            if (type === 'words') {
                output.value = sentences.join(' ').replace(/[^A-Za-z\s]/g, '').toLowerCase().split(/\s+/).slice(0, count).join(' ');
            } else if (type === 'sentences') {
                output.value = Array.from({ length: count }, (_, i) => sentences[i % sentences.length]).join(' ');
            } else {
                output.value = Array.from({ length: count }, (_, i) => `${sentences[i % sentences.length]} ${sentences[(i + 1) % sentences.length]} ${sentences[(i + 2) % sentences.length]}`).join('\n\n');
            }
        };
        [$('loremType'), $('loremCount')].forEach((el) => el.addEventListener('input', update));
        update();
    }

    function initReadingTime() {
        const input = $('readingInput');
        if (!input) return;
        const update = () => {
            const count = wordsOf(input.value).length;
            $('rtWords').textContent = formatNumber(count);
            $('rtReading').textContent = timeLabel(count, parseInt($('readingWpm').value, 10) || 225);
            $('rtSpeaking').textContent = timeLabel(count, parseInt($('speakingWpm').value, 10) || 140);
        };
        [input, $('readingWpm'), $('speakingWpm')].forEach((el) => el.addEventListener('input', update));
        update();
    }

    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initCopyButtons();
        initHomeCounter();
        initWordCounter();
        initCaseConverter();
        initLineBreaks();
        initDedupe();
        initSlug();
        initLorem();
        initReadingTime();
    });
}());
