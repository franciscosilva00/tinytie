"use client";

type ClipboardCopierProps = {
  text: string;
};

export const ClipboardCopier = ({ text }: ClipboardCopierProps) => {
  const isClipboardEnabled = localStorage.getItem("clipboard") === "true";

  if (!isClipboardEnabled) return null;

  const copy = () => {
    navigator.clipboard.writeText(text);
  };

  copy();

  return null;
};
