import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Bazma - Baituzzakah Pertamina",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <div className=" w-full  h-[50px] bg-sky-700 text-white align-middle hidden lg:block pb-4 lg:flex lg:justify-center lg:pt-4">
              <a href="#" className="text-sm">
                <span className="font-bold me-1">
                  Tunaikan Kewajiban Zakat.
                </span>
                Klik Disini untuk berzakat!
              </a>
            </div>
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-grow">
              {children}
            </main>
            <footer className="bg-gray-100 py-10 mt-10">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Kolom 1: Logo & Deskripsi */}
                <div>
                  <div className="flex items-center gap-3">
                  <img src="/img/bazma.png" alt="Bazma Logo" className="w-[80px] h-auto object-contain" />
                  <img src="/img/upz.png" alt="UPZ Logo" className="w-[80px] h-auto object-contain" />
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    Yayasan Bazma (Baituzzakah Amanah Manfaat Ummat) sebagai
                    lembaga yang hadir dengan nilai-nilai semangat berbagi
                    dengan mengelola dana Zakat, Infak/Sedekah, Wakaf dan dana
                    sosial lainnya.
                  </p>
                  {/* Ikon Sosial Media */}
                  <div className="mt-4 flex gap-3">
                    <a href="#" className="text-pink-500 text-xl">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-green-500 text-xl">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>

                {/* Kolom 2: Kerjasama */}
                <div>
                  <h4 className="font-semibold text-gray-900">Kerjasama</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Gabung Volunteer
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Kolom 3: Tentang Kami */}
                <div>
                  <h4 className="font-semibold text-gray-900">Tentang Kami</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Program
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Rekening ZISWAF
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Penyaluran Donasi
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Kolom 4: Support */}
                <div>
                  <h4 className="font-semibold text-gray-900">Support</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Customer Relationship
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Kalkulator Zakat
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        Campaign
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            <div className=" w-full  h-[50px] bg-sky-700 text-white my-auto pb-4 hidden lg:block lg:flex lg:justify-center lg:pt-4">
              <p className="text-white font-medium">Copyright © 2025 Bazma. All Right Reserved.</p>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
