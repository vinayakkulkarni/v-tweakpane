import { Pane } from 'tweakpane';
import type { PaneConfig } from 'tweakpane/dist/types/pane/pane-config';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    pane: PaneConfig;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "on-pane-created": (pane: Pane) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    pane: PaneConfig;
}>>> & {
    "onOn-pane-created"?: ((pane: Pane) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
