import { Form } from "@/components/Form";
import { generateSlug } from "@/utils/generateSlug";
import { isValidUrl } from "@/utils/isValidUrl";
import kv from "@vercel/kv";
import { redirect } from "next/navigation";

export const runtime = "edge";

async function createLink(formData: FormData) {
  "use server";

  const url = formData.get("url");

  if (!url || !isValidUrl(url.toString()))
    throw new Error("You've inserted an invalid URL.");

  const slug = generateSlug();

  await kv.set(slug, url.toString());

  redirect(`/done/${slug}`);
}

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="font-semibold text-5xl">tinytie</h1>
      <h2 className="text-xl text-neutral-400">
        shorten your links with ease.
      </h2>

      <form className="" action={createLink}>
        <Form />
      </form>
    </div>
  );
}
