import React, { Component } from 'react';


class Comment extends Component {
  constructor () {
    super()
    this.state = {timeInfo: ''}
  }
  componentWillMount () {
    this.updateTime()
    const timer = setInterval(
      this.updateTime.bind(this),
      5000
    )
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  updateTime = () => {
    const {comment} = this.props
    const duration = (+Date.now() - comment.time) / 1000
    this.setState({
      timeInfo: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  onDelete = () => {
    if(this.props.onDelete) {
      this.props.onDelete(this.props.index)
    }
  }
  getContent = comment => {
    return comment.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;").replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  render() {
    const {timeInfo} = this.state
    const {comment} = this.props
    return (
      <div style={{padding:"25px",border:"1px solid #000"}}>
        {comment.name} :
        <p dangerouslySetInnerHTML={{__html: this.getContent(comment.comment)}}></p>
        <span>{timeInfo}</span>
        <button onClick={this.onDelete}>删除</button>
      </div>
    );
  }
}

export default Comment;
