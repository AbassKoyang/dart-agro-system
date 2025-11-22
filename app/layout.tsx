import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/Footer";
import Quote from "@/components/home/Quote";
import SmoothScroll from "@/components/ScrollSMoother";

export const metadata: Metadata = {
  title: "Dart Agro System",
  description: "DartAgro Systems is a global manufacturer of heavy agricultural machinery and smart farming technology. With operations across 40+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
      <body
        className={`antialiased w-[100vw] h-[100vh] flex justify-center overflow-x-hidden bg-black`}
      >
        <SmoothScroll>
        <main className="w-full max-w-[1400px]">
        <Nav />
        {children}
        </main>
        </SmoothScroll>
      </body>
    </html>
    </ViewTransitions>
  );
}
