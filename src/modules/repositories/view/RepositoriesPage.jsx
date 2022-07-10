import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListRepositories from '../components/listRepositries/ListRepositories'
import FormFilter from '../components/formFilter/FormFilter'
import { context } from '../../../system/context';
import Repository from '../repository/RepositoryFactory';
import { Container, Typography } from '@mui/material';
import SkeletonListItemBase from '../../../system/components/base/SkeletonListItemBase';
import EmptyPackgeImage from '../../../system/assets/images/empty_package.svg'

function RepositoriesPage() {
    const [isErro, setisErro] = useState({});
    const { idProfile } = useParams();
    const RepoRepository = Repository.get('repos');
    const ctx = useContext(context);

    async function getRepos() {
        ctx.setLoading(true);

        RepoRepository.getRepos(idProfile)
            .then(function (response) {
                ctx.setListReposState(response);
                ctx.setListRepoComputedState(response);
            })
            .catch(function (erro) {
                setisErro(erro);
            })
            .then(function () {
                ctx.setLoading(false);
            });
    }

    function getComputedRepos(searchValue) {
        ctx.setLoading(true);
        if (searchValue !== '') {
            const computedRepos = ctx.setListReposState.filter(repo => {
                return repo.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.listRepoComputedState(computedRepos);
        } else {
            ctx.listRepoComputedState(ctx.listReposState);
        }
        ctx.setLoading(false);
    }

    useEffect(() => {
        getRepos()
    }, []);


    return (
        <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <FormFilter getComputedRepos={getComputedRepos} />
            {
                ctx.loading ?
                    Array.apply(0,Array(5)).map( (elem, i) => <SkeletonListItemBase key={i} />)
                    :
                    isErro.code === 404 ?
                        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" style={{ marginTop: "25px" }}>Nenhum Perfil encontrado</Typography>
                            <Container>
                                <img style={{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginBottom: '15px',
                                    maxWidth: '100%'
                                }} alt="logotipo" src={EmptyPackgeImage} />
                            </Container>
                        </Container>
                        :
                        <ListRepositories />
            }
        </Container>
    )
}

export default RepositoriesPage