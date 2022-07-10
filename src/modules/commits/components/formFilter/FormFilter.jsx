import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

import { context } from '../../../../system/context';


function FormFilter(props) {

    const ctx = useContext(context);

    const [searchValue, setSearchValue] = useState('');

    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb:5  }}
        >
            <TextField
                label='Buscar mensagem do commit'
                variant='outlined'
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
                autoFocus
                fullWidth
            />
            <IconButton disabled={ctx.loading} type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(e) => {
                e.preventDefault();
                props.getComputedRepos(searchValue)
            }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter;