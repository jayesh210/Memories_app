import React from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles'
function Form() {
  const classes=useStyles();
  const handleSubmit=()=>{

  }
    return (
      <Paper className={classes.Paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off" >
          <Typography variant="h6" >Creating a Memory</Typography>
          
        </form>

      </Paper>
    )
}

export default Form
