import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "xMail",
  description: "xMail AI SaaS - Your all-in-one Mailbox Client with AI assistance",
  icons: [
    { rel: "icon", url: "/logo-light.svg", media: "(prefers-color-scheme: dark)" },
    { rel: "icon", url: "/logo-dark.svg", media: "(prefers-color-scheme: light)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
