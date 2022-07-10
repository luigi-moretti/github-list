import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link as RouterLink  } from 'react-router-dom';
import ListRepositories from '../components/listRepositries/ListRepositories'
import FormFilter from '../components/formFilter/FormFilter'
import { context } from '../../../system/context';
import Repository from '../repository/RepositoryFactory';
import { Container, Typography, Button } from '@mui/material';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
            .then(response => {
                ctx.setListReposState(response);
                ctx.setListRepoComputedState(response);
            })
            .catch( erro => setisErro(erro))
            .then(() => ctx.setLoading(false));
    }

    function getComputedRepos(searchValue) {
        ctx.setLoading(true);
        if (searchValue !== '') {
            const computedRepos = ctx.listReposState.filter(repo => {
                return repo.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListRepoComputedState(computedRepos);
        } else {
            ctx.setListRepoComputedState(ctx.listReposState);
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
                    Array.apply(0, Array(5)).map((elem, i) => <SkeletonListItemBase key={i} />)
                    :
                    isErro.code === 404 ?
                        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" style={{ marginTop: "25px" }}>Nenhum Repositório encontrado</Typography>
                            <Container>
                                <img style={{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginBottom: '15px',
                                    maxWidth: '100%'
                                }} alt="logotipo" src={EmptyPackgeImage} />
                            </Container>
                            <Link component={RouterLink} to='/' underline="none">
                                <Button startIcon={<ArrowBackIcon />} variant="contained" >
                                    Ir para Busca de Perfil
                                </Button>
                            </Link>
                        </Container>
                        :
                        <ListRepositories />
            }
        </Container>
    )
}

export default RepositoriesPage