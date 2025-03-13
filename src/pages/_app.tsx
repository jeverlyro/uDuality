import '@/styles/globals.css';
import '@fontsource/plus-jakarta-sans';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono } from "next/font/google";

// Font configuration
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main className={`${geistMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
