import { Dialog } from "@/components/Dialog";
import { generateSlug } from "@/utils/generateSlug";
import kv from "@vercel/kv";
import { redirect } from "next/navigation";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const runtime = "edge";

const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

const createLink = async (formData: FormData) => {
  "use server";

  const url = formData.get("url");

  if (!url || url.toString().length < 5 || !isValidUrl(url.toString()))
    throw new Error("invalid url");

  const slug = generateSlug();

  await kv.set(slug, url.toString());

  redirect(`/done/${slug}`);
};

export default async function Home() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <h1 className="font-semibold text-5xl">tinytie</h1>
        <h2 className="text-xl text-neutral-400">
          shorten your links with ease.
        </h2>

        <form className="flex gap-4 mt-8" action={createLink}>
          <input
            className="px-4 autofill:bg-transparent w-80 py-2 focus-within:-translate-y-1 transition-transform ease-in-out duration-100 outline-none focus-within:ring ring-emerald-800 placeholder:text-neutral-500 rounded-full bg-neutral-800 text-white"
            name="url"
            autoFocus
            required
            autoComplete="off"
            id="url"
            type="url"
            disabled={pending}
            placeholder="https://example.com/very-long-link-oh-god-123123123"
          />
          <div className="cursor-pointer items-center group will-change-transform flex rounded-full duration-100 bg-emerald-800 text-white font-semibold  transition-all hover:-translate-y-1">
            <button
              className="hover:bg-emerald-700 disabled:opacity-50 focus-within:ring ring-emerald-600 rounded-l-full outline-none transition-colors flex-1 h-full px-4"
              type="submit"
              disabled={pending}
            >
              shorten!
            </button>
            <div className="h-full w-px bg-emerald-700 group-hover:bg-emerald-600"></div>
            <Dialog />
          </div>
        </form>
      </div>
    </>
  );
}
