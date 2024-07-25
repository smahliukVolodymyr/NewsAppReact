import React from "react";
import "./ArticleItem.css";
function ArticleItem({ articleItem }) {
  const defaultURL = process.env.REACT_APP_NO_IMG_URL;
  const { published_date, title, section, abstract, media, url } = articleItem;
  const image = media[0]?.["media-metadata"]?.[2]?.url || defaultURL;

  return (
    <div className="item-container">
      <div className="item-container-main">
        <b>{section}</b>
        <img src={image} alt="" />
        <p className="publishing-date">{published_date}</p>
        <h2 className="item-container-title">{title}</h2>
        <p>{abstract}</p>
      </div>
      <div className="link-container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button>Read more</button>
        </a>
      </div>
    </div>
  );
}

export default ArticleItem;
