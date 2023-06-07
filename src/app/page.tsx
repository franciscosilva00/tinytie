import { Form } from "@/components/Form";
import { generateSlug } from "@/utils/generateSlug";
import kv from "@vercel/kv";
import { redirect } from "next/navigation";

export const runtime = "edge";

const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

async function createLink(formData: FormData) {
  "use server";

  const url = formData.get("url");

  if (!url || url.toString().length < 5 || !isValidUrl(url.toString()))
    throw new Error("invalid url");

  const slug = generateSlug();

  await kv.set(slug, url.toString());

  redirect(`/done/${slug}`);
}

export default async function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <h1 className="font-semibold text-5xl">tinytie</h1>
        <h2 className="text-xl text-neutral-400">
          shorten your links with ease.
        </h2>

        <form className="" action={createLink}>
          <Form />
        </form>
      </div>
    </>
  );
}
