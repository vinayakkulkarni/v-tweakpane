import VTweakpane from '@/components/VTweakpane.vue';

export default {
  component: VTweakpane,
  title: 'Tweakpane/Examples',
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { VTweakpane },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<div v-if="args.pane"> 
      <v-tweakpane :pane="args.pane" /> 
    </div>
    <div v-if="args.panes">
      <v-tweakpane v-for="pane in args.panes" :key="pane" :pane="pane" />
    </div>`,
});

//👇 Each story then reuses that template
export const SinglePane = Template.bind({});
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

export const MultiplePanes = Template.bind({});
MultiplePanes.args = {
  panes: [
    {
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
    {
      title: 'My Awesome Pane',
      inputs: [
        {
          factor: 123,
          title: 'hello',
          color: '#0f0',
        },
      ],
    },
  ],
};
