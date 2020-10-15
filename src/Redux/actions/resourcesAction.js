export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        // logic to fetch data
        const result = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0d97d0fa44394ed0a197fb149dd40002');

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}

export const toggleFavorites = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}


//Dispatch the action in the component where we render all articles (ExtraPage)
//API KEY: 0d97d0fa44394ed0a197fb149dd40002