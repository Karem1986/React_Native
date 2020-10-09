export const FETCH_ARTICLES = 'FETCH_ARTICLES'


export const fetchArticles = ()=> {
  return {
    type: FETCH_ARTICLES,
    payload: {id: 1, title: "Tech stuff",description: "Best CSS tricks from Kermit"}
  };
};