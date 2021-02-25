<template>
  <component
    :is='tagType'
    :disabled="disabled"
    :class="[
    `${carbonPrefix}--link`,
    { [`${carbonPrefix}--link--inline`]: inline }
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
import { carbonPrefix } from '../../global/settings';

export default {
  name: 'CvLink',
  emits: ['click'],
  props: {
    // Docgen comments added for storybook doc page
    /**
     * Disabled by property
     */
    disabled: Boolean,
    /**
     * Styling for inline use
     */
    inline: Boolean,
    /**
     * Router link
     */
    to: { type: [String, Object] },
    /**
     * URL
     */
    href: String,
  },

  setup(props) {
    const tagType = props.to && !props.href ? 'router-link' : 'a';
    return {
      carbonPrefix,
      tagType,
    }
  }
};
</script>
