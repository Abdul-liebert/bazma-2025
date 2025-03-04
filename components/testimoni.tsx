"use client"
import { Marquee } from "./magicui/marquee"
import Image from "next/image";

const testimonials = [
  {
    name: "Dian Sumatri",
    position: "Kepala Pusat Sumber Belajar",
    image: "/images/dian.png", // Sesuaikan dengan path gambar
    text: "Bantuan dana pembelian buku kotak ilmu ini adalah amanah yang harus kita sampaikan ke yang berhak. Semoga santunan tersebut senantiasa menjadi limpahan amal bagi para donatur-donatur dan mencurahkan keberkahan untuk anak-anak",
  },
  {
    name: "Djumati Sipirunaung",
    position: "Ketua Yayasan Ar-Rahman BEO",
    image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg", // Sesuaikan dengan path gambar
    text: "Bantuan Laptop dan Alat belajar ini sangat bermanfaat dalam menunjang proses belajar mengajar kami, madrasah yang berada di daerah terluar Indonesia.",
  },
  {
    name: "Bilal Bahrul Ulum",
    position: "Siswa SMART",
    image: "/images/bilal.png", // Sesuaikan dengan path gambar
    text: "Alhamdulillah dengan adanya tambahan takjil buka puasa ini, menambah semangat kami untuk senantiasa mengamalkan shaum sunnah senin dan Kamis.",
  },
];

export function TestimonialMarquee() {
  return (
    <Marquee className="w-full max-w-6xl mx-auto" pauseOnHover>
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="group flex flex-col items-center text-center max-w-sm p-4 bg-white shadow-lg rounded-lg hover:bg-red-500 transition-colors duration-300"
      >
        <div className="flex gap-1 mb-3 text-yellow-500">
          {Array(5).fill("⭐").map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>
        <p className="text-gray-700 mb-4 group-hover:text-white transition-colors duration-300">
          {testimonial.text}
        </p>
        <div className="flex items-center gap-3 mt-4">
          <Image
            src="/img/jd.jpg"
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full border"
          />
          <div className="text-left">
            <p className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
              {testimonial.name}
            </p>
            <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors duration-300">
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    ))}
  </Marquee>
  
  );
}
