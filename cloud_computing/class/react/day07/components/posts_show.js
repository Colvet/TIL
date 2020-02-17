import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  // http://127.0.0.1:8800 -> 목록보기
  // 아이템 선택
  // http://127.0.0.1:8800/posts/12 -> 상세보기

  componentDidMount(){
    // 현재페이지에 관한 데이터 match
    if (!this.props.post){
      // console.log(this.props.match.params);
      // const id = this.props.match.parmas.id;
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  onDeleteClick(){
    const { id }= this.props.match.params;
    this.props.deletePost(id, ()=> {
      this.props.history.push('/');
    })
  }
  render() {
    const {post}= this.props;
    // console.log(this.props);
    if(!post){
      return <div>Loading......</div>  
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button className="btn btn-danger pull-xs-right" 
        onClick={this.onDeleteClick.bind(this)}> Delete Post </button>
        <h3> {post.title} </h3>
        <h3> Category: {post.category} </h3>
        <h3> {post.contents} </h3>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  // return{ post: state.posts.blog};
  return{ post: state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);