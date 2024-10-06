import { TldrawApp } from '@tldraw/tldraw';

declare global {
  interface Window {
    editor: TldrawApp; // window 객체에 editor 속성 추가
  }
}
