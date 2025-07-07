import {useState} from "react";

const LikeButton = () =>{
    const[liked, setLiked] = useState(false);

    const toggleLike =() =>{
        setLiked(!liked);
    };

    return(
        <div className = "ui labeled button" tabIndex="0" onClick = {toggleLike}>
            <div className = {`ui button ${liked? "red" : ""}`}>
                <i className="heart icon"></i>
                {liked ?  "Liked ❤️" : "Like 🤍"}
            </div>
        </div>
    );
};

export default LikeButton;