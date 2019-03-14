import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  onDelete = (index) => {
    if(this.props.onDelete) {
      this.props.onDelete(index)
    }
  }
  render() {
    const { comments } = this.props

    return (
      <div>
        {comments && comments.map((comment,index) =>
          <Comment onDelete={this.onDelete.bind(this)} comment={comment} key={index} />
        )}
      </div>
    );
  }
}

export default CommentList;
