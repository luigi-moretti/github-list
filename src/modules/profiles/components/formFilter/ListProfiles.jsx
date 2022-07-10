import React, { useContext } from 'react';
import BaseList from '../../../../system/components/base/BaseList';
import BaseListItem from '../../../../system/components/base/BaseListItem';
import BaseContainer from '../../../../system/components/base/BaseContainer';
import BaseDivider from '../../../../system/components/base/BaseDivider';
import BaseListItemText from '../../../../system/components/base/BaseListItemText';
import BaseListItemAvatar from '../../../../system/components/base/BaseListItemAvatar';
import BaseAvatar from '../../../../system/components/base/BaseAvatar';
import BaseTypography from '../../../../system/components/base/BaseTypography';
import SkeletonListItemBase from '../../../../system/components/base/SkeletonListItemBase';
import BaseLink from '../../../../system/components/base/BaseLink';
import { Link as RouterLink } from 'react-router-dom';
import SearchImage from '../../.././../system/assets/images/search.svg';

import { context } from '../../../../system/context';


function ListProfiles() {

  const ctx = useContext(context);

  return (
    <React.Fragment>
      <BaseTypography variant="h5" align="center">Perfis</BaseTypography>
      <BaseList sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          ctx.loading ?
            <SkeletonListItemBase />
            : Object.keys(ctx.listProfilesState).length > 0 ?
              <React.Fragment key={ctx.listProfilesState.login}>
                <BaseLink component={RouterLink} to={`/profiles/${ctx.listProfilesState.login}/repositories`} underline="none">
                  <BaseListItem alignItems="flex-start">
                    <BaseListItemAvatar>
                      <BaseAvatar alt={`${ctx.listProfilesState.name} avatar`} src={ctx.listProfilesState.avatar_url} />
                    </BaseListItemAvatar>
                    <BaseListItemText
                      primary={ctx.listProfilesState.name ? ctx.listProfilesState.name : ctx.listProfilesState.login}
                      secondary={
                        <React.Fragment>
                          <BaseTypography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Login: {ctx.listProfilesState.login}
                          </BaseTypography>
                          {ctx.listProfilesState.public_repos ? ` — ${ctx.listProfilesState.public_repos} Repositórios públicos` : ''}
                        </React.Fragment>
                      }
                    />
                  </BaseListItem>
                </BaseLink>
                <BaseDivider variant="inset" component="li" />
              </React.Fragment>
              :
              <BaseContainer sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <BaseTypography variant="h6" style={{ marginTop: "25px" }}>Digite um Login para pesquisar</BaseTypography>
                <BaseContainer>
                  <img style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: '15px',
                    maxWidth: '100%'
                  }} alt="logotipo" src={SearchImage} />
                </BaseContainer>
              </BaseContainer>
        }

      </BaseList>
    </React.Fragment>
  );
}

export default ListProfiles