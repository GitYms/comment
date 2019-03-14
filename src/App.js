import React, { Component } from 'react';
import CommentInput from './Comment/CommentInput';
import CommentList from './Comment/CommentList';
import './App.css';

class App extends Component {
  constructor () {
    super()
    const comments = localStorage.getItem('comments');
    this.state = {
      comments: JSON.parse(comments) || []
    }
  }

  onStore = comment => {
    if(!comment) return '';
    const { comments } = this.state;
    comments.push(comment);
    this.setState({comments})
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  onDelete = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({ comments })
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <CommentInput onStore={this.onStore} />
        <CommentList onDelete={this.onDelete.bind(this)} comments={comments}/>
      </div>
    );
  }
}

export default App;
