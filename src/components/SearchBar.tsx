import type React from "react";

interface SearchBarProps {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  inStock: boolean;
  toggleInStock: () => void;
}

function SearchBar({
  searchParam,
  setSearchParam,
  inStock,
  toggleInStock,
}: SearchBarProps) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="serach.."
        />
      </div>
      <label>
        <input type="checkbox" checked={inStock} onChange={toggleInStock} />
        {"  "}Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
