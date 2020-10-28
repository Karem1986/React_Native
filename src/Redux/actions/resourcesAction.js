export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

//Register, login success and failure:
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
const BASE_URL = 'http://192.168.2.12:4002'

export const registerUser = (authData) => {
    const { name, email, password} = authData;

    return async dispatch => {
    // logic to make a post request to register the user 

      const result = await fetch(`${BASE_URL}/signup`,  {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password

            })
        })

        const resultData = result.json()
        console.log(resultData)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: 1
        })
    }
}
export const loginUser = (authData) => {
    const { email, password} = authData;

    return async dispatch => {

        // logic to make a post request to login the user 
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: 1
        })
    }
}

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