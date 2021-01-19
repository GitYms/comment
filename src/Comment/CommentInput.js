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
      <div className='inputBox'>
        <div className='inputName'>
          <span className='label-span'>用&nbsp;户 &nbsp;名：</span>
          <input
            onBlur={this.onfocus}
            onChange={this.OnName}
            value={name}
            style={{ height: '28px', width: '85%'}}
          />
        </div>
        <div className='inputContent'>
          <span className='label-span'>评论内容：</span>
          <textarea
            ref={(textarea) => this.textarea = textarea}
            onChange={this.OnComment}
            value={comment}
            style={{ width: '85%', height: '40px'}}
          />
        </div>
        <button className='submitBtn' onClick={this.OnStore}>发布</button>
      </div>
    );
  }
}

export default CommentInput;
