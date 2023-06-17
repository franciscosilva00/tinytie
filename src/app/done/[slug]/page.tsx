import { ClipboardCopier } from "@/components/ClipboardCopier";
import Link from "next/link";

export const runtime = "edge";

export default async function Done({ params }: { params: { slug: string } }) {
  const formattedLink =
    process.env.NODE_ENV === "production"
      ? `https://tinytie.vercel.app/${params.slug}`
      : `http://localhost:3000/${params.slug}`;

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="font-medium text-3xl">Here&apos;s your tinytied link:</h1>
      <a
        aria-label="Your shortened link"
        className="text-emerald-500 text-xl hover:border-emerald-500 border-transparent border-b transition-all"
        href={formattedLink}
      >
        {formattedLink}
      </a>

      <ClipboardCopier text={formattedLink} />

      <Link
        className="flex gap-2 items-center text-neutral-400 hover:text-neutral-300 transition-colors mt-8"
        href="/"
      >
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        shorten another link
      </Link>
    </main>
  );
}
