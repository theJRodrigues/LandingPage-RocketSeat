"use client";
import { CircleX, Search } from "lucide-react";
import * as React from "react";

interface SearchInputProps {
  state: string;
  setState: (value: string) => void;
}
const SearchInput = ({ state, setState }: SearchInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleClear = () => {
    setState("");
  };

  return (
    <label className="group flex gap-[12px] items-center px-1.5 py-1 border focus-within:border-blue-330 border-gray-400 rounded-lg font-body transition-colors">
      <Search
        size={16}
        className={`${state ? "text-blue-200" : "text-gray-300 "} shrink-0 transition-colors group-focus-within:text-blue-200`}
      />
      <input
        type="text"
        placeholder="Buscar"
        className=" placeholder:text-gray-300 w-full outline-none text-white text-body-sm "
        onChange={onChange}
        value={state}
      />
      <button className={`${state ? "block" : "hidden"} w-fit cursor-pointer`} onClick={handleClear}>
        <CircleX size={16} className="text-gray-300 hover:text-blue-200 transition-colors" />
      </button>
    </label>
  );
};

export default SearchInput;
