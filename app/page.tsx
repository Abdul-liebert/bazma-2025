import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import CustomCard from "@/components/card";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import SidebarTabs from "@/components/tabs";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { TestimonialMarquee } from "@/components/testimoni";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="container w-full flex mx-auto flex-col md:flex-row gap-6 px-6 md:px-12 py-10">
        {/* Background Section */}

        {/* Kartu Kebaikan */}
        <div className="bg-blue-100 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 md:w-3/4 relative">
          <div className="flex flex-col items-start gap-3  ms-4">
            <h2 className="text-5xl font-bold text-black">
              Ragam Kebaikan Bisa Ditunaikan
            </h2>
            <p className="text-gray-700 text-lg">
              Bazma siap menyambungkan kebaikan dengan para penerima manfaat
              agar mereka bisa berdaya.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex px-5 py-2 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition self-start"
            >
              Selengkapnya →
            </a>
          </div>

          <img
            src="img/hero.webp"
            alt="Donation"
            className="w-20 md:w-[400px]"
          />
        </div>

        {/* Kartu Fundraiser */}
        <div className="bg-red-600 text-center text-white align-middle justify-center rounded-2xl p-6 flex flex-col md:w-1/4 relative">
          <h2 className="text-4xl font-bold">#Yuk Jadi Fundraiser</h2>
          <p className="mt-2">
            Dapatkan peluang Pahala Jariyah dengan membagikan Campaign. Desain
            kami sediakan, anda tinggal sebarkan.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex text-center items-center mx-auto px-5 py-2 bg-sky-700 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Daftar Fundraiser →
          </a>
        </div>
      </section>
      <section className="container w-full flex mx-auto  md:flex-row gap-6 px-6 md:px-12 py-10">
        <div className="flex flex-col w-1/3 gap-4">
          <h1 className="text-4xl font-bold ">Kami Siap Melayani</h1>
          <p className="text-md font-medium text-gray-600">
            Bersama kami, berdonasi jadi lebih mudah, menyenangkan, dan penuh
            arti untuk mereka yang membutuhkan. Pilih salah satu layanan yang
            Sahabat Baik perlukan yuk.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <CustomCard
            title="Zakat Kalkulator"
            description="Hitung kewajiban zakat, cukup masukan nilai dan lihat hasilnya"
            imageUrl="https://bazma.org/wp-content/uploads/2025/01/Kalkulator-Zakat-1.webp"
          />

          {/* Kartu kedua */}
          <CustomCard
            title="Konfirmasi Donasi"
            description="Sudah Transfer? Yuk konfirmasi donasi Sahabat Baik agar tercatat"
            imageUrl="https://bazma.org/wp-content/uploads/2025/01/Konfirmasi.webp"
          />
          <CustomCard
            title="Jemput Ziswaf"
            description="Tidak perlu kemana-mana, ZISWAF Sahabat Kami Jemput. Mudah bukan?"
            imageUrl="https://bazma.org/wp-content/uploads/2025/01/Jemput-zakat.webp"
          />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-center">
            Berbagai Pilihan Kebaikan
          </h1>
          <p className=" text-center w-2/3 text-lg text-gray-600">
            Berani berbuat baik, karena kebaikan kebaikanmu hantarkan senyum dan
            kebahagiaan kepada mereka.
            <span className="font-bold text-red-600">
              {" "}
              Donasi Mudah mulai Rp10.000.
            </span>
          </p>
        </div>
        <div>
          <SidebarTabs />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-center">
            Apa Kata mereka tentang Bazma
          </h1>
          <p className=" text-center w-2/3 text-lg text-gray-600">
            Lebih dari 30 tahun, Bazma telah menebar manfaat bagi sesama
          </p>
        </div>
        <div>
          <TestimonialMarquee />
        </div>
      </section>
      <section className="flex flex-col mb-10">
      <div
      className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-lg h-64 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('https://bazma.org/wp-content/uploads/2025/01/Cover-Image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Gabung #JadiVolunteer</h2>
        <p className="mt-2 text-sm">
          Yuk bergabung dalam setiap program kebaikan Bazma
        </p>
        <div className="flex">

          <a
            href="#"
            className="mt-4 bg-red-500 hover:bg-red-600 mx-auto text-white font-semibold  py-2 px-5 rounded-full   items-center gap-2 transition-all"
          >
            Daftar Volunteer →
          </a>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
}
