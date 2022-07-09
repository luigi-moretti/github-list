import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

import { useParams } from 'react-router-dom';


import { context } from '../../../../system/context';
import Repository from '../../repository/RepositoryFactory';


function FormFilter() {

    const RepoRepository = Repository.get('repos');
    const { idProfile } = useParams();
    const ctx = useContext(context);

    const [searchValue, setSearchValue] = useState('');
    const [listRepositoriesState, setListaRepositoriesState] = useState([]);


    async function getRepos() {
        ctx.setLoading(true);
        try {
          const response = await RepoRepository.getRepos(idProfile);
          setListaRepositoriesState(response);
          ctx.setListReposState(response);
          ctx.setLoading(false);
        } catch(erro) {
            setListaRepositoriesState([]);
            ctx.setListReposState([]);
          console.log(erro)
          ctx.setLoading(false);
          ctx.setAlertMessage({
            message: 'deu ruim',
            status: 'error'
          });
          ctx.setOpenAlert(true);
        }
    }

    function getComputedRepos() {
        if(searchValue !== '') {
            const computedRepos = listRepositoriesState.filter(repo => {
                return repo.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListReposState(computedRepos);
            ctx.setLoading(false);
        } else {
            ctx.setListReposState(listRepositoriesState);
            ctx.setLoading(false);
        }
    }
  
     useEffect(() => {
      getRepos()
     }, []); 


    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , width: 400, mb:5 }}
        >
            <TextField
                label='Buscar repositório'
                variant='outlined'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
                autoFocus
                fullWidth
            />
            <IconButton disabled={ctx.loading} type="submit" sx={{ p: '10px' }} aria-label="search" onClick={ (e) => {
                e.preventDefault();
                ctx.setLoading(true);
                getComputedRepos()
              }}>
                  <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter;