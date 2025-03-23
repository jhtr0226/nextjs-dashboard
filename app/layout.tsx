import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Metadata } from 'next';
import './globals.css'



const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: {
    default: 'Acme Dashboard',
    template: '%s | Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}