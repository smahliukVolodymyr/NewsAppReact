import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import convertArticles from "../../dataProcessor";
import { fetchSearch } from "../../api";

function SearchBar({ updateArticles }) {
  const inputRef = useRef();
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (prompt !== "") {
      const fetchData = async () => {
        const articles = await fetchSearch(prompt);
        const result = convertArticles(articles);
        updateArticles(result);
      };
      fetchData();
    }
  }, [prompt, updateArticles]);

  const handleSearchPrompt = () => {
    setPrompt(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPrompt(inputRef.current.value);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="politics,crypto..."
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchPrompt}>Search</button>
    </div>
  );
}

export default SearchBar;
