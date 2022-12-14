import React,{useState,useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch,useSelector } from 'react-redux';
import {createPost,updatePost } from '../../actions/posts'


function Form({currentId,setCurrentId}) {
  const [postData,setPostData] = useState({
    creator:'',title:'',message:'',tags:'',selectedFile:'' });
  const post=useSelector((state)=> currentId? state.posts.find((p)=>p._id===currentId):null)
  const classes=useStyles();  
  const dispatch =useDispatch();

  useEffect(()=>{
    if(post) setPostData(post);
  },[post])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  
  const clear=()=>{
      setCurrentId(null);
      setPostData({creator:'',title:'',message:'',tags:'',selectedFile:'' });

  }
    return (
      <Paper className={classes.Paper}>
        <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} noValidate autoComplete="off" >
          <Typography variant="h6" >{currentId?'Editing':'Creating'} a Memory</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={ (e)=>{setPostData({...postData,creator:e.target.value})}} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={ (e)=>{setPostData({...postData,title:e.target.value})}} />
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={ (e)=>{setPostData({...postData,message:e.target.value})}} />
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={ (e)=>{setPostData({...postData,tags:e.target.value.split(',')})}} />
          <div className={classes.fileInput}>
            <FileBase name="file" type="file" multiple={false} className={classes.file} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
          </div>
          <Button className={classes.fileInput} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
          <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
        </form>

      </Paper>
    )
}

export default Form
