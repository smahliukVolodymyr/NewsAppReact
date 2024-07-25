import axios from "axios";

export async function fetchArticles(popularity, seachDays) {
  const articles = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/${popularity}/${seachDays}.json?api-key=${process.env.REACT_APP_API_KEY}`
  );

  return articles.data.results;
}

export async function fetchSearch(prompt) {
  const articles = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${prompt}&api-key=${process.env.REACT_APP_API_KEY}`
  );

  return articles.data.response.docs;
}
