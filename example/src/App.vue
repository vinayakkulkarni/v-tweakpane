<template>
  <v-github-icon url="https://github.com/vinayakkulkarni/v-tweakpane" />
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Simple Interval / Range Slider Example' }"
      @on-pane-created="onPaneOneCreated"
    />
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Camera Kit Plugin Example' }"
      @on-pane-created="onPaneTwoCreated"
    />
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Blade Example' }"
      @on-pane-created="onPaneThreeCreated"
    />
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Colorpicker Example' }"
      @on-pane-created="onPaneFourCreated"
    />
  </section>
  <div class="absolute bottom-4 right-4">
    <a
      href="https://app.netlify.com/sites/v-tweakpane/deploys"
      aria-label="View deploys on Netlify"
      target="_blank"
      rel="noopener noreferrer"
      class="gray-400"
    >
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { VTweakpane } from 'v-tweakpane';
  import * as CamerakitPlugin from '@tweakpane/plugin-camerakit';

  export default defineComponent({
    components: {
      VTweakpane,
      VGithubIcon,
    },
    setup() {
      const onPaneOneCreated = (pane: any) => {
        const PARAMS = {
          interval: { min: 16, max: 48 },
        };
        pane.addInput(PARAMS, 'interval', {
          min: 0,
          max: 100,
          step: 1,
        });
      };
      const onPaneTwoCreated = (pane: any) => {
        pane.registerPlugin(CamerakitPlugin);
        const PARAMS = {
          flen: 55,
          fnum: 1.8,
          iso: 100,
        };
        pane.addInput(PARAMS, 'flen', {
          view: 'cameraring',
          series: 0,
          unit: { pixels: 50, ticks: 10, value: 0.2 },
          min: 1,
          step: 0.02,
        });
        pane.addInput(PARAMS, 'fnum', {
          view: 'cameraring',
          series: 1,
          unit: { ticks: 10, pixels: 40, value: 0.2 },
          wide: true,
          min: 1.4,
          step: 0.02,
        });
        pane.addInput(PARAMS, 'iso', {
          view: 'camerawheel',
          amount: 100,
        });
      };
      const onPaneThreeCreated = (pane: any) => {
        pane.addBlade({
          view: 'text',
          label: 'name',
          parse: (v: number) => String(v),
          value: 'sketch-01',
        });
      };
      const onPaneFourCreated = (pane: any) => {
        const PARAMS = {
          background: { r: 255, g: 0, b: 55 },
          tint: { r: 0, g: 255, b: 214, a: 0.5 },
        };
        pane.addInput(PARAMS, 'background');
        pane.addInput(PARAMS, 'tint');
      };
      return {
        onPaneOneCreated,
        onPaneTwoCreated,
        onPaneThreeCreated,
        onPaneFourCreated,
      };
    },
  });
</script>
<style>
  @import 'v-github-icon/dist/v-github-icon.css';
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>
