import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Container, Box } from '@mui/material';

//importa páginas
import ProfilesPage from './modules/profiles/view/ProfilesPage';
import BranchesPage from './modules/branches/view/BranchesPage';
import CommitsPage from './modules/commits/view/CommitsPage';
import RepositoriesPage from './modules/repositories/view/RepositoriesPage';

function AppRoutes(){
    return(
        <Box>
            <Container maxWidth="sm" sx={{display: 'flex', justifyContent: 'center'}}>
                <Routes>
                    <Route path='/profiles' element={<ProfilesPage />} />
                    <Route path='/profiles/:idProfile/repositories' element={<RepositoriesPage />} />
                    <Route path='profiles/:idProfile/repositories/:idRepository/branches/' element={<BranchesPage />} />
                    <Route path='/profiles/:idProfile/repositories/:idRepository/branches/:idBranch/commits' element={<CommitsPage />} />
                </Routes>
            </Container>
        </Box>
    )
}

export default AppRoutes;