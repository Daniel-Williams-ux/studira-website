import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { SiteStructuredData } from "@/components/seo/site-structured-data";
import { rootMetadata } from "@/lib/site/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sslMono = IBM_Plex_Mono({
  variable: "--font-ssl-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${sslMono.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col overflow-x-hidden bg-surface font-sans text-foreground"
        suppressHydrationWarning
      >
        <SiteStructuredData />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
