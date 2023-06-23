import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import "@/styles/globals.css";

const plusJakartaSans = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
