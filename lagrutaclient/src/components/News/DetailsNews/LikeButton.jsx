import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons"

const LikeButton = ({children, isLike, onLike}) => {
    const Icon = isLike ? FcLike : FcLikePlaceholder;
    return (

    );
}

export default LikeButton;