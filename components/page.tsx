"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { request } from "@/lib/axios";

interface PageItem {
  id: number;
  title: string;
  description: string;
  crated_at: string;
  favorite: boolean;
  img_: {
    url: string;
  } | null;
}

export default function PagesSection() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const data = await request<PageItem[]>({
          url: "/sfcpage/sitegetallsfcpage",
          method: "GET",
        });

        const filtered = data
          .filter((item) => item.favorite)
          .sort(
            (a, b) =>
              new Date(b.crated_at).getTime() - new Date(a.crated_at).getTime()
          )
          .slice(0, 4);

        setPages(filtered);
      } catch (error) {
        console.error("Pages fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Sahifalar</h2>

          <Link
            href="/page"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            Barchasini ko‘rish
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center text-gray-500">Yuklanmoqda...</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative h-44 bg-gray-200">
                  {item.img_ ? (
                    <Image
                      src={`https://tstu.uz/api${item.img_.url}`}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <FileText className="w-10 h-10 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>

                  <Link
                    href={`/page/${item.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  >
                    Batafsil
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
