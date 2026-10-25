import { mount } from '@vue/test-utils';
import { Pane } from 'tweakpane';
import { describe, expect, it } from 'vite-plus/test';
import { createApp, nextTick } from 'vue';
import install, { VTweakpane } from '../src/index';

const flush = async () => {
  await nextTick();
  await nextTick();
};

describe('VTweakpane', () => {
  it('creates a titled pane inside its container and emits it', async () => {
    const wrapper = mount(VTweakpane, {
      props: { pane: { title: 'Scene', expanded: true } },
      attachTo: document.body,
    });
    await flush();

    const events = wrapper.emitted('on-pane-created');
    expect(events).toHaveLength(1);
    const [pane] = events?.[0] ?? [];
    expect(pane).toBeInstanceOf(Pane);
    expect(wrapper.find('.tp-rotv').exists()).toBe(true);
    expect(wrapper.text()).toContain('Scene');
    wrapper.unmount();
  });

  it('registers the essentials plugin so its blades can be added', async () => {
    const wrapper = mount(VTweakpane, {
      props: { pane: { title: 'Essentials' } },
      attachTo: document.body,
    });
    await flush();

    const pane = wrapper.emitted('on-pane-created')?.[0]?.[0];
    expect(pane).toBeInstanceOf(Pane);
    if (!(pane instanceof Pane)) return;
    const params = { size: 10 };
    expect(() =>
      pane.addBinding(params, 'size', {
        view: 'radiogrid',
        groupName: 'size',
        size: [2, 1],
        cells: (x: number) => ({ title: `${x}`, value: x }),
      }),
    ).not.toThrow();
    wrapper.unmount();
  });

  it('installs the component globally', () => {
    const app = createApp({});
    app.use(install);
    expect(app.component('VTweakpane')).toBe(VTweakpane);
  });
});
