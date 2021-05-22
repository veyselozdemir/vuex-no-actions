import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

it('sanity', () => {
  expect(true).toBe(true);
});
describe('About view', () => {
  const wrapper = shallowMount(About);
  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
