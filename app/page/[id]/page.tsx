import { request } from "@/lib/axios";
import PageClient from "./PageClient";

interface PageItem {
  id: number;
}

export async function generateStaticParams() {
  const pages = await request<PageItem[]>({
    url: "/sfcpage/sitegetallsfcpage",
    method: "GET",
  });

  return pages.map((page) => ({
    id: page.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PageClient id={id} />;
}
