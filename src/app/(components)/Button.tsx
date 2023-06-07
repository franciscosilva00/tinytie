"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="hover:bg-emerald-700 disabled:opacity-50 focus-within:ring ring-emerald-600 rounded-l-full outline-none transition-colors flex-1 h-full px-4"
      type="submit"
      disabled={pending}
    >
      shorten!
    </button>
  );
};
