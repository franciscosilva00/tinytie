"use client";

import * as OGSwitch from "@radix-ui/react-switch";

export const Switch = () => (
  <form>
    <div className="flex items-center justify-between">
      <label className="text-white leading-none" htmlFor="clipboard-switch">
        Automatically copy links to clipboard
      </label>
      <OGSwitch.Root
        defaultChecked={localStorage.getItem("clipboard") === "true"}
        onCheckedChange={(e) => {
          localStorage.setItem("clipboard", e.valueOf() ? "true" : "false");
        }}
        className="w-12 h-6 bg-neutral-700 rounded-full relative data-[state=checked]:bg-emerald-500 outline-none outline outline-2 outline-neutral-700 focus-visible:ring ring-emerald-400 cursor-default"
        id="clipboard-switch"
      >
        <OGSwitch.Thumb className="block w-[24px] h-[24px] bg-white rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[24px]" />
      </OGSwitch.Root>
    </div>
  </form>
);
