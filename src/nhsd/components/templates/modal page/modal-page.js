import nhsd from '@/nhsd';

export default class NHSDShowModalButton {
    constructor(componentEl) {
        if (!componentEl) return null;
        this.hostEl = componentEl;
        this.init();
    }

    init() {
        this.hostEl.addEventListener('click', () => {
            nhsd.trigger(`nhsd-o-modal.show[${this.hostEl.getAttribute('data-target')}]`);
        });
    }
}
