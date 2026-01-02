import { request } from "@/lib/axios";

export default async function Head({ params }: { params: { id: string } }) {
  try {
    const data = await request<any>({
      url: `/sfcblog/sitegetbyidblog/${params.id}`,
      method: "GET",
    });

    return (
      <>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        {data.img_ && (
          <meta
            property="og:image"
            content={`https://tstu.uz/api${data.img_.url}`}
          />
        )}
      </>
    );
  } catch (error) {
    console.error("Blog metadata error:", error);
    return (
      <>
        <title>Blog</title>
        <meta name="description" content="Kelajakka Qadam Blog sahifasi" />
      </>
    );
  }
}
