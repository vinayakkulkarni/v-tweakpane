<template>
  <main class="w-full h-full">
    <div ref="el" />
  </main>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    Ref,
    onMounted,
    PropType,
    nextTick,
  } from 'vue';
  import { Pane } from 'tweakpane';
  import { PaneProps } from '@/types';

  export default defineComponent({
    name: 'VTweakpane',
    props: {
      pane: {
        type: Object as PropType<PaneProps>,
        default: () => {},
        required: true,
      },
    },
    setup(props) {
      // Number of elements to bind the panes
      const el: Ref<HTMLElement | null> = ref(null);

      // Number of panes to show
      const pane: Ref<Pane | null> = ref(null);

      onMounted(() => {
        nextTick(() => {
          if (el.value instanceof Element) {
            pane.value = new Pane({
              container: el.value,
              title: props.pane.title,
              expanded: props.pane.expanded,
            });
            if (props.pane?.inputs && props.pane.inputs.length > 0) {
              props.pane.inputs.forEach((input) => {
                for (const [key] of Object.entries(input)) {
                  pane.value?.addInput(input, key);
                }
              });
            }
            if (
              props.pane?.folders &&
              Object.keys(props.pane.folders).length > 0
            ) {
              props.pane.folders.forEach((folder) => {
                pane.value?.addFolder(folder);
              });
            }
            if (props.pane?.tabs && Object.keys(props.pane.tabs).length > 0) {
              props.pane.tabs.forEach((tab) => {
                pane.value?.addTab(tab);
              });
            }
          }
        });
      });

      return {
        el,
      };
    },
  });
</script>

<style>
  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
</style>
