import { ADD_POST, ADD_POSTS, DELETE_POST, EDIT_POST, VOTE_UP, VOTE_DOWN } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case EDIT_POST:
      return {
        data: state.data.map(post => (
          post.cuid !== action.cuid
            ? post
            : {
              ...post,
              ...action.post }
        )),
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case VOTE_UP:
      return {
        data: state.data.map(post => (
              post.cuid !== action.post.cuid
                ? post
                : {
                  ...post,
                  votes: post.votes + 1,
                }
            )),
      };

    case VOTE_DOWN:
      return {
        data: state.data.map(post => (
              post.cuid !== action.post.cuid
                ? post
                : {
                  ...post,
                  votes: post.votes - 1,
                }
            )),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
