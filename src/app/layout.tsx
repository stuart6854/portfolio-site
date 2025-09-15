import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/styles.css';
import NavBar from '@/components/nav-bar';
import ThemeProvider from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Stuart Millman's Portfolio",
  description: 'My portfolio. Created using Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NavBar />
          <div className='max-w-[960px] mx-auto pt-16 px-24'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
