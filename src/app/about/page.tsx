import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 mt-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">About Menu3D</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          We believe that dining starts long before you take your first bite. 
          Menu3D is on a mission to completely eliminate food envy and menu confusion by bringing photorealistic 3D menus to everyone&apos;s fingertips.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">The Problem We Are Solving</h2>
        <p className="text-slate-600 leading-relaxed">
          How many times have you squinted at a text-only menu or tried to decode vague dish names? 
          We solve this by giving restaurants a platform to show their food exactly as it arrives at the table.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h3 className="font-bold mb-2">Our Vision for the Future</h3>
        <p className="text-slate-600 text-sm">
          While we&apos;re currently starting with simple dish previews, our ultimate goal expands into AR table interactions, direct integration with POS systems, and personalized dining recommendations.
        </p>
      </div>
      
      <div className="pt-4">
        <Link href="/restaurants" className="text-rose-500 font-bold hover:underline">
          Explore our supported restaurants →
        </Link>
      </div>
    </div>
  );
}
