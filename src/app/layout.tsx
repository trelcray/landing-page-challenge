import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";

const plusJakartaSans = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Leadster",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-white font-sans text-gray-900 antialiased",
          plusJakartaSans.variable
        )}
      >
        <Header />
        {children}
        <TailwindIndicator />
        <Footer />
      </body>
    </html>
  );
}
