import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Resume Guy - Resume/CV Creation Service in Sri Lanka",
    template: "%s | The Resume Guy",
  },
  description:
    "Land your dream job with a powerfully created resume that suits to your needs. We consists of professional idividuals that has vast experience in creating professional grade resumes.",

  openGraph: {
    title: "The Resume Guy - Resume/CV Creation Service in Sri Lanka",
    description:
      "Land your dream job with a powerfully created resume that suits to your needs. We consists of professional idividuals that has vast experience in creating professional grade resumes.",
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
