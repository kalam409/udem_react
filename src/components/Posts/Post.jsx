import React from "react";
import './Post.css'
const Post = (props) => {
  // const { title, body } = props.post;
  const { title, url, thumbnailUrl } = props.post;
  return (
    <>
      <div className="post">
        <h2>{title}</h2>
        {/* <p>{body}</p> */}
        <img src={url} alt="" srcset="" />
        <img src={thumbnailUrl} alt="" srcset="" />
      </div>
    </>
  );
};

export default Post;
