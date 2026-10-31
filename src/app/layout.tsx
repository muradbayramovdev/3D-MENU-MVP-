import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Menu3D - Restaurant Discovery',
  description: 'Discover restaurants and cafes with 3D dish previews',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 min-h-screen text-slate-900 flex flex-col`}>
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
