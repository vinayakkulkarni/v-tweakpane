export const usage = `<script setup lang="ts">
  import { reactive } from 'vue';
  import { VTweakpane } from 'v-tweakpane';
  import type { Pane } from 'tweakpane';
  import 'v-tweakpane/dist/index.css';

  const params = reactive({ rings: 14, ink: '#e8613a' });

  function onPaneCreated(pane: Pane) {
    pane.addBinding(params, 'rings', { min: 1, max: 24, step: 1 });
    pane.addBinding(params, 'ink');
  }
</script>

<template>
  <v-tweakpane
    :pane="{ title: 'Sketch', expanded: true }"
    @on-pane-created="onPaneCreated"
  />
</template>`;
