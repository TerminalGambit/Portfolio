import type { Metadata } from "next";
import { Space_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terminalgambit.github.io/Portfolio"),
  title: "Jack Massey — Machine Learning Engineer | AI & Finance Portfolio",
  description:
    "Portfolio of Jack Massey, a machine learning engineer specializing in AI-driven finance, quantitative systems, and data science. Explore projects in ML, algorithmic trading, and full-stack development.",
  keywords: [
    "machine learning engineer",
    "AI finance",
    "quantitative systems",
    "portfolio",
    "data science",
    "Jack Massey",
  ],
  openGraph: {
    type: "website",
    title: "Jack Massey — Machine Learning Engineer | AI & Finance Portfolio",
    description:
      "Machine learning engineer specializing in AI-driven finance and quantitative systems. Explore projects, skills, and experience.",
    siteName: "Jack Massey Portfolio",
    url: "https://terminalgambit.github.io/Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Massey — ML Engineer | AI & Finance Portfolio",
    description:
      "Machine learning engineer specializing in AI-driven finance and quantitative systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...{ suppressHydrationMismatch: true }}>
      <body
        className={`${spaceGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
