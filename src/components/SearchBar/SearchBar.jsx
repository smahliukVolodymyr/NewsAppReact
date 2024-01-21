import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
function SearchBar({ updateArticles }) {
  const inputRef = useRef();
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (prompt !== "") {
      const fetchSearch = async () => {
        const articles = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${prompt}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
        );
        const result = convertArticles(articles.data.response.docs);
        handleUpdate(result);
      };
      fetchSearch();
    }
  }, [prompt]);

  const handleUpdate = (data) => {
    updateArticles(data);
  };

  const handleSearchPrompt = () => {
    setPrompt(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPrompt(inputRef.current.value);
    }
  };

  const convertArticles = (articles) => {
    const formatedData = articles.map((article) => convertArticleItem(article));
    return formatedData;
  };

  const convertArticleItem = (article) => {
    const image = article?.multimedia[0]?.url
      ? `https://static01.nyt.com/${article.multimedia[0].url}`
      : undefined;
    const abstract = article.abstract;
    const title = article.headline.main;
    const url = article.web_url;
    const section = article.section_name;
    const published_date = convertDate(article.pub_date);
    const asset_id = article._id;
    const media = [
      {
        "media-metadata": [{ url: image }, { url: image }, { url: image }],
      },
    ];
    return { abstract, title, section, published_date, url, media, asset_id };
  };

  const convertDate = (date) => {
    const formatedDate = new Date(date);
    const year = formatedDate.getFullYear();
    const month = (formatedDate.getMonth() + 1).toString().padStart(2, "0");
    const day = formatedDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
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
