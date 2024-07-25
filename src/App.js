import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
function App() {
  const [seachDays, setSearchDays] = useState(1);
  const [popularity, setPopularity] = useState("viewed");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/${popularity}/${seachDays}.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
      );
      setArticles(articles.data.results);
    };
    fetchArticles();
  }, [seachDays, popularity]);

  const updateArticles = (articles) => {
    setArticles(articles);
  };
  return (
    <div>
      <Navbar setSearchDays={setSearchDays} setPopularity={setPopularity} />
      <SearchBar updateArticles={updateArticles} />
      <ArticleList article={articles} />
      <Footer />
    </div>
  );
}

export default App;
