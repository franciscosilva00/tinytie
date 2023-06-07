"use client";

import { Dialog } from "@/components/Dialog";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const Form = () => {
  const { pending } = useFormStatus();

  return (
    <div
      className={pending ? "animate-pulse flex gap-4 mt-8" : "flex gap-4 mt-8"}
    >
      <input
        className="px-4 autofill:bg-transparent w-80 py-2 focus-within:-translate-y-1 transition-transform ease-in-out duration-100 outline-none focus-within:ring ring-emerald-800 placeholder:text-neutral-500 rounded-full bg-neutral-800 text-white"
        name="url"
        autoFocus
        required
        autoComplete="off"
        id="url"
        type="url"
        placeholder="https://example.com/very-long-link-oh-god-123123123"
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
  );
};
