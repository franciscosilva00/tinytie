"use client";

import * as OGDialog from "@radix-ui/react-dialog";
import { Switch } from "./Switch";

export const Dialog = () => (
  <OGDialog.Root>
    <OGDialog.Trigger asChild>
      <button
        type="button"
        className="hover:bg-emerald-800 bg-emerald-900 focus-within:ring ring-emerald-600 rounded-r-full outline-none transition-colors flex-1 h-full px-4 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M20 7h-9"></path>
          <path d="M14 17H5"></path>
          <circle cx="17" cy="17" r="3"></circle>
          <circle cx="7" cy="7" r="3"></circle>
        </svg>
      </button>
    </OGDialog.Trigger>

    <OGDialog.Portal>
      <OGDialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur"></OGDialog.Overlay>
      <OGDialog.Content className="bg-neutral-900 rounded-2xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] max-h-[85vh] p-6">
        <div className="flex justify-between">
          <OGDialog.Title className="text-2xl font-medium text-neutral-100">
            Settings
          </OGDialog.Title>
          <OGDialog.Close className="hover:opacity-60 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 "
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </OGDialog.Close>
        </div>

        <div className="mt-6">
          <div className="mt-2">
            <Switch />
          </div>
        </div>
      </OGDialog.Content>
    </OGDialog.Portal>
  </OGDialog.Root>
);
