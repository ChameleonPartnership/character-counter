(function () {
    const storageKey = 'characterCounterCookieConsent';

    if (localStorage.getItem(storageKey)) {
        return;
    }

    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie notice');
    banner.innerHTML = `
        <p>We use essential browser storage for preferences. Google AdSense may use cookies to show ads and measure performance. See our <a href="/privacy.html">Privacy Policy</a>.</p>
        <div class="cookie-consent-actions">
            <button type="button" class="btn btn-secondary" data-cookie-choice="dismissed">Dismiss</button>
            <button type="button" class="btn btn-primary" data-cookie-choice="accepted">Accept</button>
        </div>
    `;

    banner.addEventListener('click', (event) => {
        const button = event.target.closest('[data-cookie-choice]');
        if (!button) {
            return;
        }

        localStorage.setItem(storageKey, button.dataset.cookieChoice);
        banner.remove();
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(banner);
    });
}());
