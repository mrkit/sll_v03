import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

//ACTION TYPES
const GET_POSTS = 'GET_POSTS';
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

//ACTION CREATORS
const getPosts = posts => ({ type: GET_POSTS, payload: posts });
const createPost = post => ({ type: CREATE_POST, payload: post });
const deletePost = id => ({ type: DELETE_POST, payload: id })

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

export const thunkDeletePost = id => dispatch => (
  axios.delete(`/api/posts/${id}`)
    .then(res => res.data)
    .then(id => dispatch(deletePost(id)))
    .catch(err => console.log(`Axios delete error ${err.message}`))
)

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
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload)};
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk, logger));