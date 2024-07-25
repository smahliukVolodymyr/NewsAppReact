import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { fetchArticles } from "./api";
function App() {
  const [seachDays, setSearchDays] = useState(1);
  const [popularity, setPopularity] = useState("viewed");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchArticles(popularity, seachDays);
      setArticles(response);
    };
    fetchData();
  }, [seachDays, popularity]);

  return (
    <div>
      <Navbar setSearchDays={setSearchDays} setPopularity={setPopularity} />
      <SearchBar updateArticles={setArticles} />
      <ArticleList articles={articles} />
      <Footer />
    </div>
  );
}

export default App;
