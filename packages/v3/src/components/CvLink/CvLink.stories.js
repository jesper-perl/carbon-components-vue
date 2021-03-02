import CvLink from './CvLink';
import { action } from '@storybook/addon-actions';
import {
  storyParametersObject,
} from '../../global/storybook-utils';

export default {
  title: 'Component/CvLink',
  component: CvLink,
  argTypes: {
    to: { control: { type: 'text' } },
    click: { table: { disable: true }},
    default: { table: { disable: true }},
  },
};

const template = `Lorem ipsum dolor sit amet. <cv-link v-bind="newArgs">Link</cv-link> consectetur adipiscing elit. `;
const Template = (args, { argTypes }) => {
  const newArgs = { ...args };
  return {
    props: Object.keys(argTypes),
    components: { CvLink },
    template,
    setup() {
      return { newArgs, onClick: action('click') };
    },
  };
};

export const A = Template.bind({});
A.args = {
  href: '#',
};
A.parameters = storyParametersObject(
  A.parameters,
  template,
  A.args,
  'v-bind="newArgs"'
);

export const routerLink = Template.bind({});
routerLink.args = {
  to: 'link',
};
routerLink.parameters = storyParametersObject(
  routerLink.parameters,
  template,
  routerLink.args,
  'v-bind="newArgs"'
);

