export default function convertArticles(articles) {
  const formatedData = articles.map((article) => convertArticleItem(article));
  return formatedData;
}

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
