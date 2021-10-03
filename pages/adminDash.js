import React, {useState} from 'react';
import authHelper from '../auth/authHelper';
import createProject from '../firebase/createProject';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>{
    return {
       centerContainer: {
           display: 'flex',
           justifyContent: 'center',
           alignItem: 'center',
           marginTop: theme.spacing(5)
           
       }
    };
});

function AdminDash(){

    const {user} = authHelper();
    const classes = useStyles();
    
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handleUrlChange = (event)=>{
        setUrl(event.target.value);
    }

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleSubmit = ()=>{

        if(!url || !email || !name)
            setError("Please provide url and email");

        if(user.admin)
            createProject(email, url, name);
        
    }
   

    return (
        <>
       {user && user.admin?
        <>
        {/* Heading */}
        <Typography variant="h2" align="center" color="primary">
            Admin Page
        </Typography>

        {/* Email field */}
        <div className={classes.centerContainer}>
            
            <TextField 
            color="primary"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            placeholder="User's Email"
            helperText={error}
            error={error?true:false}
            />
        </div>

        {/* Name field */}
        <div className={classes.centerContainer}>
            
            <TextField 
            color="primary"
            label="Name"
            placeholder="Project's Name"
            value={name}
            onChange={handleNameChange}
            helperText={error}
            error={error?true:false}
            />
        </div>

        {/* URL field */}
        <div className={classes.centerContainer}>
            <TextField 
            color="primary"
            label="URL"
            style={{marginLeft: 400, marginRight: 400}}
            placeholder="Project's URL"
            fullWidth
            value={url}
            onChange={handleUrlChange}
            helperText={error}
            error={error?true:false}
            />
        </div>

        {/* Submit Button */}
        <div className={classes.centerContainer} onClick={handleSubmit}>
            <Button variant="contained" color="primary" size="large">
                Add Project
            </Button>
        </div>
        </>
       : <p>Please signin via admin account to view this page</p>}
        </>
    )
}

export default AdminDash;