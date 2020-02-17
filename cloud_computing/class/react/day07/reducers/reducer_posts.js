import { FETCH_POSTS, CREATE_POSTS, DELETE_POST, FETCH_POST } from "../actions";
import _ from 'lodash';

export default function(state={}, action){
    switch(action.type){
        case FETCH_POSTS:
            // console.log(action.payload.data.blogs);
            // return action.payload.data.blogs;
            return _.mapKeys(action.payload.data.blogs, 'id');
        case FETCH_POST:
            return{
                ...state,
                [action.payload.data.blog.id]: action.payload.data.blogs
                }
        default:
            return state;
    }
}