import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import '@/styles/global.scss';

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '600'],
  variable: '--font',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatText.variable}>{children}</body>
    </html>
  );
}
