"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  img_: {
    url: string;
  } | null;
}

const PageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PageDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPage = async () => {
      try {
        const res = await request<PageDetail>({
          url: `/sfcpage/sitegetbyidsfcpage/${id}`,
          method: "GET",
        });
        setData(res);
      } catch (error) {
        console.error("Page detail error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="py-10 text-center text-red-500">Maʼlumot topilmadi</div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 py-10"
    >
      {/* Back */}
      <Link
        href="/page"
        className="inline-flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <ArrowLeft size={18} />
        Sahifalarga qaytish
      </Link>

      {/* Image */}
      <div className="relative h-95 rounded-2xl overflow-hidden bg-gray-100 mb-8">
        {data.img_ ? (
          <Image
            src={`https://tstu.uz/api${data.img_.url}`}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {data.title}
      </motion.h1>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6"
      >
        <span className="flex items-center gap-2">
          <Calendar size={16} />
          {new Date(data.crated_at).toLocaleDateString("uz-UZ")}
        </span>

        {data.favorite && (
          <span className="flex items-center gap-2 text-yellow-500">
            <Star size={16} />
            Tavsiya etilgan
          </span>
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 mb-8 text-lg"
      >
        {data.description}
      </motion.p>

      {/* HTML content from Summernote */}
      {data.text && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose max-w-none prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </motion.article>
  );
};

export default PageDetail;
