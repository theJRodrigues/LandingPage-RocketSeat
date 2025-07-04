"use client";
import { CircleX, Search } from "lucide-react";
import { useRouter } from "next/router";
import * as React from "react";

const SearchInput = () => {
  const router = useRouter();
  const query = router.query.q ?? "";

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const handleClear = () => {
    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <label className="group flex gap-[12px] items-center px-1.5 py-1 border focus-within:border-blue-330 border-gray-400 rounded-lg font-body transition-colors">
      <Search
        size={16}
        className={`${query ? "text-blue-200" : "text-gray-300 "} shrink-0 transition-colors group-focus-within:text-blue-200`}
      />
      <input
        type="text"
        placeholder="Buscar"
        className=" placeholder:text-gray-300 w-full outline-none text-white text-body-sm "
        onChange={handleSearch}
        value={query}
      />
      {query && (
        <button className={"w-fit cursor-pointer"} onClick={handleClear}>
          <CircleX size={16} className="text-gray-300 hover:text-blue-200 transition-colors" />
        </button>
      )}
    </label>
  );
};

export default SearchInput;
