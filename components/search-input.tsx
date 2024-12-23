import { Input } from "@material-tailwind/react";

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      label="Search Images"
      placeholder="Search TODO"
      icon={<i className="fas fa-search" />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
