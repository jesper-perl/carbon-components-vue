import { shallowMount } from '@vue/test-utils';
import { carbonPrefix } from '../../../global/settings';

import { CvList } from '..';

describe('CvList', () => {
  it('renders list', async () => {
    const slotContent = 'slot content';
    const wrapper = shallowMount(CvList, {
      slots: {
        default: slotContent,
      },
    });

    const button = wrapper.find('ul');
    expect(button.classes()).toContain(`${carbonPrefix}--list--unordered`);
  });
});
