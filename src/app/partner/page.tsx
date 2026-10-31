"use client";

import React from 'react';

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 lg:pt-32 lg:pb-28 max-w-7xl mx-auto">
        {/* Abstract background blobs for modern vibe */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-rose-400/20 blur-[100px]" />
          <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-amber-300/20 blur-[120px]" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-800 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-rose-500"></span>
            Partner Program
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Bring Your Menu <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">to Life</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            Transform your dishes into interactive 3D experiences. Let customers explore your food before they order, creating a premium dining journey from the very first tap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact-form"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20"
            >
              Partner With Us
            </a>
            <a 
              href="#benefits"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-50 transition-all border border-slate-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Benefit 1 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100/60 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">More Than Just a Menu</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              We turn your standard 2D photos into stunning 3D models that customers can spin, zoom, and explore directly on their phones. No app downloads required—just seamless engagement.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100/60 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Make Every Dish a Centerpiece</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              3D presentation highlights the texture, portion size, and vivid details of your culinary creations. Dishes look so real, customers can almost taste them—increasing order confidence.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100/60 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Explore from Anywhere</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Whether they are ordering delivery from the couch or deciding where to dine tonight, give customers a virtual window into your kitchen and let them explore your menu remotely.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100/60 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">A Modern, Premium Vibe</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Stand out from the crowd. Offering a 3D AR menu signals to your guests that you care about quality, innovation, and delivering the ultimate dining experience before they even sit down.
            </p>
          </div>

        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="contact-form" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to Upgrade?</h2>
            <p className="text-slate-600 text-lg">Leave your details and we'll reach out to discuss how we can bring your menu to the next dimension.</p>
          </div>

          <form className="space-y-6 max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Partner request form submitted!"); }}>
            <div className="space-y-2">
              <label htmlFor="restaurantName" className="block font-semibold text-sm text-slate-700">Restaurant Name</label>
              <input 
                type="text" 
                id="restaurantName" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-medium"
                placeholder="e.g. Bistro Zenith"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block font-semibold text-sm text-slate-700">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-medium"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block font-semibold text-sm text-slate-700">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-medium"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-semibold text-sm text-slate-700">Business Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-medium"
                placeholder="jane@bistrozenith.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-semibold text-sm text-slate-700">Tell us about your menu</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all font-medium resize-none"
                placeholder="How many dishes are you looking to showcase in 3D?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Request Access
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
