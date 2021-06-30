// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Mega menu bar';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Tokens used
- Colours
- Spacing
- Transition
- Utils`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/mega-menu-bar";

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
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  col1Links: [
    {
      classes: 'nhsd-m-mega-menu-bar__heading',
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
        classes: 'last',
        name: 'Another link',
      },
    },
  ],
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

export const ThreeColumnVeriant = Template.bind({});
ThreeColumnVeriant.storyName = sbConfig.title.ThreeColumnVeriant;
ThreeColumnVeriant.args = {
  col1Links: [
    {
      classes: 'nhsd-m',
      label: {
        classes: 'nhsd-t-heading-s',
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
};
ThreeColumnVeriant.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${ThreeColumnVeriant(ThreeColumnVeriant.args)}`,
    },
  },
};
