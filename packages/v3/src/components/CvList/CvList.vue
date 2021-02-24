<template>
  <component
    :is='tagType'
    class='cv-list'
    :class="{
      [`${carbonPrefix}--list--nested`]: nested,
      [`${carbonPrefix}--list--ordered`]: internalOrdered,
      [`${carbonPrefix}--list--unordered`]: !internalOrdered,
    }"
    :data-nested="nested"
  >
    <slot></slot>
  </component>
</template>

<script>
import { carbonPrefix } from '../../global/settings';

export default {
  name: 'CvLink',
  props: {
    ordered: { type: Boolean, default: undefined },
    nested: Boolean,
  },
  computed: {
    internalOrdered: function() {
      if (this.nested && this.ordered === undefined) {
        if (this.$parent && this.$parent.$parent ) {
          return this.$parent.$parent.internalOrdered;
        }
      }
      return this.ordered;
    },
    tagType: function() {
      return this.internalOrdered ? 'ol' : 'ul';
    },
  },

  setup() {
    return {
      carbonPrefix,
    }
  }
};
</script>
