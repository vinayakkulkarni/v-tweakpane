import type { App as Application, Plugin } from 'vue';
import VTweakpane from './components/VTweakpane.vue';

let installed = false;

const install: Exclude<Plugin['install'], undefined> = (app: Application) => {
  if (!installed) {
    app.component('VTweakpane', VTweakpane);
    installed = true;
  }
};

export default install;
