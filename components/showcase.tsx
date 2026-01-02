"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle, GraduationCap, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212] text-white">
      {/* Orqa fon rasmi va qatlamlar */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.webp"
          alt="Education background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Universitet va Bank Hamkorlari (Top Bar) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-80"
        >
          <div className="flex items-center gap-2 group cursor-help">
            <GraduationCap className="text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium tracking-wide">
              TOSHKENT DAVLAT TRANSPORT UNIVERSITETI
            </span>
          </div>
          <div className="h-4 w-px bg-gray-600 hidden md:block" />
          <div className="flex items-center gap-2 group cursor-help">
            <Building2 className="text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium tracking-wide">
              NBU BANK HAMKORLIGIDA
            </span>
          </div>
        </motion.div>

        {/* Asosiy Sarlavhalar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Kelajakka Qadam Markazi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto">
            TOSHKENT DAVLAT{" "}
            <span className="text-blue-400 font-semibold">TRANSPORT</span>{" "}
            UNIVERSITETI
          </p>
        </motion.div>

        {/* Tugmalar va Interaktivlik */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#video">
            <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 group">
              <PlayCircle
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />
              Video qo'llanmalarni ko'rish
            </button>
          </Link>

          <Link href="#about">
            <button className="flex items-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full font-semibold transition-all">
              Batafsil ma'lumot
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>

        {/* Pastki qismdagi dekorativ element (Tanga va Shapka o'rniga vizual ramz) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-sm">
            <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
