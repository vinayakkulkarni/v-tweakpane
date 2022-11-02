<template>
  <v-github-icon url="https://github.com/vinayakkulkarni/v-tweakpane" />
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <v-tweakpane class="p-4" :pane="state.pane" />
    <v-tweakpane class="p-4" :pane="state.pane" />
    <v-tweakpane class="p-4" :pane="state.pane" />
    <v-tweakpane class="p-4" :pane="state.pane" />
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
  import { defineComponent, ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { VTweakpane } from 'v-tweakpane';

  export default defineComponent({
    components: {
      VTweakpane,
      VGithubIcon,
    },
    setup() {
      const state = ref({
        pane: {
          title: 'My Awesome Pane',
          inputs: [
            {
              factor: 123,
              title: 'hello',
              color: '#0f0',
            },
          ],
        },
      });
      return {
        state,
      };
    },
  });
</script>
<style>
  @import 'v-github-icon/dist/v-github-icon.css';
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>
