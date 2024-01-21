import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import "./Article.css";
function Article({ article }) {
  return (
    <div className="articles-container">
      <div className="items">
        {article &&
          article.map((item) => (
            <ArticleItem articleItem={item} key={item.asset_id} />
          ))}
      </div>
    </div>
  );
}

export default Article;
