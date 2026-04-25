import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kristina.design"),
  title: "Kristina Hakobyan — Product Designer",
  description:
    "Multi-surface product design for iGaming, SaaS, and education. I design systems from first wireframe to developer handoff — built for real constraints, not showreels.",
  openGraph: {
    title: "Kristina Hakobyan — Product Designer",
    description:
      "Multi-surface product design for iGaming, SaaS, and education.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        {/* Crisp chat — uses env var; safe to ship without */}
        {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && (
          <Script id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
              (function(){
                var d = document; var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js"; s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
              window.$crisp.push(["set", "message:text", ["Have a project in mind? Feel free to message me."]]);
              window.$crisp.push(["safe", true]);
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
