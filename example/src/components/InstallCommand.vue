<script setup lang="ts">
  import { ref } from 'vue';
  import { track } from '../analytics';

  const COMMAND = 'pnpm add v-tweakpane tweakpane @tweakpane/plugin-essentials';
  const copied = ref(false);
  let resetTimer: ReturnType<typeof setTimeout> | undefined;

  async function copy(): Promise<void> {
    await navigator.clipboard.writeText(COMMAND);
    copied.value = true;
    track('install_copy', { manager: 'pnpm' });
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      copied.value = false;
    }, 1600);
  }
</script>

<template>
  <div
    class="flex w-full max-w-xl items-center gap-3 rounded-lg border border-line bg-surface py-2 pr-2 pl-4"
  >
    <span class="font-mono text-sm text-signal" aria-hidden="true">$</span>
    <code class="min-w-0 flex-1 truncate font-mono text-sm text-ink">
      {{ COMMAND }}
    </code>
    <button
      type="button"
      class="shrink-0 cursor-pointer rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
      :aria-label="copied ? 'Install command copied' : 'Copy install command'"
      @click="copy"
    >
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
  </div>
</template>
