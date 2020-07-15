
import axios from 'axios';


const initialState ={
    loading : false,
    articles: []
}

const REQUEST_ARTICLES ='REQUEST_ARTICLES';

export const requestArticles =()=>{
    let articles = axios.get('/api/hacker-news').then(res =>res.data);
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}


export default function (state = initialState, action) {
    return state;
  }