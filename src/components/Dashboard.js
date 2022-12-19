import { Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { gapi } from 'gapi-script';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Dashboard(user){
    useEffect(() => {
        console.log(user.user)
    });
    const setSession = (session) => {
        console.log('session success:', session);
    };

    const logout = (session) => {
        console.log('session loggedout:', session);
    };

    function onLogout(){
        console.log('logout');
        gapi.auth2.getAuthInstance().disconnect();
        window.location.reload(false);
    };

    const onFailure = () => {
        console.log('logout fail');
    };


    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {user.user.profileObj.givenName.charAt(0)}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={`Hello, ${user.user.profileObj.givenName}`}
                    subheader="December 19, 2022"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://www.adobe.com/express/create/chart/pie/media_1f78d811bae5e3b9cc9057d342e2a8541a493525d.png?width=750&format=png&optimize=medium"
                    alt="Paella dish"
                />
                <CardContent>               
                    <Typography variant="body2" color="text.secondary">
                    This is a minimal dashboard screen for the iTransition test
                    in order to succesfully demonstrate the correct implementation
                    of Material UI, Google Login API and React Js on it latest vertion 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="logout" onClick={onLogout}>
                        <LogoutIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
      </Container>
    );
}

export default Dashboard