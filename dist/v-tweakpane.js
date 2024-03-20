import { defineComponent as r, ref as s, onMounted as p, nextTick as i, openBlock as u, createElementBlock as f, createElementVNode as m } from "vue";
import { Pane as d } from "tweakpane";
import * as _ from "@tweakpane/plugin-essentials";
/*!
* v-tweakpane v0.2.0
* (c) 2024 Vinayak Kulkarni
* @license MIT
*/
const v = { class: "w-full h-full" }, k = /* @__PURE__ */ r({
  __name: "VTweakpane",
  props: {
    pane: {}
  },
  emits: ["on-pane-created"],
  setup(e, { emit: a }) {
    const n = e, o = a, t = s(null), l = s(null);
    return p(() => {
      i(() => {
        t.value instanceof Element && (l.value = new d({
          container: t.value,
          title: n.pane.title,
          expanded: n.pane.expanded
        }), l.value.registerPlugin(_), o("on-pane-created", l.value));
      });
    }), (E, T) => (u(), f("main", v, [
      m("div", {
        ref_key: "el",
        ref: t
      }, null, 512)
    ]));
  }
}), x = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [o, t] of a)
    n[o] = t;
  return n;
}, w = /* @__PURE__ */ x(k, [["__scopeId", "data-v-29b6d810"]]);
let c = !1;
const g = (e) => {
  c || (e.component("VTweakpane", w), c = !0);
}, P = g;
export {
  w as VTweakpane,
  P as default
};
//# sourceMappingURL=v-tweakpane.js.map
