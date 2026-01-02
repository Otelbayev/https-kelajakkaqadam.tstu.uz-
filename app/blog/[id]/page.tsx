"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { request } from "@/lib/axios";
import { Calendar, ArrowLeft, Tag, FileText } from "lucide-react";
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
  img_: {
    url: string;
  } | null;
  blog_category_: {
    id: number;
    title: string;
  };
}

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await request<BlogDetail>({
          url: `/sfcblog/sitegetbyidblog/${id}`,
          method: "GET",
        });
        setData(res);
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
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
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto px-4 py-10"
    >
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <ArrowLeft size={18} />
        Bloglar
      </Link>

      {/* Image */}
      <div className="relative h-95 rounded-2xl overflow-hidden shadow-lg mb-8">
        {data.img_ ? (
          <Image
            src={`https://tstu.uz/api${data.img_.url}`}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      {/* Category */}
      {data.blog_category_ && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm font-medium"
        >
          <Tag size={16} />
          {data.blog_category_.title}
        </motion.div>
      )}

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {data.title}
      </motion.h1>

      {/* Dates */}
      {(data.event_date || data.event_end_date) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 text-sm text-gray-500 mb-6"
        >
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {data.event_date &&
              new Date(data.event_date).toLocaleDateString("uz-UZ")}
            {data.event_end_date &&
              ` - ${new Date(data.event_end_date).toLocaleDateString("uz-UZ")}`}
          </span>
        </motion.div>
      )}

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-700 mb-8 text-lg"
      >
        {data.description}
      </motion.p>

      {/* HTML Content */}
      {data.text && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="prose max-w-none prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </motion.article>
  );
};

export default BlogPage;
