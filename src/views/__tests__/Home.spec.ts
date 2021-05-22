import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home component', () => {
  const wrapper = shallowMount(Home);
  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
