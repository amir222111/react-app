import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {

    let postData = props.posts

    const [posts_data, setPosts] = useState(postData)
    const [text, setText] = useState("")
    const [postTitle, setTitle] = useState("")

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            text,
            postTitle
        }
        setPosts([...posts_data, newPost])
        setText("")
        setTitle("")
    }

    const deletePost = (post_id) => {
        setPosts(posts_data.filter(p => p.id != post_id))
    }


    let post_elements = posts_data.map(p => {
        return <Post id={p.id}  postTitle={p.postTitle} text={p.text} deletePost={deletePost}/>
    })

    return (
        <div>
            <form action=''>
                <div className='form-post'> 
                    <div className='form-input'>
                        <input type='text' value={postTitle} onChange={e => setTitle(e.target.value)} placeholder='Название поста' />
                    </div>
                    <div className='form-input'>
                        <textarea type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Текст поста'></textarea>
                    </div>
                    <button type="button" onClick={addNewPost}>Добавить</button>
                </div>
            </form>

            {post_elements}

        </div>
    )
}