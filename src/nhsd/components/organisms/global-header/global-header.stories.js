// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Global header';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
### Developer Notes
- There are multiple mega menus that have to be added corresponding to each link. 
- each link has and mega menu has a \`data-target\` which corresponds to \`data-target\` on the mega menu.
- each mega menu has to be manually set up with a column length over 10 links means a 3 column menu.`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/global-header";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.args = {
  logoLink: {
    classes: 'nhsd-o-global-header__logo',
    label: 'NHS Digital home',
    href: '/',
    id: 'nhsd-global-header__logo',
  },
  menuBar: {
    links: [
      {
        label: 'Coronavirus',
        target: 'coronavirus',
      }, {
        label: 'Data',
        target: 'data',
      }, {
        label: 'Services',
        target: 'service',
      }, {
        label: 'Cyber',
        target: 'cyber',
      }, {
        label: 'Developer',
        target: 'developer',
      }, {
        label: 'News',
        target: 'news',
      }, {
        label: 'About us',
        target: 'aboutus',
      },
    ],
  },
  megaMenuCoronavirus: {
    classes: ' nhsd-!t-padding-left-0',
    col1Links: [
      {
        classes: '',
        label: {
          classes: 'nhsd-t-heading-m',
          name: 'Coronavirus',
        },
      }, {
        label: {
          name: 'Data',
        },
      }, {
        label: {
          name: 'Services',
        },
      }, {
        label: {
          name: 'Cyber',
        },
      }, {
        label: {
          name: 'Developer',
        },
      },
    ],
    col2Links: [
      {
        label: {
          name: 'Dashboard',
        },
      }, {
        label: {
          name: 'Publication',
        },
      }, {
        label: {
          name: 'Another link',
        },
      }, {
        label: {
          name: 'Another link',
        },
      }, {
        label: {
          name: 'Another link',
        },
      },
    ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuData: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'Data',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Services',
          },
        }, {
          label: {
            name: 'Cyber',
          },
        }, {
          label: {
            name: 'Developer',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
      col3Links: [
        {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuService: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'Services',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Data',
          },
        }, {
          label: {
            name: 'Cyber',
          },
        }, {
          label: {
            name: 'Developer',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuCyber: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'Cyber',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Data',
          },
        }, {
          label: {
            name: 'Services',
          },
        }, {
          label: {
            name: 'Developer',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuDeveloper: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'Developer',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Data',
          },
        }, {
          label: {
            name: 'Services',
          },
        }, {
          label: {
            name: 'Cyber',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuNews: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'News',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Data',
          },
        }, {
          label: {
            name: 'Services',
          },
        }, {
          label: {
            name: 'Cyber',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  megaMenuAboutUs: {
    classes: ' nhsd-!t-padding-left-0',
      col1Links: [
        {
          classes: '',
          label: {
            classes: 'nhsd-t-heading-m',
            name: 'About Us',
          },
        }, {
          label: {
            name: 'Coronavirus',
          },
        }, {
          label: {
            name: 'Data',
          },
        }, {
          label: {
            name: 'Services',
          },
        }, {
          label: {
            name: 'Cyber',
          },
        },
      ],
      col2Links: [
        {
          label: {
            name: 'Dashboard',
          },
        }, {
          label: {
            name: 'Publication',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        }, {
          label: {
            name: 'Another link',
          },
        },
      ],
    image: {
      sourceSet: [{
        media: '',
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }, {
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      }],
      alt: '2 scientists carry out tests in a laboratory',
    },
  },
  buttonNav: {
    classes: 'nhsd-m-button-nav--condensed nhsd-m-button-nav--non-responsive nhsd-o-global-header__button-nav',
    buttons: [
    {
      el: 'a',
      id: 'nhsd-global-header__search-button',
      href: '/search',
      aria: {
        label: 'Open search',
        controls: 'nhsd-global-header__search',
        expanded: false,
      },
      classes: 'nhsd-a-button--circle',
      icon: {
        id: 'search',
        classes: 'nhsd-a-icon--size-s',
      },
    }, {
      el: 'button',
      id: 'nhsd-global-header__menu-button',
      label: 'Menu',
      aria: {
        controls: 'nhsd-global-header__menu',
        expanded: false,
      },
      classes: 'nhsd-o-global-header__menu-button',
      icon: {
        id: 'burger',
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
