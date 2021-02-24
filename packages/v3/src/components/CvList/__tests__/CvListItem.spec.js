import { shallowMount } from '@vue/test-utils';
import { carbonPrefix } from '../../../global/settings';

import { CvListItem } from '..';

describe('CvListItem', () => {
  it('renders list', async () => {
    const slotContent = 'slot content';
    const wrapper = shallowMount(CvListItem, {
      slots: {
        default: slotContent,
      },
    });

    const button = wrapper.find('li');
    expect(button.classes()).toContain(`${carbonPrefix}--list__item`);
  });
});
