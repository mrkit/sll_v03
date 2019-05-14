import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

//ACTION TYPES
const GET_POSTS = 'GET_POSTS';
const CREATE_POST = 'CREATE_POST';

//ACTION CREATORS
const getPosts = posts => ({ type: GET_POSTS, payload: posts });
const createPost = post => ({ type: CREATE_POST, payload: post });

//THUNK
export const fetchPosts = () => dispatch => (
  axios.get('/api/posts').then(res => res.data)
  .then(posts => dispatch(getPosts(posts)))
  .catch(err => console.log(err.message))
);

export const thunkCreatePost = ({ title, date, author, article }) => dispatch => (
  axios.post('/api/posts', { title, date,  author, article })
  .then(res => res.data)
  .then(post => dispatch(createPost(post)))
  .catch(err => `Axios create post error ${err.message}`)
);

//INITIAL STATE
const initialState = {
  posts: []
}

//REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload ] };
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk, logger));