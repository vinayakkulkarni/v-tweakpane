<script setup lang="ts">
  import { VGithubIcon } from 'v-github-icon';
  import { VTweakpane } from 'v-tweakpane';

  const onPaneOneCreated = (pane: any) => {
    const tab = pane.addTab({
      pages: [{ title: 'Parameters' }, { title: 'Advanced' }],
    });
    const PARAMS_1 = {
      percentage: 50,
      theme: 'dark',
    };
    // `min` and `max`: slider
    tab.pages[0].addBinding(PARAMS_1, 'percentage', {
      min: 0,
      max: 100,
      step: 10,
    });
    // `options`: list
    tab.pages[0].addBinding(PARAMS_1, 'theme', {
      options: { Dark: 'dark', Light: 'light' },
    });

    const PARAMS_2 = {
      offset: { x: 50, y: 50 },
    };
    tab.pages[1].addBinding(PARAMS_2, 'offset', {
      picker: 'inline',
      expanded: true,
    });
  };
  const onPaneTwoCreated = (pane: any) => {
    const PARAMS = {
      scale: 25,
    };

    const scales = [10, 20, 25, 50, 75, 100];
    pane
      .addBinding(PARAMS, 'scale', {
        view: 'radiogrid',
        groupName: 'scale',
        size: [3, 2],
        cells: (x: number, y: number) => ({
          title: `${scales[y * 3 + x]}%`,
          value: scales[y * 3 + x],
        }),

        label: 'radiogrid',
      })
      .on('change', (ev: any) => {
        console.log(ev);
      });
  };
  const onPaneThreeCreated = (pane: any) => {
    pane.addBlade({
      view: 'text',
      label: 'name',
      parse: (v: number) => String(v),
      value: 'sketch-01',
    });
    pane.addBlade({
      view: 'separator',
    });
    pane.addBlade({
      view: 'slider',
      label: 'brightness',
      min: 0,
      max: 1,
      value: 0.5,
    });
  };
  const onPaneFourCreated = (pane: any) => {
    const PARAMS = {
      background: { r: 255, g: 0, b: 55 },
      tint: { r: 0, g: 255, b: 214, a: 0.5 },
    };
    pane.addBinding(PARAMS, 'background');
    pane.addBinding(PARAMS, 'tint');
  };
</script>

<template>
  <v-github-icon url="https://github.com/vinayakkulkarni/v-tweakpane" />
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Folder Example' }"
      @on-pane-created="onPaneOneCreated"
    />
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Radio Grid Example' }"
      @on-pane-created="onPaneTwoCreated"
    />
    <v-tweakpane
      class="p-4"
      :pane="{ title: 'Blade with Separator Example' }"
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
      class="text-gray-400"
    >
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<style>
  @import 'v-github-icon/dist/v-github-icon.css';
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>
