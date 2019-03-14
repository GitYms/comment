import React, { Component } from 'react';


class CommentInput extends Component {
  state = {
    name: localStorage.getItem('user') || '',
    comment: "",
  }

  componentDidMount() {
    this.textarea.focus()
  }

  OnStore = () => {
    if(this.props.onStore) {
      this.props.onStore({
        name: this.state.name,
        comment: this.state.comment,
        time: +new Date()

      })
    }
    localStorage.setItem('user', this.state.name)
    this.setState({comment: ""})
  }

  OnName = e => {
    this.setState({
      name: e.target.value
    })
    localStorage.setItem('user', e.target.name)
  }

  OnComment = e => {
    this.setState({
      comment: e.target.value
    })
  }
  onfocus = () => {
    this.textarea.focus();
  }
  render() {
    const {comment,name} = this.state
    return (
      <div>
        <div>用户名：<input onBlur={this.onfocus} onChange={this.OnName} value={name}></input></div>
        <div>评论内容：<textarea ref={(textarea)=> this.textarea = textarea} onChange={this.OnComment} value={comment}></textarea></div>
        <button onClick={this.OnStore}>发布</button>
      </div>
    );
  }
}

export default CommentInput;
