import { App as Application, Plugin } from 'vue';
import VTweakpane from './components/VTweakpane.vue';
import { setVueInstance } from './utils/config/index';

let installed: boolean = false;

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application,
) => {
  if (!installed) {
    setVueInstance(instance);
    instance.component('VTweakpane', VTweakpane);
    installed = true;
  }
};

export default install;

export { VTweakpane };
