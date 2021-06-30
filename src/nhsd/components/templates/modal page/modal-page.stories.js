// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Modal Page';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-organisms-chapter-nagivation.stories--chapter-nagivation-component">Sticky Nav</a>
- <a href="/docs/design-system-components-organisms-chapter-navigation--lab-component">Chapter navigation</a>
- <a href="/docs/design-system-components-organisms-modal--lab-component">Modal</a>
- it needs a token \`nhsd-!t-display-chapters\`

### Details
An example of the \`sticky-navigation\` and \`chapter-navigation\` header with component along side page content with a \`modal\` .

Content headers are given a unique \`id\` and referenced by sticky nav items with the \`data-nav-content\` attribute.`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.templates} / ${componentName}`,
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

export const ContentPageComponent = Template.bind({});
ContentPageComponent.storyName = sbConfig.title.lab;
ContentPageComponent.args = {
  stickyNav: {
    classes: '',
    headerText: 'Page of contents',
    navItems: [
      {
        link: {
          label: 'Top of page',
          href: '#top',
        },
      },
      {
        link: {
          label: 'How QCovid® was developed',
          href: '#how-qcovid-was-developed',
        },
        contentId: 'how-qcovid-was-developed',
      },
      {
        link: {
          label: 'How QCovid® works',
          href: '#how-qcovid-works',
        },
        contentId: 'how-qcovid-works',
      },
      {
        link: {
          label: 'Factors not incorporated into QCovid®',
          href: '#factors-not-incorporate',
        },
        contentId: 'factors-not-incorporate',
      },
      {
        link: {
          label: 'How QCovid® has been validated',
          href: '#how-qcovid-has-been-valided',
        },
        contentId: 'how-qcovid-has-been-valided',
      },
      {
        link: {
          label: 'Updates to QCovid®',
          href: '#updates-to-qcovid',
        },
        contentId: 'updates-to-qcovid',
      },
    ],
  },
  content: `
    <h2 class="nhsd-t-heading-l" id="how-qcovid-was-developed">How QCovid® was developed</h2>

    <p class="nhsd-t-body">The Chief Medical Officer for England asked leading academics, clinicians and scientists to create a way of predicting who may be at high risk of serious illness if they catch coronavirus.</p>

    <p class="nhsd-t-body">A team of researchers, led by the University of Oxford, studied the anonymised health records of more than 8 million people using GP records, hospital records and mortality data from late January 2020 to April 2020. This initial analysis, funded by the National Institute for Health Research, was done using data collected during the first wave of the coronavirus pandemic in the United Kingdom.</p>

    <p class="nhsd-t-body">The results showed that things such as age, sex assigned at birth, height and weight (used to calculate body mass index (BMI)), ethnicity and some medical conditions increased risk relating to coronavirus – these are known as risk factors.</p>

    <p class="nhsd-t-body">They then used this information to create QCovid®. This estimates someone’s combined risk of catching coronavirus and being admitted to hospital and their combined risk of catching coronavirus and dying.</p>

    QCovid® was designed to:
    <ul class="nhsd-t-list nhsd-t-list--bullet">
      <li>risk assess the general population</li>
      <li>inform people about their risk level</li>
      <li>support people with decisions about behaviours in consultation with a clinician</li>
    </ul>

    <h2 class="nhsd-t-heading-l" id="how-qcovid-works">How QCovid® works</h2>

    <p class="nhsd-t-body">QCovid® works by taking information about risk factors and converting each of these into values. These values are then combined in an equation that estimates risk and generates figures for absolute risk and relative risk.</p>

    <p class="nhsd-t-body">Absolute risk is the overall risk, based on what happened to other people with the same characteristics and risk factors who caught coronavirus and went to hospital or died as a result.</p>

    <p class="nhsd-t-body">Relative risk is the level of risk compared to a person who is the same age and sex registered at birth, but without any other risk factors.</p>

    <p class="nhsd-t-body">To reflect the fact that some risk factors have a bigger impact on risk than others, some values contribute more to the result than others (weighting). The weighting of some values can be affected by the presence or absence of other factors. For example, the risk associated with Type 2 diabetes increases with age.</p>

    <h2 class="nhsd-t-heading-l" id="factors-not-incorporate">Factors not incorporated into QCovid®</h2>

    <p class="nhsd-t-body">As with any model like this, QCovid® can only estimate risk and cannot take all factors into account. There are several things that are important to consider that are not included in QCovid®, such as:</p>

    <ul class="nhsd-t-list nhsd-t-list--bullet">
      <li>an individual’s behaviour (for example hand washing, wearing face coverings and visiting friends or family)</li>
      <li>occupation</li>
      <li>infection rates</li>
      <li>local and national lockdown measures</li>
    </ul>

    <p class="nhsd-t-body">We also do not yet know whether having had coronavirus previously or being vaccinated affects the accuracy of the risk assessment results, because the data used to develop QCovid® was from the first wave of the pandemic.</p>

    <h2 class="nhsd-t-heading-l" id="how-qcovid-has-been-valided">How QCovid® has been validated</h2>

    <p class="nhsd-t-body">QCovid® has been peer reviewed, which means independent academic experts have checked that the research is robust.</p>

    <p class="nhsd-t-body">The research and evidence were published in the British Medical Journal (BMJ), a respected academic medical journal which only accepts quality peer-reviewed research (around 6% of research papers submitted are published).</p>

    <p class="nhsd-t-body">Although the data used to develop the current QCovid® model was collected in early 2020, it has since been tested with new data and continues to perform well and accurately predict outcomes.</p>

    <p class="nhsd-t-body">The Office for National Statistics (ONS) has independently validated the performance of QCovid®. The ONS has shown that the model performs well and accurately identifies patients at high risk from coronavirus. The NHS can therefore be confident that the model is robust and meets the highest standards of evidence.</p>

    <p class="nhsd-t-body">The QCovid® model has been embedded by the University of Oxford into the QCovid® Calculation Engine. This has been registered with the Medical and Healthcare products Regulatory Agency (MHRA) and categorised as a Class 1 medical device.</p>

    <p class="nhsd-t-body">QCovid® and its supporting code is available online with an academic use license, which means it can be tested by other academics.</p>

    <h2 class="nhsd-t-heading-l" id="updates-to-qcovid">Updates to QCovid®</h2>

    <p class="nhsd-t-body">QCovid® is a ‘living’ risk prediction model. This means that, although it is not updated automatically in real-time, it can be updated periodically by the University of Oxford using the latest data and as we learn more about coronavirus.</p>

    <p class="nhsd-t-body">This will help to ensure it is still accurate and relevant and establish what changes may need to be made to the COVID-19 Clinical Risk Assessment Tool.</p>`,
  chapterNavigation: {
    classes: 'nhsd-!t-margin-bottom-3',
    previousChapter: {
      href: '#',
      chapterName: 'Previous Chapter',
      chapterDescription: 'Digital inclusion for health and social',
      icon: {
        id: 'arrow_left',
        classes: 'nhsd-a-icon--size-xs',
      },
      direction: 'left',
    },
    currentChapter: {
      link: {
        href: '#',
        label: 'View all',
      },
      text: 'What we mean by digital inclusion',
    },
    nextChapter: {
      link: {
        href: '#',
      },
      chapterName: 'Next Chapter',
      chapterDescription: 'What it means in health and social care',
      icon: {
        classes: 'nhsd-a-icon--size-xs',
      },
      direction: 'right',
    },
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    horizontalLine: {
      classes: 'nhsd-a-horizontal-rule--size-xxs',
    },
  },
  modal: {
    title: 'Your privacy and cookies',
    box: {
        classes: 'nhsd-!t-padding-3',
    },
    topContent: 'This site uses cookies to help improve the service we give you. Cookies help us show you content which is most relevant for you.',
    bottomContent: 'They also collect anonymous data about how you use the site, to help us improve.',
    continueButton: {
        classes: 'nhsd-o-modal__continue-button nhsd-!t-margin-bottom-0 nhsd-!t-margin-right-3 nhsd-a-button--outline',
        label: 'Use essential cookies only',
    },
    closeButton: {
        classes: 'nhsd-o-modal__close-button nhsd-!t-margin-bottom-0',
        label: 'Use selected cookies',
    },
    dialog: true,
  },
};
ContentPageComponent.parameters = {
  docs: {
    source: {
      code: `${ContentPageComponent(ContentPageComponent.args)}`,
    },
  },
};
