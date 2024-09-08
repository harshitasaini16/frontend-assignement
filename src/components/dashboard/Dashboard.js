import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Register } from "../register/Register";
import { getPosts } from "../../actions/getPosts";
import { getUserInfo } from "../../actions/getUserInfo";
export const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [postList, setPostList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const posts = getPosts().posts;
    setPostList(posts);
    const info = getUserInfo();
    setUserInfo(info);
  }, []);
  const changePopupCondition = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className={`container ${showPopup ? "popupvisible" : ""}`}>
        <h2 className="header-title">Hello {userInfo?.name}</h2>
        <p className="header-subtitle">
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </p>
        <div className="post-container" onClick={changePopupCondition}>
          <h4 className="create-post-title">Create post</h4>
          <div className="post-content">
            <span className="create-emoji">💬</span>
            <p className="post-content-text">How are you feeling today?</p>
          </div>
          <button className="post-button">Post</button>
        </div>
        {postList?.map((post, index) => (
          <div
            key={index}
            className="post-container"
            onClick={changePopupCondition}
          >
            <div className="post-header">
              <div className="user-info">
                <img src={post?.image} alt="avatar" className="user-avatar" />
                <div className="user-details">
                  <h3 className="user-name">{post?.userName}</h3>
                  <p className="post-time">
                    {post?.time}mins ago {post?.isEdited && "• Edited"}
                  </p>
                </div>
              </div>
              <img alt="options" src="/options.svg" />
            </div>
            <div className="post-content">
              <div className="emoji-wrapper">
                <span className="create-emoji">{post?.emoji}</span>
              </div>
              <p className="post-content-text">{post?.content}</p>
            </div>
            {post?.comments && (
              <div className="comments-section">
                <img
                  src="/chat-bubble.svg"
                  alt="comments"
                  className="comments-icon"
                />
                <p className="comment-count">
                  {post?.comments} comment{post?.comments > 1 && "s"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {showPopup && (
        <Register isDashboard="true" closeModal={changePopupCondition} />
      )}
    </>
  );
};
