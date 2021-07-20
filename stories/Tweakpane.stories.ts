import VTweakpane from '@/components/VTweakpane.vue';

export default {
  component: VTweakpane,
  title: 'Tweakpane/Examples',
};

export const SinglePane = (args) => ({
  components: { VTweakpane },
  setup() {
    return { args };
  },
  template: `<v-tweakpane :pane="args.pane" />`,
});
SinglePane.args = {
  pane: {
    title: 'My Awesome Pane',
    inputs: [
      {
        factor: 123,
        title: 'hello',
        color: '#0f0',
      },
    ],
    folders: [
      {
        title: 'Basic',
        inputs: [
          {
            factor: 123,
            title: 'hello',
            color: '#0f0',
          },
        ],
      },
    ],
    tabs: [
      {
        pages: [{ title: 'Parameters' }, { title: 'Advanced' }],
      },
    ],
  },
};

export const MultiplePanes = (args) => ({
  components: { VTweakpane },
  setup() {
    return { args };
  },
  template: `
  <div v-for="(pane, idx) in args.panes" :key="idx">
    <div style="margin-bottom: 10px; margin-bottom: 10px;">
      <v-tweakpane :pane="pane" />
    </div>
  </div>
  `,
});
MultiplePanes.args = {
  panes: [
    {
      title: 'My 1st Awesome Pane',
      inputs: [
        {
          factor: 123,
          title: 'hello',
          color: '#0f0',
        },
      ],
      folders: [
        {
          title: 'Basic',
          inputs: [
            {
              factor: 123,
              title: 'hello',
              color: '#0f0',
            },
          ],
        },
      ],
      tabs: [
        {
          pages: [{ title: 'Parameters' }, { title: 'Advanced' }],
        },
      ],
    },
    {
      title: 'My 2nd Awesome Pane',
      inputs: [
        {
          color: '#0f0',
        },
      ],
    },
  ],
};
