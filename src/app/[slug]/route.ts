import kv from "@vercel/kv";
import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const slug = params.slug;

  const url = await kv.get(slug);

  if (!url) {
    return new Response("Not found", { status: 404 });
  }

  if (typeof url !== "string") {
    return new Response("Invalid", { status: 500 });
  }

  redirect(url);
}
