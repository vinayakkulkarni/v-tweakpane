import { ButtonProps, TabParams } from '@tweakpane/core';
import { FolderParams } from 'tweakpane';
import { PaneConfig } from 'tweakpane/dist/types/pane/pane-config';

interface PaneProps extends PaneConfig {
  title: string;
  folders?: FolderParams[];
  buttons?: ButtonProps[];
  tabs?: TabParams[];
  inputs?: { factor?: number; title?: string; color?: string }[];
}
