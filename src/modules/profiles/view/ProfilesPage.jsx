import { Typography } from '@mui/material';
import React from 'react';
import FormFilter from '../components/formFilter/FormFilter';
import ListProfiles from '../components/formFilter/ListProfiles';

function ProfilesPage() {

    return (
        <div>
            <Typography variant='h3' sx={{mb:5}}>
                Busque um perfil
            </Typography>
            <FormFilter />
            <ListProfiles />
        </div>
    )
}

export default ProfilesPage