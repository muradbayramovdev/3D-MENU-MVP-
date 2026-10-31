import type React from 'react';

// Extend React 19 JSX IntrinsicElements to support the model-viewer web component
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        poster?: string;
        alt?: string;
        'shadow-intensity'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        ar?: boolean;
        'ar-modes'?: string;
        class?: string;
        'camera-orbit'?: string;
      };
    }
  }
}
