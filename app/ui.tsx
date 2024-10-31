"use client";

import DropboxImageList from "components/dropbox-image-list";
import FileDragDrop from "components/file-dragdrop";
import Logo from "components/logo";
import SearchComponent from "components/search-input";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      {/* Logo */}
      <Logo />

      {/* Search Input */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {/* File Drag & Drop Zone */}
      <FileDragDrop />

      {/* Dropbox Image List */}
      <DropboxImageList />
    </main>
  );
}
