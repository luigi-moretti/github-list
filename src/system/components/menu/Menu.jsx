import { AppBar, Container, Toolbar, Typography, Box, Avatar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';

function MenuComponent() {
    return (
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
        </AppBar>
    )
}

export default MenuComponent