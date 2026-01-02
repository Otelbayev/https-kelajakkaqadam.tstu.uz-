"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Facebook, Youtube, Instagram, Globe } from "lucide-react";

const socials = [
  {
    icon: Send,
    href: "https://t.me/nbu_kelajakkaqadam",
    label: "Telegram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/nbukelajakkaqadam#",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@KelajakkaQadamMarkazi",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nbu_kelajakkaqadam/",
    label: "Instagram",
  },
  {
    icon: Globe,
    href: "https://nbu.uz/kichik-biznes/kreditlar/yangi-kelajakka-qadam-kreditlari",
    label: "Website",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl font-semibold text-white">Kelajakka Qadam</h2>

          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Kelajakka Qadam. Barcha huquqlar
          himoyalangan.
        </div>
      </div>
    </footer>
  );
}
