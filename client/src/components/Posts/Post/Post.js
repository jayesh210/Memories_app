import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardContent,CardMedia, Button,Typography} from '@mui/material'
import moment from 'moment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post({post}) {
    const classes=useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{classes.creator}</Typography>
                <Typography variant="h6">{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} onClick={()=>{}}>
                    <MoreHorizIcon fontSize="default"></MoreHorizIcon>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
            </div>
            <CardContent>  
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onclick={()=>{}}>
                    <ThumbUpIcon fontSize="small" />
                    Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onclick={()=>{}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post
