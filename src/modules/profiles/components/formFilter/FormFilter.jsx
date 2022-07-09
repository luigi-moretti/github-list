import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState, useContext } from 'react';

import { context } from '../../../../system/context';
import Repository from '../../repository/RepositoryFactory';



function FormFilter() {

    const [searchValue, setSearchValue] = useState('');
    const ctx = useContext(context);

    const ProfileRepository = Repository.get('profiles');

    async function getProfiles() {
        try {
          const {data} = await ProfileRepository.getProfile(searchValue);
          ctx.setListaProfilesState(data);
          ctx.setLoading(false);
        } catch {
          ctx.setListaProfilesState({});
          ctx.setLoading(false);
        }
    }

    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , width: 400 }}
        >
            <TextField
                label='Pesquisar perfil'
                variant='outlined'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
                autoFocus
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                fullWidth
            />
            <IconButton disabled={ctx.loading} type="submit" sx={{ p: '10px' }} aria-label="search" onClick={ (e) => {
                e.preventDefault();
                ctx.setLoading(true);
                getProfiles()
              }}>
                  <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter