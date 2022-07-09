import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Container, Box } from '@mui/material';

//importa páginas
import ProfilesPage from './modules/profiles/view/ProfilesPage';

function AppRoutes(){
    return(
        <Box>
            <Container maxWidth="sm" sx={{display: 'flex', justifyContent: 'center'}}>
                <Routes>
                    <Route path='/' element={<ProfilesPage />} />
                </Routes>
            </Container>
        </Box>
    )
}

export default AppRoutes;