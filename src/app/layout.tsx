import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QuizLockProvider } from '@/context/QuizLockContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think Tech - DB Guru",
  description: "Premier destination for learning Database design and Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Quote Widget Script */}
        <script
          src="https://quote-widget-app.vercel.app/quote-widget.js"
          data-api="https://quote-widget-app.vercel.app/api/random-quote"
          data-position="bottom-right"
          data-icon="🦉"
          data-autohide="50000">
        </script>
        {/* Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Get stored theme preference or default to 'system'
                const theme = localStorage.getItem('think-tech-theme') || 'system'
                const root = document.documentElement

                // Remove existing theme classes
                root.classList.remove('light', 'dark')
                
                // Apply theme class
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  root.classList.add(systemTheme)
                } else {
                  root.classList.add(theme)
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap application in ThemeProvider */}
        <ThemeProvider
          defaultTheme="system"
          storageKey="think-tech-theme"
        >
          {/* Quiz lock context to manage quiz access state */}
          <QuizLockProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </QuizLockProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
