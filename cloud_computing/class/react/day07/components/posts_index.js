import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  // define a lifecycle function for retrieve data  
  componentDidMount(){
    this.props.fetchPosts();
  }

  rednerPosts(){
    return _.map(this.props.posts, post=> {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/blogs/${post.id}`}>{post.title} </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/blogs/new" className="btn btn-primary" > Add a Post </Link>

        </div>
        <h1> Posts</h1>
        <ul className="list-group">
          {this.rednerPosts()}
        </ul>
      </div>
    );
  }
}
// connect(null, 액션관리 함수)(연결 컴포넌트)
function mapStateToProps(state) {
  return { posts: state.posts}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }

// 3개는 똑같음
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
// export default connect(mapStateToProps, { fetchPosts : fetchPosts})(PostsIndex);
// ES6 -> { name : name} => {name} ES6에서 이름이 똑같을 경우 지원이 됨
// export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
