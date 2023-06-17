import React,  { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc"

import style from "./DetailsNews.module.css"

const LikeButton = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      setLikes(likes + (isLiked ? -1 : 1));
      setIsLiked(!isLiked);
    };
  
    return (
      <div  className={style.likeButtonContainer}>
        <button
        onClick={handleLike}>
        {isLiked ? <FcLikePlaceholder/> : <FcLike/>}
        <span className={style.like}> {likes} Likes</span>
      </button>
      </div>
    );
  };
  
  export default LikeButton;
