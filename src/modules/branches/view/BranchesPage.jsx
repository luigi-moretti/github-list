import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import FormFilter from '../components/formFilter/FormFilter';
import ListBranches from '../components/listBranches/ListBranches';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SkeletonListItemBase from '../../../system/components/base/SkeletonListItemBase';
import BaseLink from '../../../system/components/base/BaseLink';
import BaseContainer from '../../../system/components/base/BaseContainer';
import BaseTypography from '../../../system/components/base/BaseTypography';
import BaseButton from '../../../system/components/base/BaseButton';
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
        <BaseContainer sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <FormFilter getComputedBranches={getComputedBranches} />
            {
                ctx.loading ?
                    Array.apply(0, Array(5)).map((elem, i) => <SkeletonListItemBase key={i} />)
                    :
                    isErro.code === 404 ?
                        <BaseContainer sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <BaseTypography variant="h6" style={{ marginTop: "25px" }}>Nenhum Branch encontrado</BaseTypography>
                            <BaseContainer>
                                <img style={{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginBottom: '15px',
                                    maxWidth: '100%'
                                }} alt="logotipo" src={EmptyPackgeImage} />
                            </BaseContainer>
                            <BaseLink component={RouterLink} to='/' underline="none">
                                <BaseButton startIcon={<ArrowBackIcon />} variant="contained" >
                                    Ir para Busca de Perfil
                                </BaseButton>
                            </BaseLink>
                        </BaseContainer>
                        :
                        <ListBranches />
            }
        </BaseContainer>
    )
}

export default BranchesPage