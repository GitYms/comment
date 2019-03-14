import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    return (
      <div>
        {comments && comments.map((comment,index) =>
          <Comment comment={comment} key={index} />
        )}
      </div>
    );
  }
}

export default CommentList;
