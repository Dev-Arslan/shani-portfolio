import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const mono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Arslan Ahmed — Software Engineer',
  description: 'Software Engineer specializing in full-stack development, automation, APIs, and applied AI.',
  openGraph: { title: 'Arslan Ahmed — Software Engineer', description: 'Full-stack development, automation, APIs, and applied AI.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Arslan Ahmed — Software Engineer', description: 'Full-stack development, automation, APIs, and applied AI.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }
