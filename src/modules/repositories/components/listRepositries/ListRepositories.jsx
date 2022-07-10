import React, { useContext } from 'react';
import BaseList from '../../../../system/components/base/BaseList';
import BaseListItem from '../../../../system/components/base/BaseListItem';
import BaseContainer from '../../../../system/components/base/BaseContainer';
import BaseDivider from '../../../../system/components/base/BaseDivider';
import BaseListItemText from '../../../../system/components/base/BaseListItemText';
import BaseListItemAvatar from '../../../../system/components/base/BaseListItemAvatar';
import BaseTypography from '../../../../system/components/base/BaseTypography';
import BaseLink from '../../../../system/components/base/BaseLink';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Link as RouterLink, useParams } from 'react-router-dom';
import EmptyPackgeImage from '../../../../system/assets/images/empty_package.svg'

import { context } from '../../../../system/context';

export default function ListRepositories() {

  const ctx = useContext(context);
  const { idProfile } = useParams();

  return (
    <React.Fragment>
      <BaseTypography variant="h5" align="center">Lista de Repositórios</BaseTypography>
      <BaseTypography variant="h6" align="center">De {idProfile}</BaseTypography>
      <BaseList sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          ctx.listRepoComputedState.length > 0 ?
            ctx.listRepoComputedState.map(repository => {
              return (
                <React.Fragment key={repository.full_name}>
                  <BaseLink component={RouterLink} to={`${repository.name}/branches/`} underline="none">
                    <BaseListItem alignItems="flex-start">
                      <BaseListItemAvatar>
                        <FolderOpenIcon />
                      </BaseListItemAvatar>
                      <BaseListItemText
                        primary={repository.full_name}
                        secondary={
                          <React.Fragment>
                            <BaseTypography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {repository.language}
                            </BaseTypography>
                            {repository.description ? ` — Descrição: ${repository.description} ` : ''}
                          </React.Fragment>
                        }
                      />
                    </BaseListItem>
                  </BaseLink>
                  <BaseDivider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            :
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
            </BaseContainer>
        }
      </BaseList>
    </React.Fragment>
  );
}
