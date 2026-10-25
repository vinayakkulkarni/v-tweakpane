<script setup lang="ts">
  import { computed } from 'vue';

  export type Palette = 'mono' | 'fade' | 'spectrum';

  const props = defineProps<{
    petals: number;
    rings: number;
    radius: number;
    amplitude: number;
    twist: number;
    weight: number;
    ink: string;
    palette: Palette;
    spin: boolean;
  }>();

  const STEPS = 240;

  function ringPath(scale: number, rotation: number): string {
    const amp = props.amplitude;
    const points: string[] = [];
    for (let step = 0; step <= STEPS; step += 1) {
      const theta = (step / STEPS) * Math.PI * 2;
      const r =
        (scale * (1 + amp * Math.cos(props.petals * theta))) / (1 + amp);
      const x = r * Math.cos(theta + rotation);
      const y = r * Math.sin(theta + rotation);
      points.push(`${step === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    return `${points.join(' ')}Z`;
  }

  function ringStroke(index: number, total: number): string {
    if (props.palette === 'spectrum') {
      const shift = Math.round((index / total) * 300);
      return `oklch(from ${props.ink} l c calc(h + ${shift}))`;
    }
    return props.ink;
  }

  function ringOpacity(index: number, total: number): number {
    if (props.palette !== 'fade') return 0.9;
    return 0.2 + 0.8 * ((index + 1) / total);
  }

  const paths = computed(() => {
    const total = Math.max(1, Math.round(props.rings));
    return Array.from({ length: total }, (_, index) => {
      const scale = props.radius * (0.2 + 0.8 * ((index + 1) / total));
      const rotation = ((props.twist * index) / total) * (Math.PI / 180);
      return {
        key: index,
        d: ringPath(scale, rotation),
        stroke: ringStroke(index, total),
        opacity: ringOpacity(index, total),
      };
    });
  });
</script>

<template>
  <svg
    viewBox="-50 -50 100 100"
    role="img"
    :aria-label="`Rose curve with ${petals} petals across ${Math.round(rings)} rings`"
    class="size-full"
  >
    <g :class="spin ? 'motion-safe:animate-[spin_40s_linear_infinite]' : ''">
      <path
        v-for="ring in paths"
        :key="ring.key"
        :d="ring.d"
        fill="none"
        :stroke="ring.stroke"
        :stroke-opacity="ring.opacity"
        :stroke-width="weight"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
      />
    </g>
  </svg>
</template>
