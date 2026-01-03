"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { request } from "@/lib/axios";
import { Calendar, Star, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "@/components/loading";

interface PageDetail {
  id: number;
  title: string;
  title_short: string;
  description: string;
  text: string | null;
  crated_at: string;
  position: number;
  favorite: boolean;
  img_: { url: string } | null;
}

export default function PageClient({ id }: { id: string }) {
  const [data, setData] = useState<PageDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await request<PageDetail>({
          url: `/sfcpage/sitegetbyidsfcpage/${id}`,
          method: "GET",
        });
        setData(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  if (loading) return <Loading />;
  if (!data) return <div className="mt-15 py-10 text-center">Topilmadi</div>;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-4 py-10 mt-15"
    >
      <Link href="/page" className="flex items-center gap-2 mb-6 text-blue-600">
        <ArrowLeft size={18} /> Sahifalar
      </Link>

      <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100 mb-8">
        {data.img_ ? (
          <Image
            src={`https://tstu.uz/api${data.img_.url}`}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <FileText className="w-12 h-12 text-gray-400 mx-auto mt-20" />
        )}
      </div>

      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <div className="flex gap-6 text-sm text-gray-500 mb-6">
        <span className="flex items-center gap-2">
          <Calendar size={16} />
          {new Date(data.crated_at).toLocaleDateString("uz-UZ")}
        </span>

        {data.favorite && (
          <span className="flex items-center gap-2 text-yellow-500">
            <Star size={16} /> Tavsiya
          </span>
        )}
      </div>

      <p className="text-gray-700 mb-8">{data.description}</p>

      {data.text && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </motion.article>
  );
}
