"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { request } from "@/lib/axios";
import { Star, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Loading from "@/components/loading";

interface BlogItem {
  id: number;
  title: string;
  description: string;
  created_at: string;
  favorite: boolean;
  img_: {
    url: string;
  } | null;
  blog_category_: {
    id: number;
    title: string;
  };
}

interface BlogAPIResponse {
  length: number;
  list: BlogItem[];
  language_code: string;
}

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await request<BlogAPIResponse>({
          url: "/sfcblog/sitegetallblog",
          method: "GET",
        });

        const filtered = data.list
          .filter((b) => b.favorite)
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 4);

        setBlogs(filtered);
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">Bloglar</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-100">
              {blog.img_ ? (
                <Image
                  src={`https://tstu.uz/api${blog.img_.url}`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FileText className="w-10 h-10 text-gray-400" />
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Category */}
              {blog.blog_category_ && (
                <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium mb-2">
                  {blog.blog_category_.title}
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold line-clamp-2">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {blog.description}
              </p>

              {/* Favorite */}
              {blog.favorite && (
                <div className="mt-4 flex items-center gap-2 text-yellow-500">
                  <Star size={16} />
                  Tavsiya etilgan
                </div>
              )}

              {/* Read more */}
              <Link
                href={`/blog/${blog.id}`}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Batafsil o'qish
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogListPage;
