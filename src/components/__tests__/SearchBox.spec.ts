import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils';
import VueRouter from 'vue-router';
import SearchBox from '../SearchBox.vue';
import router from '@/router';

describe('SearchBox tests', () => {
  it('test sanity check', () => {
    expect(true).toBeTruthy();
  });
});

describe('SearchBox', () => {
  const wrapper = shallowMount(SearchBox);
  it('matches the snapshot when mounted', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('When form submitted', () => {
  let wrapper: Wrapper<any>;
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  wrapper = mount(SearchBox, {
    localVue,
    router,
  });

  beforeEach(() => {
    wrapper.vm.$router.push('/');
  });

  it('if there is a value, then routes to search', () => {
    const query = `test query ${Date.now()}`;
    wrapper.find('input').setValue(query);
    wrapper.find('form').trigger('submit');
    expect(wrapper.vm.$route.path).toBe('/search');
    expect(wrapper.vm.$route.query.s).toBe(encodeURIComponent(query));
  });

  it('if there is no value, then routes to search', () => {
    wrapper.find('input').setValue('');
    wrapper.find('form').trigger('submit');
    expect(wrapper.vm.$route.path).not.toBe('/search');
  });
});
