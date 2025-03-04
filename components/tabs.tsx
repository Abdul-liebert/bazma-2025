"use client";
import { useState } from "react";
import { Card, CardBody, CardFooter, Button } from "@/app/utils/heroui";
import { IconCirclePlusFilled } from '@tabler/icons-react';

const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const campaigns = [
    {
      id: 1,
      title: "Zakat Penghasilan",
      category: "Kewajiban",
      image: "/images/zakat-penghasilan.jpg",
      description: "Nisab 83 Gram Emas",
      cta: "Hitung Zakat Disini",
    },
    {
      id: 2,
      title: "Tunaikan Zakat Maal",
      category: "Kewajiban",
      image: "/images/zakat-maal.jpg",
      description: "Nisab 83 Gram Emas",
      cta: "Tunaikan Disini",
    },
    {
      id: 3,
      title: "Tunaikan Kewajiban Fidyah",
      category: "Kewajiban",
      image: "/images/fidyah.jpg",
      description: "Tunaikan Fidyah",
      cta: "Rp30.000/Paket",
    },
    {
      id: 4,
      title: "Sedekah Al-Quran",
      category: "Sedekah",
      image: "/images/sedekah-alquran.jpg",
      description: "Sedekah Al-Quran",
      cta: "Tunaikan Disini",
    },
    {
      id: 5,
      title: "Makanan Berbuka Puasa",
      category: "Ramadan",
      image: "/images/makanan-berbuka.jpg",
      description: "Paket makanan untuk berbuka",
      cta: "Berbagi Disini",
    },
    {
      id: 6,
      title: "Parsel Lebaran untuk Masyarakat Dhuafa",
      category: "Ramadan",
      image: "/images/parsel-lebaran.jpg",
      description: "Paket Bahagia",
      cta: "Berbagi Sekarang",
    },
  ];

  const tabs = [
    {
      key: "Semua",
      title: "Semua",
      description: "Lihat semua campaign Aksi Kebaikan",
    },
    {
      key: "Kewajiban",
      title: "Kewajiban",
      description: "Tunaikan kewajiban Zakat, Fidyah, dan Kafarat",
    },
    {
      key: "Sedekah",
      title: "Sedekah",
      description: "Sedekah untuk Pendidikan kaum Dhuafa",
    },
    {
      key: "Ramadan",
      title: "Ramadan",
      description: "Campaign Khusus Spesial Ramadan",
    },
  ];

  const filteredCampaigns = campaigns.filter(
    (campaign) => activeTab === "Semua" || campaign.category === activeTab
  );

  // Jika hanya ada 1 card, tambahkan dummy card agar tetap 2 kolom

  return (
    <div className="flex w-full px-4 py-6 space-x-6">
      {/* Sidebar */}
      <div className="w-1/4  p-4 rounded-xl  ">
        {/* Tabs */}
        <div className="sticky flex flex-col space-y-4 ">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`p-4 text-left rounded-xl ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <h4 className="text-lg">{tab.title}</h4>
              <p className="text-sm">{tab.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="w-3/4 grid grid-cols-3 gap-6 min-h-[500px]">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="shadow-lg rounded-xl overflow-hidden min-h-[250px] max-h-[350px]"
            >
              <img
                src="https://bazma.org/wp-content/uploads/2025/02/Bazma.png"
                alt={campaign.title}
                className="w-full h-40 object-cover"
              />
              <CardBody className="py-4 border-b-1">
                <p className="text-blue-600 text-sm">{campaign.category}</p>
                <h3 className="text-lg font-bold">{campaign.title}</h3>
              </CardBody>

              <CardFooter className="flex justify-between">
                <div className="flex flex-col">

                <p className="text-gray-600 text-sm">{campaign.description}</p>
                <h3 className="text-red-500 text-lg font-bold ">{campaign.cta}</h3>
                </div>
                <span className="text-blue">
                <IconCirclePlusFilled className="w-[32px] h-[32px]" color="#056BB5" />

                </span>

                
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-2 flex justify-center items-center h-full text-gray-500">
            Tidak ada campaign di kategori ini.
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarTabs;
