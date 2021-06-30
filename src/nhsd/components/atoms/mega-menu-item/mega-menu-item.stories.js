// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Mega menu item';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Tokens used
- Colours
- Fonts
- Spacing
- Transition
- Typography
- Utils`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/mega-menu-item";\n\n// HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
	argTypes: {
    label: {
      control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true,
    },
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
    external: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, screen readers read out "*...(opens in a new tab)*" after the link title.', defaultValue: false },
	},
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: {
    name: 'Hello world',
  },
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};
