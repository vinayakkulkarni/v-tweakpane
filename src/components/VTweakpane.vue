<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  import { Pane } from 'tweakpane';
  import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
  import type { Ref } from 'vue';
  import type { PaneConfig } from 'tweakpane/dist/types/pane/pane-config';
  import type { Pane as IPane } from 'tweakpane';

  // Props passed to the component
  const props = defineProps<{
    pane: PaneConfig;
  }>();

  // Emit events
  const emit = defineEmits<{
    'on-pane-created': [pane: Pane];
  }>();

  // Number of elements to bind the panes
  const el: Ref<HTMLElement | null> = ref(null);

  // Number of panes to show
  const p: Ref<IPane | null> = ref(null);

  onMounted(() => {
    nextTick(() => {
      if (el.value instanceof Element) {
        p.value = new Pane({
          container: el.value,
          title: props.pane.title,
          expanded: props.pane.expanded,
        });
        p.value.registerPlugin(EssentialsPlugin);
        emit('on-pane-created', p.value);
      }
    });
  });
</script>

<template>
  <main class="w-full h-full">
    <div ref="el" />
  </main>
</template>

<style scoped>
  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }
</style>
