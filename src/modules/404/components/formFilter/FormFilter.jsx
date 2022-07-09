import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

import { useParams } from 'react-router-dom';


import { context } from '../../../../system/context';
import Repository from '../../repository/RepositoryFactory';


function FormFilter() {

    const BranchesRepository = Repository.get('branches');
    const { idProfile, idRepository } = useParams();
    const ctx = useContext(context);

    const [searchValue, setSearchValue] = useState('');
    const [listBranchesState, setListBranchesStatue] = useState([])


    async function getBranches() {
        ctx.setLoading(true);
        try {
          const response = await BranchesRepository.getBranches(idProfile, idRepository);
          setListBranchesStatue(response);
          ctx.setListBranchState(response);
          ctx.setLoading(false);
        } catch(erro) {
          setListBranchesStatue([]);
          console.log(erro)
          console.log(erro.response.data.message)
          ctx.setLoading(false);
          ctx.setAlertMessage({
            message: erro.response.data.message,
            status: 'error'
          });
          ctx.setOpenAlert(true);
        }
    }
  

    function getComputedBranches() {
        if(searchValue !== '') {
            const computedBranches = listBranchesState.filter(repo => {
                return repo.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListBranchState(computedBranches);
            ctx.setLoading(false);
        } else {
            ctx.setListBranchState(listBranchesState);
            ctx.setLoading(false);
        }
    }

    useEffect(() => {
        getBranches()
    }, []);
  

    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , width: 400, mb:5 }}
        >
            <TextField
                label='Buscar branches'
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
                getComputedBranches()
              }}>
                  <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter;