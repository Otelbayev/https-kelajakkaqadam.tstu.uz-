"use client";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { request } from "@/lib/axios";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "@/components/loading";

interface PageItem {
  id: number;
  title: string;
  description: string;
  crated_at: string;
  favorite: boolean;
  position: number;
  img_: {
    url: string;
  } | null;
}

const Page = () => {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const data = await request<PageItem[]>({
          url: "/sfcpage/sitegetallsfcpage",
          method: "GET",
        });

        const sorted = data.sort(
          (a, b) => (a.position ?? 0) - (b.position ?? 0)
        );

        setPages(sorted);
      } catch (error) {
        console.error("Pages fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 mt-15">
      <h1 className="text-3xl font-bold mb-10">Barcha sahifalar</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 bg-gray-100">
              {item.img_ ? (
                <Image
                  src={`https://tstu.uz/api${item.img_.url}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FileText className="w-10 h-10 text-gray-400" />
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold line-clamp-1">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
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
    </section>
  );
};

export default Page;
