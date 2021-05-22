import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';

describe('When App component mounted', () => {
  let mountedApp: Wrapper<any>;

  beforeAll(() => {
    const localVue = createLocalVue();
    const testHomeComponent = localVue.component('test-home-component', {
      name: 'TestHomeComponent',
      render: (createElement) => createElement('div', 'Test home component'),
    });

    const router = new VueRouter({
      routes: [
        {
          path: '/',
          component: testHomeComponent,
        },
      ],
    });
    localVue.use(VueRouter);

    mountedApp = mount(App, {
      localVue,
      router,
    });
  });
  it('renders without an error', () => {
    expect(mountedApp).toBeDefined();
  });

  it("displays the current route's component", () => {
    expect(mountedApp.text()).toContain('Test home component');
  });
});
