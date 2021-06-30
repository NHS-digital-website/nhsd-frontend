// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Expander list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-horizontal-rule--lab-component">Horizontal Rule</a>
- <a href="/docs/design-system-components-molecules-expander--lab-component">Expander</a>

### Tokens used
- Spacing

### Developer notes

- Javascript must be enabled for the proper functioning of this component
- The **Expander-list** organism makes use of the **Horizontal Rule** atom and the **Expander** molecule
- For each 'expander' object added to the 'expanders' list parameter, a new row will be added to display the new expander
- Only supports one type of expander per list
- Do not use if there is only one expander you wish to display. For that, use the <a href="/docs/design-system-components-molecules-expander--lab-component">Expander</a> molecule instead.`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/expander-list";

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
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'default expander',
          'simple expander',
        ],
      },
      defaultValue: 'default expander',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  type: 'default expander',
  expanders: [
    {
      heading: '"Default expander" one',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Default expander" two',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Default expander" three',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
  ],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const SimpleExpander = Template.bind({});
SimpleExpander.storyName = sbConfig.title.SimpleExpander;
SimpleExpander.args = {
  type: 'simple expander',
  expanders: [
    {
      heading: '"Some expander" one',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Some expander" two',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Some expander" three',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
  ],
};
SimpleExpander.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SimpleExpander(SimpleExpander.args)}`,
    },
  },
};

export const SimpleExpanderWithToggle = Template.bind({});
SimpleExpanderWithToggle.storyName = sbConfig.title.SimpleExpanderWithToggle;
SimpleExpanderWithToggle.args = {
  type: 'simple expander',
  toggle: {
  },
  expanders: [
    {
      heading: 'Simple one',
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
      heading: 'Simple three',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
  ],
  removeLastHR: true,
};
SimpleExpanderWithToggle.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SimpleExpander(SimpleExpander.args)}`,
    },
  },
};
