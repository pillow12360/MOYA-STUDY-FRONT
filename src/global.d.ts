// src/global.d.ts
import { TldrawApp } from '@tldraw/tldraw';

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare global {
  interface Window {
    editor: TldrawApp; // window 객체에 editor 속성 추가
  }
}
