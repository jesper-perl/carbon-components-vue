import { shallowMount } from '@vue/test-utils';
import { carbonPrefix } from '../../../global/settings';

import CvLink from '..';

describe('CvLink', () => {
  it('renders as <a> tag when href is specified ', async () => {
    const slotContent = 'slot content';
    const hrefContent = '#';
    const wrapper = shallowMount(CvLink, {
      slots: {
        default: slotContent,
      },
      props: {
        href: hrefContent,
      },
    });

    const link = wrapper.find('a');
    expect(link.classes()).toContain(`${carbonPrefix}--link`);
  });

  it('renders as <router-link> tag when href is not specified ', async () => {
    const slotContent = 'slot content';
    const toContent = 'link';
    const wrapper = shallowMount(CvLink, {
      slots: {
        default: slotContent,
      },
      props: {
        to: toContent,
      },
    });

    const link = wrapper.find('router-link');
    expect(link.classes()).toContain(`${carbonPrefix}--link`);
  });
});
