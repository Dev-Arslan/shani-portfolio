import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500', '600'] });
export const metadata: Metadata = {
  title: 'Shani — Professional, Entrepreneur & Product Builder',
  description: 'The professional portfolio of Shani: career, education, businesses, and products.',
  openGraph: { title: 'Shani — Professional, Entrepreneur & Product Builder', description: 'Career, education, businesses, and products.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Shani — Professional, Entrepreneur & Product Builder', description: 'Career, education, businesses, and products.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }
