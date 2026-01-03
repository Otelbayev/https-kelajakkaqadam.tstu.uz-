"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { request } from "@/lib/axios";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "@/components/loading";

interface BlogDetail {
  id: number;
  title: string;
  description: string;
  text: string | null;
  created_at: string;
  event_date: string | null;
  event_end_date: string | null;
  favorite: boolean;
  position: number;
  img_: { url: string } | null;
  blog_category_: { id: number; title: string };
}

export default function BlogClient({ id }: { id: string }) {
  const [data, setData] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await request<BlogDetail>({
          url: `/sfcblog/sitegetbyidblog/${id}`,
          method: "GET",
        });
        setData(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loading />;
  if (!data) return <div className="text-center py-10">Topilmadi</div>;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-10 mt-15"
    >
      <Link href="/blog" className="flex gap-2 mb-6 text-blue-600">
        <ArrowLeft size={18} /> Bloglar
      </Link>

      <div className="relative h-96 rounded-xl overflow-hidden mb-6">
        {data.img_ ? (
          <Image
            src={`https://tstu.uz/api${data.img_.url}`}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <FileText className="w-10 h-10 text-gray-400 mx-auto mt-20" />
        )}
      </div>

      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-6">{data.description}</p>

      {data.text && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </motion.article>
  );
}
