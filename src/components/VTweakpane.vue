<template>
  <main class="w-full h-full">
    <div ref="el" />
  </main>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue';
  import { Pane } from 'tweakpane';
  import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
  import type { Ref, PropType } from 'vue';
  import type { ButtonProps, TabParams } from '@tweakpane/core';
  import type { FolderParams } from 'tweakpane';
  import type { PaneConfig } from 'tweakpane/dist/types/pane/pane-config';

  export default defineComponent({
    name: 'VTweakpane',
    props: {
      pane: {
        type: Object as PropType<PaneConfig>,
        default: () => {},
        required: true,
      },
    },
    emits: ['on-pane-created'],
    setup(props, { emit }) {
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
            pane.value.registerPlugin(EssentialsPlugin);
            emit('on-pane-created', pane.value);
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
