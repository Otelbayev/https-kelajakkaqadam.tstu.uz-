"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileSearch,
  BadgeCheck,
  Wallet,
  LineChart,
} from "lucide-react";

const steps1 = [
  {
    id: 1,
    title: "Ariza topshirish",
    description:
      "Kerakli hujjatlar bilan 'Kelajakka qadam' markaziga murojaat qilishingiz mumkin.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Hujjatlarni ko‘rib chiqish",
    description:
      "Mutaxassislar tomonidan hujjatlar tekshiriladi va baholanadi.",
    icon: <FileSearch className="w-8 h-8" />,
    color: "bg-indigo-500",
  },
  {
    id: 3,
    title: "Tasdiqlash",
    description:
      "Loyiha yoki o‘quv dasturi moliyalashtirishga loyiq deb topiladi.",
    icon: <BadgeCheck className="w-8 h-8" />,
    color: "bg-teal-500",
  },
];
const steps2 = [
  {
    id: 4,
    title: "Kredit ajratilishi",
    description: "Bank orqali mablag‘ o‘tkaziladi va sizga xabar beriladi.",
    icon: <Wallet className="w-8 h-8" />,
    color: "bg-emerald-500",
  },
  {
    id: 5,
    title: "Monitoring",
    description:
      "Loyihaning bajarilishi va mablag‘dan foydalanish nazorati olib boriladi.",
    icon: <LineChart className="w-8 h-8" />,
    color: "bg-sky-500",
  },
];

export default function CreditSteps() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kredit olish tartibi
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps1.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10">
                {step.id}
              </div>

              {/* Icon Container */}
              <div
                className={`mb-6 p-4 rounded-2xl ${step.color} text-white transition-transform group-hover:rotate-12`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-blue-400 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl mx-auto">
          {steps2.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10">
                {step.id}
              </div>

              {/* Icon Container */}
              <div
                className={`mb-6 p-4 rounded-2xl ${step.color} text-white transition-transform group-hover:rotate-12`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-blue-400 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
