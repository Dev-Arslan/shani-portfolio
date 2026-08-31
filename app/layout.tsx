import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500', '600'] });
export const metadata: Metadata = {
  title: 'Arslan Ahmed — Software Engineer',
  description: 'Software Engineer specializing in full-stack development, automation, APIs, and applied AI.',
  openGraph: { title: 'Arslan Ahmed — Software Engineer', description: 'Full-stack development, automation, APIs, and applied AI.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Arslan Ahmed — Software Engineer', description: 'Full-stack development, automation, APIs, and applied AI.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }
