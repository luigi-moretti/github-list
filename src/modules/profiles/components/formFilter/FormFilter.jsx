import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react';


function FormFilter() {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , width: 400 }}
        >
            <TextField
                label='Pesquisar perfil'
                variant='outlined'
                
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
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
      </IconButton>
        </Box>
    )
}

export default FormFilter