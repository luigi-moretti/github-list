import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import FormFilter from '../components/formFilter/FormFilter';
import ListBranches from '../components/listBranches/ListBranches';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SkeletonListItemBase from '../../../system/components/base/SkeletonListItemBase';
import Link from '@mui/material/Link';
import { Container, Typography, Button } from '@mui/material';
import { context } from '../../../system/context';
import Repository from '../repository/RepositoryFactory';
import EmptyPackgeImage from '../../../system/assets/images/empty_package.svg'

function BranchesPage() {

    const [isErro, setisErro] = useState({});
    const BranchesRepository = Repository.get('branches');
    const { idProfile, idRepository } = useParams();
    const ctx = useContext(context);

    async function getBranches() {
        ctx.setLoading(true);

        BranchesRepository.getBranches(idProfile, idRepository)
            .then(response => {
                ctx.setListBranchState(response);
                ctx.setListBranchComputedState(response);
            })
            .catch(erro => setisErro(erro))
            .then(() => ctx.setLoading(false))
    }


    function getComputedBranches(searchValue) {
        ctx.setLoading(true);
        if (searchValue !== '') {
            const computedBranches = ctx.listBranchState.filter(repo => {
                return repo.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListBranchComputedState(computedBranches);
        } else {
            ctx.setListBranchComputedState(ctx.listBranchState);
        }
        ctx.setLoading(false);
    }

    useEffect(() => {
        getBranches()
    }, []);

    return (
        <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <FormFilter getComputedBranches={getComputedBranches} />
            {
                ctx.loading ?
                    Array.apply(0, Array(5)).map((elem, i) => <SkeletonListItemBase key={i} />)
                    :
                    isErro.code === 404 ?
                        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" style={{ marginTop: "25px" }}>Nenhum Branch encontrado</Typography>
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
                                    Voltar para lista de Repositórios
                                </Button>
                            </Link>
                        </Container>
                        :
                        <ListBranches />
            }
        </Container>
    )
}

export default BranchesPage