"use client";

import { Dialog } from "@/components/Dialog";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const Form = () => {
  const { pending } = useFormStatus();

  return !pending ? (
    <>
      <div className="flex gap-4 mt-8">
        <input
          className="px-4 autofill:bg-transparent w-80 py-2 focus-within:-translate-y-1 transition-transform ease-in-out duration-100 outline-none focus-within:ring ring-emerald-800 placeholder:text-neutral-500 rounded-full bg-neutral-800 text-white"
          name="url"
          autoFocus
          required
          autoComplete="off"
          id="url"
          type="url"
          placeholder="Your URL here..."
          disabled={pending}
        />
        <div className="cursor-pointer group items-center group will-change-transform flex rounded-full duration-100 bg-emerald-800 text-white font-semibold  transition-all hover:-translate-y-1">
          <button
            className="hover:bg-emerald-700 focus-within:ring ring-emerald-600 rounded-l-full outline-none transition-colors flex-1 h-full px-4"
            type="submit"
            disabled={pending}
          >
            shorten!
          </button>

          <div className="h-full w-px bg-emerald-700 group-hover:bg-emerald-600"></div>

          <Dialog />
        </div>
      </div>
    </>
  ) : (
    <svg
      aria-label="Loading..."
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-5 animate-spin h-5 w-5"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
