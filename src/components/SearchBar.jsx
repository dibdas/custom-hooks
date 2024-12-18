import React, { useState } from "react";
import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchBar() {
  const [inputvalue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputvalue, 5000); // 500 milliseconds debounce delay
  useEffect(() => {}, [debouncedValue]);
  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search..."
      />
      debounced value:{debouncedValue}
    </div>
  );
}

export default SearchBar;
