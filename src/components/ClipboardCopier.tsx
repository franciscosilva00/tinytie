"use client";

type ClipboardCopierProps = {
  text: string;
};

export const ClipboardCopier = ({ text }: ClipboardCopierProps) => {
  const isClipboardEnabled = localStorage.getItem("clipboard") === "true";

  if (!isClipboardEnabled) return null;

  navigator.clipboard.writeText(text);

  return null;
};
