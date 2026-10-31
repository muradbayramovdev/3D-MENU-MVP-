'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

interface Props {
  modelUrl: string;
  posterUrl: string;
  altText: string;
}

export default function Dish3DViewer({ modelUrl, posterUrl, altText }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[400px] md:h-[500px] bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse bg-slate-200 w-full h-full"></div>
      </div>
    );
  }

  return (
    <>
      <Script 
        type="module" 
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" 
        strategy="lazyOnload" 
      />
      
      {/* 
        Future Improvements:
        - Add environment-image for realistic lighting matching the restaurant
        - Add custom AR button slot for better platform-native feel
        - Setup varying shadow-intensity based on dish type
      */}
      <div className="w-full h-[400px] md:h-[500px] relative bg-slate-50/50">
        <model-viewer
          src={modelUrl}
          poster={posterUrl}
          alt={altText}
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          class="w-full h-full outline-none"
          camera-orbit="calc(-1.5rad + env(window-scroll-y) * 4rad) calc(0deg + env(window-scroll-y) * 180deg) calc(5m - env(window-scroll-y) * 10m)"
        >
          {/* Custom AR Button */}
          <button 
            slot="ar-button" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-slate-900 border border-slate-100 shadow-lg px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white active:scale-95 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            View on Your Table
          </button>
        </model-viewer>
      </div>
    </>
  );
}
