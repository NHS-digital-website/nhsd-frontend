/* global document */

import nhsd from '@/nhsd';

export default class NHSDCookiePreference {
    constructor(componentEl) {
        if (!componentEl) return null;
        this.hostEl = componentEl;
        this.init();
        this.primaryButton = document.querySelector('.nhsd-o-modal__primary-button');
        this.secondaryButton = document.querySelector('.nhsd-o-modal__secondary-button');
    }

    init() {
        nhsd.on('nhsd-o-modal__secondary-button.click', () => {
            if (this.secondaryButton.innerText === 'Use essential cookies only') {
                nhsd.trigger('nhsd-o-modal__primary-button.click');
                return;
            }
            this.hostEl.style.display = 'block';
            this.secondaryButton.innerText = 'Use essential cookies only';
            this.primaryButton.innerText = 'Use selected cookies';
        });
    }
}
