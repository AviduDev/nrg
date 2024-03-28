import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Resume Guy",
    template: "%s | The Resume Guy",
  },
  description: "Resume/ CV creation service in Sri Lanka",

  openGraph: {
    title: "The Resume Guy",
    description: "Resume/ CV creation service in Sri Lanka",
    type: "website",
    url: "https://www.theresumeguy.shop/",
    siteName: "The Resume Guy",
  },

  icons: {
    apple: "/apple-touch-icon.png",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
