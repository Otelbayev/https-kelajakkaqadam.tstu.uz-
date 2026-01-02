"use client";

import { motion } from "framer-motion";
import { Banknote, GraduationCap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Yoshlar uchun imkoniyat",
    desc: "Oliy ta’lim bitiruvchilari uchun maxsus kredit mahsulotlari.",
  },
  {
    icon: Banknote,
    title: "Qulay moliyalashtirish",
    desc: "Past foiz stavkalari va qulay to‘lov shartlari.",
  },
  {
    icon: TrendingUp,
    title: "Kelajak sari qadam",
    desc: "Biznes va kasbiy rivojlanish uchun mustahkam tayanch.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sarlavha qismi - Oldingi stil bilan bir xil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kelajakka Qadam
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            “Kelajakka Qadam” — bu yoshlar va bitiruvchilarni
            qo‘llab-quvvatlash, ularning kelajak rejalari va biznes g‘oyalarini
            amalga oshirishga yordam beruvchi moliyaviy dastur.
          </p>
        </motion.div>

        {/* Kartochkalar - Rasmga moslashtirilgan dizayn */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
              >
                {/* Ikona doirasi - Kredit tartibidagi kabi ko'k rangda */}
                <div className="w-16 h-16 rounded-full bg-[#1e40af] text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>

                {/* Dekorativ chiziq */}
                <div className="mt-6 w-10 h-1 bg-blue-100 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
