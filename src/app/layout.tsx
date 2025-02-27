import "./globals.css";
import Nav from "@/components/nav/Nav";
import { Providers } from "./provider";
import { Footer } from "@/components/footer/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Samresh",
  description: "Portfolio Site - Samresh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
          <Nav />
          <div className="min-h-svh md:min-h-screen">
            <main>{children}</main>
          </div>
          <div className="h-28" aria-hidden="true" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
