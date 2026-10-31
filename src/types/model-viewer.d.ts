// Extend JSX IntrinsicElements to support the model-viewer web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'environment-image'?: string;
        poster?: string;
        'seamless-poster'?: boolean;
        'shadow-intensity'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        [key: string]: any;
      };
    }
  }
}

export {};
