"use client";

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-fuill flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* Image */}
      <div>
        <img
          src="/images/cutedog.jpeg"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      {/* FileName */}
      <div>cutedog.jpeg</div>

      <div className="absolute top-4 right-4">
        <IconButton className=" hover:bg-red-400 transition duration-300">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
