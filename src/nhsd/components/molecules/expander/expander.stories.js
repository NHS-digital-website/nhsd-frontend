// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Expander';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a>
- <a href="/docs/design-system-components-atoms-box--lab-component">Box</a>

### Tokens used
- Spacing
- Colours
- Typogrpahy

### Developer notes

- Javascript must be enabled for the proper functioning of this component
- The **Expander** molecule makes use of the **Icon** and **Box** atoms
- Can be used and displayed as a list of expanders, using the **Expander List** Organism`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/expander";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
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
          'defualt expander',
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
  heading: 'Default expander',
  content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
  type: 'default expander',
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
  heading: 'Simple expander',
  content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
  type: 'simple expander',
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
  heading: 'Preferences',
  content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
  type: 'simple Expander',
  toggle: {
  },
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
};
SimpleExpanderWithToggle.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SimpleExpanderWithToggle(SimpleExpanderWithToggle.args)}`,
    },
  },
};
