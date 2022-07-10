import React, { useState, useContext } from 'react';
import BaseContainer from '../../../system/components/base/BaseContainer';
import BaseTypography from '../../../system/components/base/BaseTypography';
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
                setisErro({});
            })
            .catch(function (erro) {
                setisErro(erro);
            })
            .then(function () {
                ctx.setLoading(false);
            });
    }


    return (
        <BaseContainer sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <BaseTypography variant='h3' sx={{ mb: 5 }}>
                Busque um perfil
            </BaseTypography>
            <FormFilter getProfiles={getProfiles} />
            {
                isErro.code === 404 ?
                    <BaseContainer sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <BaseTypography variant="h6" style={{ marginTop: "25px" }}>Nenhum Perfil encontrado</BaseTypography>
                        <BaseContainer>
                            <img style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginBottom: '15px',
                                maxWidth: '100%'
                            }} alt="logotipo" src={ProfileSearchImage} />
                        </BaseContainer>
                    </BaseContainer>
                    :
                    <ListProfiles />
            }
        </BaseContainer>
    )
}

export default ProfilesPage