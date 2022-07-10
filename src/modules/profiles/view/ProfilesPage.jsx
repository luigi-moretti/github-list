import { Typography, Container } from '@mui/material';
import React, { useState, useContext } from 'react';
import FormFilter from '../components/formFilter/FormFilter';
import ListProfiles from '../components/formFilter/ListProfiles';
import { context } from '../../../system/context';
import Repository from '../repository/RepositoryFactory';
import ProfileSearchImage from '../../../system/assets/images/profile_search.svg'

function ProfilesPage() {

    const [isErro, setisErro] = useState({});
    const ctx = useContext(context);

    const ProfileRepository = Repository.get('profiles');

    async function getProfiles(searchValue) {

        ProfileRepository.getProfile(searchValue)
            .then(function (response) {
                ctx.setListaProfilesState(response);
                ctx.setLoading(false);
                setisErro({});
            })
            .catch(function (erro) {
                setisErro(erro);
                ctx.setLoading(false);
            });
    }


    return (
        <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Typography variant='h3' sx={{ mb: 5 }}>
                Busque um perfil
            </Typography>
            <FormFilter getProfiles={getProfiles} />
            {
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
                            }} alt="logotipo" src={ProfileSearchImage} />
                        </Container>
                    </Container>
                    :
                    <ListProfiles />
            }
        </Container>
    )
}

export default ProfilesPage