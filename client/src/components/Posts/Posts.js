import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import {useSelector} from 'react-redux'
function Posts() {
  const classes=useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <>
    <Post/>
    <h1>Posts</h1>
    </>
  )
}

export default Posts