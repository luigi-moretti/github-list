import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { context } from '../../../system/context';
import Repository from '../repository/RepositoryFactory';
import BaseContainer from '../../../system/components/base/BaseContainer';
import BaseTypography from '../../../system/components/base/BaseTypography';
import BaseButton from '../../../system/components/base/BaseButton';
import BaseLink from '../../../system/components/base/BaseLink';
import FormFilter from '../components/formFilter/FormFilter';
import ListCommits from '../components/listCommits/LisCommits';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SkeletonListItemBase from '../../../system/components/base/SkeletonListItemBase';
import EmptyPackgeImage from '../../../system/assets/images/empty_package.svg';

function CommitsPage() {
    const [isErro, setisErro] = useState({});
    const CommitsRepository = Repository.get('commits');
    const { idProfile, idRepository } = useParams();
    const ctx = useContext(context);


    async function getCommits() {
        ctx.setLoading(true);

        CommitsRepository.getCommits(idProfile, idRepository)
            .then(response => {
                ctx.setListCommitsState(response);
                ctx.setListCommitsComputedState(response);
            })
            .catch(erro => setisErro(erro))
            .then(() => ctx.setLoading(false));
    }

    function getComputedRepos(searchValue) {
        ctx.setLoading(true);
        if (searchValue !== '') {
            const computedRepos = ctx.listCommitsState.filter(commit => {
                return commit.commit.message.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
            });
            ctx.setListCommitsComputedState(computedRepos);
        } else {
            ctx.setListCommitsComputedState(ctx.listCommitsState);
        }
        ctx.setLoading(false);
    }

    useEffect(() => {
        getCommits()
    }, []);

    return (
        <BaseContainer sx={{ width: '100%', bgcolor: 'background.paper' }}>

            <FormFilter getComputedRepos={getComputedRepos} />
            {
                ctx.loading ?
                    Array.apply(0, Array(5)).map((elem, i) => <SkeletonListItemBase key={i} />)
                    :
                    isErro.code === 404 ?
                        <BaseContainer sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <BaseTypography variant="h6" style={{ marginTop: "25px" }}>Nenhum Repositório encontrado</BaseTypography>
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
                        <ListCommits />
            }
        </BaseContainer>
    )
}

export default CommitsPage