import React, { Component } from 'react';


class Comment extends Component {
  render() {
    const {comment} = this.props
    return (
      <div>
        {comment.name} : {comment.comment}
      </div>
    );
  }
}

export default Comment;
