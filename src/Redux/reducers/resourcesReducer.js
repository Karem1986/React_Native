import { FETCH_ARTICLES, TOGGLE_FAVORITES, REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../actions/resourcesAction";

const initialState = {
  articles: [],
  favorites: [],
  user: {},
  errors: {}
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:

      return {
        ...state,
        articles: action.payload  
      }
    case TOGGLE_FAVORITES:
            // Add or remove item from favorites
            const index = state.favorites.findIndex(article => article.url === action.payload);

            if(index >= 0) {
                // item exist in favorites
                const favorites = [...state.favorites];
                favorites.splice(index, 1);
                return {
                    ...state,
                    favorites
                }
            } else {
                // item does not in favorites
                const article = state.articles.articles.find(article => article.url === action.payload);
                return {
                    ...state,
                    favorites: state.favorites.concat(article)
                }
            }
            //REGISTER AND LOGIN CASES 
        case REGISTER_USER_SUCCESS:
              return {
                ...state,
                user: action.payload
              }
        case LOGIN_USER_SUCCESS:
                return {
                  ...state,
                  user: action.payload
                }

  }
  return state
}
