"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="!w-8 !h-auto"
        src="/images/dropbox_icon.png"
        alt="Dropbox Logo"
        width={50}
        height={30}
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  );
}
