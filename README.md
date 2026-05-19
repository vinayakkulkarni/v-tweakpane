# V-Tweakpane 🎛️

<!-- Badges -->

[![Pipeline](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/v-tweakpane/pipeline.yml?branch=main&logo=github-actions&label=pipeline)](https://github.com/vinayakkulkarni/v-tweakpane/actions/workflows/pipeline.yml)
[![GitHub release](https://img.shields.io/github/v/release/vinayakkulkarni/v-tweakpane?sort=semver&logo=github&label=release)](https://github.com/vinayakkulkarni/v-tweakpane/releases)
[![npm](https://img.shields.io/npm/v/v-tweakpane?logo=npm&label=npm)](https://www.npmjs.com/package/v-tweakpane)
[![JSR](https://img.shields.io/jsr/v/@vinayakkulkarni/v-tweakpane?logo=jsr&label=jsr)](https://jsr.io/@vinayakkulkarni/v-tweakpane)
[![npm downloads](https://img.shields.io/npm/dm/v-tweakpane?logo=npm&label=downloads)](http://npm-stat.com/charts.html?package=v-tweakpane)
[![bundle size](https://img.shields.io/bundlephobia/minzip/v-tweakpane?label=size)](https://bundlephobia.com/package/v-tweakpane@latest)
[![types](https://img.shields.io/npm/types/v-tweakpane?logo=typescript&label=types)](https://github.com/vinayakkulkarni/v-tweakpane/blob/main/package.json)
[![License](https://img.shields.io/github/license/vinayakkulkarni/v-tweakpane?logo=github&label=license)](./LICENSE)

[![vite-plus](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-tweakpane/dev/vite-plus?logo=vite&label=vite-plus)](https://github.com/voidzero-dev/vite-plus)
[![typescript](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-tweakpane/dev/typescript?logo=TypeScript&label=typescript)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/github/package-json/packageManager/vinayakkulkarni/v-tweakpane?label=pnpm&logo=pnpm)](https://pnpm.io/)
[![node](https://img.shields.io/node/v/v-tweakpane?logo=node.js&label=node)](https://nodejs.org/)

<!-- End Badges -->

---

## Demo

[![Edit v-tweakpane](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/v-tweakpane?file=src/App.vue)

---

## Features

- Power of [Vue 3](https://vuejs.org) with awesomeness of [Tweakpane](https://cocopon.github.io/tweakpane/)!
- Built from scratch using [TypeScript](https://www.typescriptlang.org)

---

## Table of Contents

- [V-Tweakpane 🎛️](#v-tweakpane-️)
  - [Demo](#demo)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
    - [Usage](#usage)
    - [Example](#example)
  - [Contributing](#contributing)
  - [Author](#author)

### Installation

```sh
pnpm add tweakpane v-tweakpane @tweakpane/plugin-essentials
```

### Build Setup

```bash
# install dependencies
$ pnpm install

# package lib
$ pnpm run build
```

### Usage

Global component:

```js
// main.ts
import { VTweakpane } from 'v-tweakpane';
import { createApp } from 'vue';

const app = createApp({});
app.component('VTweakpane', VTweakpane);
```

Or use locally

```js
// component.vue
<script lang="ts">
import { defineComponent } from 'vue';
import { VTweakpane } from 'v-tweakpane';

export default defineComponent({
  components: {
    VTweakpane,
  },
});
</script>
```

For Nuxt 3, create a file in `plugins/v-tweakpane.ts`

```js
import { VTweakpane } from 'v-tweakpane';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VTweakpane', VTweakpane);
});
```

then import the file in `nuxt.config.{j|t}s`:

```js
export default {
  // ...
  plugins: [
    // ...
    { src: '~/plugins/v-tweakpane', mode: 'client' },
    // ...
  ],
  // ...
};
```

### Example

```html
<template>
  <v-tweakpane :pane="state.pane" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { VTweakpane } from 'v-tweakpane';

  export default defineComponent({
    name: 'App',
    components: { VTweakpane },
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
      return { state };
    },
  });
</script>
<style>
  @import 'v-tweakpane/dist/v-tweakpane.css';
</style>
```

## Contributing

1. Fork it ([https://github.com/vinayakkulkarniv-tweakpane/fork](https://github.com/vinayakkulkarniv-tweakpane/fork))
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarniv-tweakpane/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**v-image** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarniv-tweakpane/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
