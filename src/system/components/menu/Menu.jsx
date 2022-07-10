import { AppBar, Container, Toolbar, Box, Avatar, Alert, IconButton, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
import React ,{ useContext } from 'react';
import { useNavigate, Link as RouterLink } from "react-router-dom";

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
                        <Link component={RouterLink} to='/' underline="none">
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </Link>
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