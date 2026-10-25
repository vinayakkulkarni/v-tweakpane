<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { VTweakpane } from 'v-tweakpane';
  import type { Pane } from 'tweakpane';
  import SiteHeader from './components/SiteHeader.vue';
  import InstallCommand from './components/InstallCommand.vue';
  import RoseSketch, { type Palette } from './components/RoseSketch.vue';
  import { track } from './analytics';
  import { usage } from './usage-snippet';

  const sketch = reactive({
    petals: 6,
    rings: 14,
    radius: 46,
    amplitude: 0.45,
    twist: 90,
    weight: 1.25,
    ink: '#e8613a',
    palette: 'fade' as Palette,
    spin: false,
  });

  type SketchKey = keyof typeof sketch;
  type Container = Pick<Pane, 'addBinding'>;

  const tweaks = ref(0);
  const PETALS = [3, 4, 5, 6, 7, 8, 9, 12];

  function bind(
    container: Container,
    key: SketchKey,
    params: Parameters<Pane['addBinding']>[2] = {},
  ): void {
    container.addBinding(sketch, key, params).on('change', (event) => {
      if (!event.last) return;
      tweaks.value += 1;
      track('demo_interaction', { control: key });
    });
  }

  function randomise(pane: Pane): void {
    const pick = (min: number, max: number) =>
      min + Math.random() * (max - min);
    sketch.petals = PETALS[Math.floor(Math.random() * PETALS.length)] ?? 6;
    sketch.rings = Math.round(pick(4, 24));
    sketch.amplitude = Number(pick(0.1, 0.9).toFixed(2));
    sketch.twist = Math.round(pick(-180, 180));
    pane.refresh();
    tweaks.value += 1;
    track('demo_interaction', { control: 'randomise' });
  }

  function onPaneCreated(pane: Pane): void {
    const tab = pane.addTab({
      pages: [{ title: 'Shape' }, { title: 'Stroke' }],
    });
    const [shape, stroke] = tab.pages;
    if (!shape || !stroke) return;

    bind(shape, 'petals', {
      view: 'radiogrid',
      groupName: 'petals',
      size: [4, 2],
      cells: (x: number, y: number) => ({
        title: String(PETALS[y * 4 + x]),
        value: PETALS[y * 4 + x],
      }),
    });
    bind(shape, 'rings', { min: 1, max: 24, step: 1 });
    bind(shape, 'radius', { min: 12, max: 48, step: 1 });
    bind(shape, 'amplitude', { min: 0, max: 1, step: 0.01 });
    bind(shape, 'twist', { min: -180, max: 180, step: 1 });

    bind(stroke, 'ink');
    bind(stroke, 'weight', { min: 0.5, max: 4, step: 0.25 });
    bind(stroke, 'palette', {
      options: { Mono: 'mono', Fade: 'fade', Spectrum: 'spectrum' },
    });
    bind(stroke, 'spin');

    pane.addButton({ title: 'Randomise' }).on('click', () => randomise(pane));
  }
</script>

<template>
  <SiteHeader />
  <main class="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
    <section class="pt-12 pb-10 sm:pt-16">
      <p class="font-mono text-xs tracking-wide text-muted uppercase">
        Vue 3 · Tweakpane 4 · Essentials plugin
      </p>
      <h1
        class="mt-4 max-w-3xl text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-6xl"
      >
        Tweak a value. <span class="font-black">Watch it move.</span>
      </h1>
      <p class="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        <code class="font-mono text-ink">v-tweakpane</code> mounts a Tweakpane
        panel as a Vue component and hands you the pane. Bind reactive state,
        and every drag updates your view.
      </p>
      <div class="mt-7">
        <InstallCommand />
      </div>
    </section>

    <section
      class="grid gap-5 rounded-2xl border border-line bg-surface p-3 sm:p-5 lg:grid-cols-[minmax(0,1fr)_320px]"
      aria-label="Live demo"
    >
      <div
        class="relative aspect-square overflow-hidden rounded-xl bg-sunken lg:aspect-auto lg:min-h-[560px]"
      >
        <RoseSketch v-bind="sketch" />
        <p
          class="absolute bottom-3 left-4 font-mono text-[11px] text-muted sm:text-xs"
        >
          {{ sketch.rings }} rings × {{ sketch.petals }} petals ·
          {{ tweaks }} tweaks
        </p>
      </div>
      <div class="studio-pane min-w-0">
        <VTweakpane
          :pane="{ title: 'Sketch', expanded: true }"
          @on-pane-created="onPaneCreated"
        />
        <p class="mt-3 px-1 text-sm leading-relaxed text-muted">
          Every control above is a Tweakpane binding on one
          <code class="font-mono text-ink">reactive()</code> object. The SVG
          reads the same object.
        </p>
      </div>
    </section>

    <section class="mt-16 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div>
        <h2 class="text-2xl font-light tracking-tight">
          <span class="font-black">One component,</span> the whole pane API.
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          Listen for <code class="font-mono text-ink">on-pane-created</code>
          and use the Tweakpane API as documented. The essentials plugin is
          registered for you.
        </p>
      </div>
      <pre
        class="overflow-x-auto rounded-xl border border-line bg-sunken p-5 font-mono text-[13px] leading-relaxed text-ink"
      ><code>{{ usage }}</code></pre>
    </section>
  </main>
  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:px-8"
    >
      <p>MIT © Vinayak Kulkarni</p>
      <a
        href="https://vinayakkulkarni.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-ink"
        @click="track('outbound_click', { target: 'author' })"
      >
        vinayakkulkarni.dev
      </a>
    </div>
  </footer>
</template>
