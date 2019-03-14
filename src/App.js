import React, { Component } from 'react';
import CommentInput from './Comment/CommentInput';
import CommentList from './Comment/CommentList';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  onStore = comments => {
    const list = [];
    list.push(comments)
    localStorage.setItem('comments', JSON.stringify(list))
    this.setState({comments:list})
  }

  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <CommentInput onStore={this.onStore} />
        <CommentList comments={comments}/>
      </div>
    );
  }
}

export default App;
