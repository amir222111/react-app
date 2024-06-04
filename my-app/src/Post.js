import React, { useState } from 'react'

export default function Post(props) {

    let title_ref = React.createRef();

    function mouse_on() {
        title_ref.current.style.color = "red"
        title_ref.current.style.fontSize = "35px"
    }

    function mouse_off() {
        title_ref.current.style.color = "black"
        title_ref.current.style.fontSize = "30px"
    }

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function likePost() {
        setLikes(likes + 1);
    }

    function dislikePost() {
        setDislikes(dislikes + 1)
    }

    return (
        <div className='post'>
            <h1 ref={title_ref} onMouseEnter={mouse_on} onMouseLeave={mouse_off}>{props.postTitle}</h1>
            <p>{props.text}</p>
            <p>Лайки: {likes}</p>
            <p>Дизлайки: {dislikes}</p>
            <button className='like-btn' onClick={likePost}>Лайкнуть пост</button>
            <button className='dislike-btn' onClick={dislikePost}>Дизлайкнуть пост</button>
            <button className='delete-btn' onClick={()=> props.deletePost(props.id)}>Удалить пост!</button>
        </div>
    )
}
