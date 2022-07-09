import { AppBar, Container, Toolbar, Typography, Box, Avatar, Alert } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
import React ,{ useContext } from 'react';

import { context } from '../../context';

function MenuComponent() {

    const ctx = useContext(context);

    return (
        <>
            <AppBar position="static" sx={{marginBottom: '15px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <AdbIcon />
                        <Typography>LOGO</Typography>
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