// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Modal';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- The left button on the modal is the primary call to action which triggers an event called \`nhsd-o-modal__primary-button.click\` which then the modal close  hooks on to.
- The ecaspe also triggers the \`nhsd-o-modal__primary-button.click\`.
- The right button on the modal triggers an event called \`nhsd-o-modal__secondary-button.click\`.
- The scroll in the foreground is locked when modal is shown
- The tabbing is locked to the modal when tab is showing`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/modal";

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
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  title: 'Your privacy and cookies',
  box: {
    classes: 'nhsd-!t-padding-3',
  },
  topContent: 'This site uses cookies to help improve the service we give you. Cookies help us show you content which is most relevant for you.',
  bottomContent: 'They also collect anonymous data about how you use the site, to help us improve.',
  primaryButton: {
    classes: 'nhsd-o-modal__primary-button nhsd-!t-margin-bottom-0',
    label: 'Accept all cookies',
  },
  secondaryButton: {
    classes: 'nhsd-o-modal__secondary-button nhsd-!t-margin-bottom-0  nhsd-!t-margin-right-3 nhsd-a-button--outline',
    label: 'Manage my choices',
  },
  dialog: false,
};
LabComponent.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const CookieVeriant = Template.bind({});
CookieVeriant.storyName = sbConfig.title.CookieVeriant;
CookieVeriant.args = {
  title: 'Your privacy and cookies',
  box: {
    classes: 'nhsd-!t-padding-3',
  },
  topContent: 'This site uses cookies to help improve the service we give you. Cookies help us show you content which is most relevant for you.',
  bottomContent: 'They also collect anonymous data about how you use the site, to help us improve.',
  primaryButton: {
    classes: 'nhsd-o-modal__primary-button nhsd-!t-margin-bottom-0',
    label: 'Accept all cookies',
  },
  secondaryButton: {
    classes: 'nhsd-o-modal__secondary-button nhsd-!t-margin-bottom-0  nhsd-!t-margin-right-3 nhsd-a-button--outline',
    label: 'Manage my choices',
  },
  expanderList: {
    type: 'simple expander',
    toggle: {
    },
    expanders: [
      {
        heading: '"Some people" one',
        content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
      },
      {
        heading: 'Preference',
        content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
        expanderTable: {
          table: {
            headings: [{
              text: 'Name',
              disableSort: true,
            }, {
              text: 'Provider',
              disableSort: true,
            }, {
              text: 'Purpose',
              disableSort: true,
            }, {
              text: 'Expiry',
              disableSort: true,
            }, {
              text: 'Type',
              disableSort: true,
            }],
            data: [
              {
                cells: [
                  ['__cfduid', 'Cdnjs', 'Used by the content network, Cloudflare, to identify trusted web traffic.', '30 days', 'HTTP'],
                ],
              },
            ],
            repsonsive: true,
          },
        },
      },
      {
        heading: '"Some people" three',
        content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
      },
    ],
    removeLastHR: true,
  },
  dialog: false,
};
CookieVeriant.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${CookieVeriant(CookieVeriant.args)}`,
    },
  },
};
