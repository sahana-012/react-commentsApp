import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
    count: 0,
  }

  nameValue = event => {
    this.setState({name: event.target.value})
  }

  commentValue = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)

    const date = formatDistanceToNow(new Date())
    const colorIndex =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const newComment = {
      id: uuidv4(),
      name,
      firstName,
      comment,
      date,
      colorIndex,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredCommentsList = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState(prevState => ({
      commentList: filteredCommentsList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, count, commentList} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <div className="comments-and-image-container">
          <div className="add-comment-container ">
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <form
              className="add-comment-container"
              onSubmit={this.onAddComment}
            >
              <input
                type="text"
                className="name-container"
                onChange={this.nameValue}
                placeholder="Your Name"
                value={name}
              />
              <textarea
                className="comment-container"
                placeholder="Your Comment"
                onChange={this.commentValue}
                value={comment}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
            alt="comments"
          />
        </div>
        <hr className="horizontal-line" />
        <p className="comments-text">
          <span className="comments-count">{count}</span>Comments
          <ul className="comment-holder">
            {commentList.map(commentDetails => (
              <CommentItem
                key={commentDetails.id}
                commentDetails={commentDetails}
                deleteComment={this.deleteComment}
                toggleLike={this.toggleLike}
              />
            ))}
          </ul>
        </p>
      </div>
    )
  }
}

export default Comments
