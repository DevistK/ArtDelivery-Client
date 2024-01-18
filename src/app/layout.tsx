import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import { AuthProvider } from "@/context/tokenContext";

const inter = Inter({ subsets: ["latin"] });

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cls = (...classnames: string[]) => {
    return classnames.join(" ");
  };

  return (
    <AuthProvider>
      <html lang="en">
        <body className={cls(notoSansKr.className, roboto.variable)}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </AuthProvider>
  );
}
