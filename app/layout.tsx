import "@/app/ui/global.css";
import { inter, noto_serif_jp, roboto_mono } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_serif_jp.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
