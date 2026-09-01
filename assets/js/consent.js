(function () {
    const storageKey = 'characterCounterCookieConsent';

    const createBanner = () => {
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
        document.body.appendChild(banner);
        return banner;
    };

    const initialiseBanner = () => {
        const banner = document.querySelector('.cookie-consent') || createBanner();
        if (localStorage.getItem(storageKey)) {
            banner.remove();
            return;
        }

        banner.hidden = false;
        banner.addEventListener('click', (event) => {
            const button = event.target.closest('[data-cookie-choice]');
            if (!button) {
                return;
            }

            localStorage.setItem(storageKey, button.dataset.cookieChoice);
            banner.remove();
        });
    };

    document.addEventListener('DOMContentLoaded', initialiseBanner);
}());
