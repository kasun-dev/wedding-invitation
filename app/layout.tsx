import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Gold Arch Wedding Invitation',
  description: 'Premium single-page digital wedding invitation'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
