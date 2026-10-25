<script setup lang="ts">
  import { useTheme, type ThemePreference } from '../composables/use-theme';
  import { track } from '../analytics';

  const { preference, setPreference } = useTheme();

  const options: { value: ThemePreference; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'system', label: 'Auto' },
    { value: 'dark', label: 'Dark' },
  ];

  const links = [
    {
      target: 'github',
      label: 'GitHub',
      href: 'https://github.com/vinayakkulkarni/v-tweakpane',
    },
    {
      target: 'npm',
      label: 'npm',
      href: 'https://www.npmjs.com/package/v-tweakpane',
    },
  ];
</script>

<template>
  <header class="border-b border-line">
    <div
      class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8"
    >
      <a
        href="/"
        class="flex shrink-0 items-center gap-2 font-mono text-sm font-medium whitespace-nowrap text-ink"
      >
        <span class="size-2.5 rounded-full bg-signal" aria-hidden="true" />
        v-tweakpane
      </a>
      <nav class="flex items-center gap-2.5 sm:gap-4" aria-label="Site">
        <div
          class="flex rounded-md border border-line p-0.5"
          role="group"
          aria-label="Colour theme"
        >
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="cursor-pointer rounded px-1.5 py-1 text-xs font-medium transition-colors sm:px-2"
            :class="
              preference === option.value
                ? 'bg-ink text-canvas'
                : 'text-muted hover:text-ink'
            "
            :aria-pressed="preference === option.value"
            @click="setPreference(option.value)"
          >
            {{ option.label }}
          </button>
        </div>
        <a
          v-for="link in links"
          :key="link.target"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-muted transition-colors hover:text-ink"
          @click="track('outbound_click', { target: link.target })"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
