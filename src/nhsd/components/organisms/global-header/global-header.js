/* global document window */

export default class NHSDGlobalHeader {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.html = document.querySelector('html');
    this.body = document.body;
    this.logoEl = this.hostEl.querySelector('#nhsd-global-header__logo');
    this.menuBarEl = this.hostEl.querySelector('#nhsd-global-header__menu');
    this.searchInput = this.hostEl.querySelector('#query');
    this.menuBarActive = false;

    this.cachedProps = {
      html: {
        overflow: this.html.style.overflow,
        height: this.html.style.height,
      },
      body: {
        overflow: this.html.style.overflow,
        height: this.html.style.height,
      },
    };

    this.initMenuBar();
    this.initMegaMenu();
    this.initSearchBar();

    if (window.innerWidth < 1240) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }

    // Handle resize event
    window.addEventListener('resize', () => {
     this.windowResizeEvent();
    });
  }

  windowResizeEvent() {
    // Close the menu on desktops
    if (window.innerWidth >= 1240 && this.menuBarActive) {
      this.closeMenuBar();
    }

    if (window.innerWidth < 1240) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
  }

  initMenuBar() {
    if (!this.hostEl) return;
    this.menuButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-button');
    if (!this.menuButtonEl) return;
    this.menuButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.menuBarActive) {
        this.openMenuBar();
      } else {
        this.closeMenuBar();
      }

      if (this.searchBarActive) {
        this.closeSearchBar();
      }
    });

    this.menuCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-close-button');
    this.menuCloseButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.closeMenuBar();
    });
  }

  initMegaMenu() {
    if (!this.hostEl) return;
    this.menuItems = this.hostEl.querySelectorAll('.nhsd-a-menu-item');
    this.megaMenus = this.hostEl.querySelectorAll('.nhsd-o-global-header__mega-menu');
    this.closeMegaMenuButton = this.hostEl.querySelectorAll('.nhsd-o-global-header__mega-menu__close-button');
    this.backToMenuButton = this.hostEl.querySelectorAll('.nhsd-o-global-header__mega-menu__back-button');
    if (!this.megaMenus && !this.megaMenus.any()) return;

    // this.megaMenus.forEach((item) => {
    //   const megaMenuBar = item.querySelector('.nhsd-o-global-header__mega-menu__bar');

    //   if (!megaMenuBar) return;
    //   console.log(megaMenuBar);

    //   const megaMenusColumns = megaMenuBar.querySelectorAll('.nhsd-t-list');

    //   if (!megaMenusColumns) return;

    //   console.log(megaMenusColumns);

    //   for (let i = 0; i < megaMenusColumns.length; i++) {
    //    const listItems = megaMenusColumns[i].querySelectorAll('nhsd-m-mega-menu-bar__container');

    //     listItems[listItems.length - 1].addEventListener('hover', (event) => {

    //     });
    //   }
    // });

    this.menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        this.showMegaMenu(event);
      });
    });

    this.closeMegaMenuButton.forEach((item) => {
      item.addEventListener('click', () => {
        this.closeMegaMenu();
      });
    });

    this.backToMenuButton.forEach((item) => {
      item.addEventListener('click', () => {
        this.closeMegaMenu();
        this.openMenuBar();
      });
    });
  }

  initSearchBar() {
    this.searchButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-button');
    if (!this.searchButtonEl) return;
    this.searchButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.searchBarActive) {
        this.openSearchBar();
      } else {
        this.closeSearchBar();
      }

      if (this.menuBarActive) {
        this.closeMenuBar();
      }
    });

    this.searchCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-close-button');
    this.searchCloseButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.closeSearchBar();
    });
  }

  openMenuBar() {
    this.menuItems.forEach((a) => {
      a.parentNode.classList.remove('js-active');
      a.classList.remove('js-active');
    });
    this.closeMegaMenu();
    this.hostEl.classList.add('js-menu-active');
    this.menuButtonEl.classList.add('js-active');
    this.menuBarActive = true;
    this.menuButtonEl.setAttribute('aria-expanded', true);

    this.setTabIndexes();
    this.setDocumentScrolling();
  }

  closeMenuBar() {
    this.hostEl.classList.remove('js-menu-active');
    this.menuButtonEl.classList.remove('js-active');
    this.menuBarActive = false;
    this.menuButtonEl.setAttribute('aria-expanded', false);

    this.setTabIndexes();
    this.setDocumentScrolling();
  }

  closeMegaMenu() {
    if (!this.activeMegaMenu) return;
    this.activeMegaMenu.style.display = 'none';
    this.hostEl.querySelector('.nhsd-a-horizontal-rule').style.display = 'block';
    this.menuItems.forEach((a) => {
      a.classList.remove('js-active');
      a.parentNode.classList.remove('js-active');
    });
  }

  openSearchBar() {
    this.hostEl.classList.add('js-search-active');
    this.searchButtonEl.classList.add('js-active');
    this.searchButtonEl.blur();
    if (this.searchInput) this.searchInput.focus();
    this.searchButtonEl.setAttribute('aria-expanded', true);
    this.searchBarActive = true;

    this.setDocumentScrolling();
  }

  closeSearchBar() {
    this.hostEl.classList.remove('js-search-active');
    this.searchButtonEl.classList.remove('js-active');
    this.searchButtonEl.blur();
    this.searchButtonEl.setAttribute('aria-expanded', false);
    this.searchBarActive = false;

    this.setDocumentScrolling();
  }

  setDocumentScrolling() {
    if (this.hostEl.classList.contains('js-menu-active') || this.hostEl.classList.contains('js-search-active')) {
      this.html.style.overflow = 'hidden';
      this.body.style.overflow = 'hidden';
      this.html.style.height = '100%';
      this.body.style.height = '100%';
    } else {
      this.html.style.overflow = this.cachedProps.html.overflow
        ? this.cachedProps.html.overflow : null;
      this.html.style.height = this.cachedProps.html.height
        ? this.cachedProps.html.height : null;
        this.body.style.overflow = this.cachedProps.body.overflow
        ? this.cachedProps.body.overflow : null;
      this.body.style.height = this.cachedProps.body.height
        ? this.cachedProps.body.height : null;
    }
  }

  showMegaMenu(event) {
    event.preventDefault();

    this.menuItems.forEach((a) => {
      a.parentNode.classList.remove('js-active');
      a.classList.remove('js-active');
    });

    const menuItemLink = event.target;
    const menuItem = menuItemLink.parentNode.parentNode;
    let targetMenuId = menuItemLink.parentNode.getAttribute('data-target');

    if (!targetMenuId) {
     targetMenuId = menuItemLink.getAttribute('data-target');
    }

    this.megaMenus.forEach((item) => {
      item.style.display = 'none';

      if (targetMenuId === item.getAttribute('data-target')) {
        item.style.display = 'block';

        if (this.mobileScreen) {
          this.closeMenuBar();
        }
        this.hostEl.querySelector('.nhsd-a-horizontal-rule').style.display = 'none';
        menuItemLink.background = 'none';
        menuItemLink.parentNode.classList.add('js-active');
        menuItem.classList.add('js-active');
        this.activeMegaMenu = item;
      }
    });
  }

  setTabIndexes() {
    if (!this.menuBarEl) return;
    const menuItems = Array.from(this.menuBarEl.querySelectorAll('.nhsd-a-menu-item'));

    if (this.menuBarActive) {
      let tabIndex = 0;
      this.logoEl.setAttribute('tabindex', tabIndex += 1);
      this.searchButtonEl.setAttribute('tabindex', tabIndex += 1);
      this.menuButtonEl.setAttribute('tabindex', tabIndex += 1);
      this.menuCloseButtonEl.setAttribute('tabindex', tabIndex += 1);

      menuItems.forEach((el, index) => {
        el.setAttribute('tabindex', tabIndex += (index + 1));
      });
    } else {
      this.logoEl.removeAttribute('tabindex');
      this.searchButtonEl.removeAttribute('tabindex');
      this.menuButtonEl.removeAttribute('tabindex');
      this.menuCloseButtonEl.removeAttribute('tabindex');

      menuItems.forEach((el) => {
        el.removeAttribute('tabindex');
      });
    }
  }
}
