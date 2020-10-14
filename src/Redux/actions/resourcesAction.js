export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
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

export const toggleFavorites = url => {
 return {
   type: TOGGLE_FAVORITES,
   paylodad: url
 }
}


//Dispatch the action in the component: Extra page 