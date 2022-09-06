// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleLike} = props

  const {
    id,
    name,
    firstName,
    comment,
    date,
    colorIndex,
    isLiked,
  } = commentDetails

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addColor = isLiked ? 'sky-blue' : ' '

  const likeComment = () => {
    toggleLike(id)
  }

  const delComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comments-display-container">
      <div className="name-comment-holder ">
        <p className={`user-icon ${colorIndex}`}>{firstName}</p>
        <div className="sub-holder">
          <div className="name-time-holder">
            <h1 className="username">{name}</h1>
            <p className="time">{date}</p>
          </div>
          <p className="comment-line">{comment}</p>
        </div>
      </div>
      <div className="icons-holder">
        <button className="like-button" type="button" onClick={likeComment}>
          <img src={imageUrl} className="like-icon" alt="like" />
        </button>
        <p className={`like-icon-name ${addColor}`}>Like</p>
        <button
          className="delete-button"
          type="button"
          onClick={delComment}
          //   testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
