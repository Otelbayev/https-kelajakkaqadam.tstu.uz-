"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Kelajakka qadam",
    desc: "Kelajakka qadam orqali yoshlarga yaratilayotgan imkoniyatlar, biznes g'oyalarning moliyalashtirilishi va bitiruvchilarning hayotidagi batafsil lavhalar endi videoda.",
    embedUrl: "https://www.youtube.com/embed/YMmKSRfGGfY?si=YsPbgmucnY-d8zqx",
  },
  {
    id: 2,
    title: "Kelajakka qadam | Talaba Expo - 2025",
    desc: "\"Kelajakka Qadam\" dasturi doirasida bitiruvchi yoshlar o'z biznes loyihalarini taqdim etdi. Bu ilhomli daqiqalar O'zbekiston 24 telekanalida yoritildi!",
    embedUrl: "https://www.youtube.com/embed/5oNRk-Olxck?si=PkBb4zAOzhWTw7Za",
  },
  {
    id: 3,
    title: "Kelajakka qadam",
    desc: "Kelajakka qadam orqali yoshlarga yaratilayotgan imkoniyatlar, biznes g'oyalarning moliyalashtirilishi va bitiruvchilarning hayotidagi batafsil lavhalar endi videoda.",
    embedUrl: "https://www.youtube.com/embed/YMmKSRfGGfY?si=gM7xr_epQcy9N08m",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50" id="video">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sarlavha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video qo‘llanmalar
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Video Kartochkalar */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black border-l-4 border-blue-600">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Matn qismi */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {video.desc}
                </p>

                {/* Pastki dekorativ element */}
                <div className="mt-auto pt-4 flex items-center text-blue-600 font-medium text-sm">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Tomosha qilish
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
