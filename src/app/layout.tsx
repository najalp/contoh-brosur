import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artima | Arsitektur & Interior",
  description: "Kami menghadirkan sentuhan elegan dan kenyamanan maksimal ke dalam hunian Anda dengan desain arsitektur premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
