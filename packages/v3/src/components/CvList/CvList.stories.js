import { CvList, CvListItem } from './';
import {
  storyParametersObject,
} from '../../global/storybook-utils';

export default {
  title: 'Components/CvList',
  component: CvList,
  argTypes: {
    templateSelector: { table: { disable: true }},
    nested: { table: { disable: true }},
    click: { table: { disable: true }},
    default: { table: { disable: true }},
  },
};

const template = `<div style="margin-left: 1rem;">
<template v-if="templateSelector == 'Nested'">
  <cv-list v-bind="newArgs">
  <cv-list-item>List item 1
  <cv-list nested>
    <cv-list-item>Nested item 1</cv-list-item>
    <cv-list-item>Nested item 2</cv-list-item>
    <cv-list-item>Nested item 3</cv-list-item>
  </cv-list>
  <cv-list nested :ordered="orderedNested">
    <cv-list-item>Nested item 1</cv-list-item>
    <cv-list-item>Nested item 2</cv-list-item>
    <cv-list-item>Nested item 3</cv-list-item>
  </cv-list>
  </cv-list-item>
    <cv-list-item>List item 2</cv-list-item>
    <cv-list-item>List item 3</cv-list-item>
  </cv-list>
</template>
<template v-else>
  <cv-list v-bind="newArgs">
    <cv-list-item>List item 1</cv-list-item>
    <cv-list-item>List item 2</cv-list-item>
    <cv-list-item>List item 3</cv-list-item>
  </cv-list>
</template>
</div>`;

const Template = (args, { argTypes }) => {
  const newArgs = { ...args };
  return {
    props: Object.keys(argTypes),
    components: { CvList, CvListItem },
    template,
    setup() {
      return { newArgs };
    },
  };
};

export const Default = Template.bind({});
Default.args = {
  templateSelector: 'Default',
  orderedNested: true,
};
Default.parameters = storyParametersObject(
  Default.parameters,
  template,
  Default.args,
  'v-bind="newArgs"'
);

export const Nested = Template.bind({});
Nested.args = {
  templateSelector: 'Nested',
  orderedNested: true,
};
Nested.parameters = storyParametersObject(
  Nested.parameters,
  template,
  Nested.args,
  'v-bind="newArgs"'
);

