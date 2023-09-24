import type { Theme } from './types';

type CustomEventMap = {
  themechanged: CustomEvent<{ theme: Theme }>;
};

declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
  }
}

export function dispatchThemeChangedEvent(target: EventTarget, theme: Theme) {
  target.dispatchEvent(
    new CustomEvent('themechanged', { bubbles: true, detail: { theme } }),
  );
}
