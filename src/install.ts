import { App as Application, Plugin } from 'vue';
import VTweakpane from './components/VTweakpane.vue';
import { setVueInstance } from './utils/config/index';

let installed = false;

const install: Exclude<Plugin['install'], undefined> = (app: Application) => {
  if (!installed) {
    setVueInstance(app);
    app.component('VTweakpane', VTweakpane);
    installed = true;
  }
};

export default install;
