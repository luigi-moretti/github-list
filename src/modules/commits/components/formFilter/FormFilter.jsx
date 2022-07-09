import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

import { useParams } from 'react-router-dom';


import { context } from '../../../../system/context';
import Repository from '../../repository/RepositoryFactory';


function FormFilter() {

    const CommitsRepository = Repository.get('commits');
    const { idProfile, idRepository } = useParams();
    const ctx = useContext(context);

    const [searchValue, setSearchValue] = useState('');
    const [listCommitsState, setListCommitsState] = React.useState([]);



    async function getCommits() {
        ctx.setLoading(true);
        try {
            const response = await CommitsRepository.getCommits(idProfile, idRepository);
            setListCommitsState(response);
            ctx.setListCommitsState(response);
            ctx.setLoading(false);
        } catch (erro) {
            setListCommitsState([]);
            ctx.setListCommitsState([]);
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
        if (searchValue !== '') {
            const computedRepos = listCommitsState.filter(commit => {
                return commit.commit.message.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListCommitsState(computedRepos);
            ctx.setLoading(false);
        } else {
            ctx.setListCommitsState(listCommitsState);
            ctx.setLoading(false);
        }
    }

    useEffect(() => {
        getCommits()
    }, []);


    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 400, mb:5  }}
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
                ctx.setLoading(true);
                getComputedRepos()
            }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default FormFilter;