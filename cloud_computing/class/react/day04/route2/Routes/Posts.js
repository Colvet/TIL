import React from 'react';
import { Link, Route } from 'react-router-dom';

const Post = ({match}) => {
    return(
        <h2> {match.params.title} </h2>
    )
}
const Posts = () => {
    return ( 
        <div>
            <ul>
                <h2>Posts</h2>
                <li><Link to="/posts/java">Java Programming</Link></li>
                <li><Link to="/posts/react">React Programming</Link></li>
                <li><Link to="/posts/js">Javascript Programming</Link></li>
                <li><Link to="/posts/msa">MSA Programming</Link></li>
            </ul>
            <Route path="/posts/:title" component={Post}/>
        </div>

     );
}
 
export default Posts;