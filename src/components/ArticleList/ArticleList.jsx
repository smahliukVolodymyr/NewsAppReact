import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import "./ArticleList.css";

function ArticleList({ articles }) {
  return (
    <div className="articles-container">
      <div className="items">
        {articles &&
          articles.map((item) => (
            <ArticleItem articleItem={item} key={item.asset_id} />
          ))}
      </div>
    </div>
  );
}

export default ArticleList;
