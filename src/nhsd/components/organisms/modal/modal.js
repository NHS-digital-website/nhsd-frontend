/* global document */

import nhsd from '@/nhsd';

export default class NHSDModal {
    constructor(componentEl) {
        if (!componentEl) return null;
        this.hostEl = componentEl;
        this.modalContainer = this.hostEl.querySelector('.nhsd-o-modal__container');
        this.disableTrapping = false;
        this.init();
    }

    init() {
        if (this.modalContainer.localName === 'div') {
            this.modalContainer.style.display = 'block';
        }

        nhsd.on(`nhsd-o-modal.show[${this.modalContainer.getAttribute('data-target')}]`, () => {
            this.hostEl.display = 'block';
            this.hostEl.querySelector('.nhsd-o-modal__wrapper').style.display = 'block';
            this.modalContainer.style.display = 'block';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            this.setUpTabbing();
        });

        this.hostEl.querySelector('.nhsd-o-modal__secondary-button').addEventListener('click',
                        () => nhsd.trigger('nhsd-o-modal__secondary-button.click'));

        this.hostEl.querySelector('.nhsd-o-modal__primary-button').addEventListener('click',
                        () => nhsd.trigger('nhsd-o-modal__primary-button.click'));

        this.hostEl.addEventListener('keyup', this.escapeEvent, true);

        nhsd.on('nhsd-o-modal__primary-button.click', () => {
            this.modalContainer.style.display = 'none';
            document.querySelector('.nhsd-o-modal__wrapper').style.display = 'none';
            document.removeEventListener('focus', this.trapFocusEvent, true);
            this.hostEl.removeEventListener('keyup', this.escapeEvent, true);
            document.getElementsByTagName('body')[0].style = '';
        });
    }

    setUpTabbing() {
      const preNode = document.createElement('div');
      preNode.tabIndex = 0;
      this.modalContainer.parentNode.insertBefore(preNode, this.modalContainer);
      const postNode = document.createElement('div');
      postNode.tabIndex = 0;
      this.modalContainer.parentNode.insertBefore(postNode, this.modalContainer.nextSibling);
      this.trapFocusEvent = this.trapFocus.bind(this);
      document.addEventListener('focus', this.trapFocusEvent, true);
    }

    trapFocus(event) {
        if (this.disableTrapping) {
            return;
        }

        if (this.modalContainer.contains(event.target)) {
            this.lastFocus = event.target;
        } else {
            this.disableTrapping = true;
            this.focusChild(this.modalContainer);
            if (this.lastFocus === document.activeElement) {
                this.focusChild(this.modalContainer, true);
            }
            this.lastFocus = document.activeElement;
            this.disableTrapping = false;
        }
    }

    focusChild(parentEl, desc = false) {
      const startingIndex = desc ? parentEl.children.length - 1 : 0;
      const modifer = desc ? -1 : 1;
      for (let i = startingIndex; i < parentEl.children.length && i >= 0; i += modifer) {
        const childEl = parentEl.children[i];
        if (this.attemptFocus(childEl) || this.focusChild(childEl, desc)) return true;
      }
      return false;
    }

    // eslint-disable-next-line class-methods-use-this
    attemptFocus(element) {
        try {
            element.focus();
        } catch {
            return false;
        }
        return element === document.activeElement;
    }

    // eslint-disable-next-line class-methods-use-this
    escapeEvent(e) {
        if (e.keyCode === 27) {
          nhsd.trigger('nhsd-o-modal__primary-button.click');
        }
    }
}
