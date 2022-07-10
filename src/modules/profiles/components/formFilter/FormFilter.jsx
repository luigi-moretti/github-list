import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState, useContext } from 'react';

import { context } from '../../../../system/context';

function FormFilter(props) {

    const [searchValue, setSearchValue] = useState('');
    const ctx = useContext(context);

    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , mb:5 }}
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
                props.getProfiles(searchValue)
              }}>
                  <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter