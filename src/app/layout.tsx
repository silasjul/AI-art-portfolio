import "./globals.css";
import { inter } from "./meta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
