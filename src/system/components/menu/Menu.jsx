import { AppBar, Container, Toolbar, Box, Avatar, Alert, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
import React ,{ useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { context } from '../../context';

function MenuComponent() {

    const ctx = useContext(context);
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" sx={{marginBottom: '15px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon />
                        </IconButton>
                        <GitHubIcon />
                        <Box>
                            <Avatar alt='User' />
                        </Box>
                    </Toolbar>
                </Container>
                <Fade in={ctx.loading}>
                    <LinearProgress />
                </Fade>
            </AppBar>
            <Container maxWidth="sm" sx={{display: 'flex', justifyContent: 'center'}}>
                <Fade in={ctx.openAlert}>
                    <Alert 
                    variant="outlined"
                    severity={ctx.alertMessage.status}
                    onClose={() => {
                        ctx.setOpenAlert(false)
                    }}>{ctx.alertMessage.message}</Alert>
                </Fade>
            </Container>
        </>
    )
}

export default MenuComponent