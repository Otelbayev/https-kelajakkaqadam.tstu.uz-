import BlogClient from "./BlogClient";
import { request } from "@/lib/axios";

interface BlogListResponse {
  length: number;
  list: {
    id: number;
  }[];
}

export async function generateStaticParams() {
  const res = await request<BlogListResponse>({
    url: "/sfcblog/sitegetallblog",
    method: "GET",
  });

  return res.list.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <BlogClient id={id} />;
}
