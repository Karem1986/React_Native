export const FETCH_ARTICLES = 'FETCH_ARTICLES'
import axios from "axios";

export function displayArticles(articles) {
  return {
    type: "FETCH_ARTICLES",
    payload: articles
  }
}

//Following the getTableswithReservation example
export async function fetchArticles(dispatch, getState) {
  
      const response = await axios.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0d97d0fa44394ed0a197fb149dd40002')
      const result = response.data
     
  
  dispatch(displayArticles(result))
  
};

//Dispatch the action in the component: Extra page 