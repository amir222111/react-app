import React from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {
  return (
    <div>
      <Posts posts={props.data}/>
    </div>
  )
}
