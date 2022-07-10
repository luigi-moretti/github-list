import React, { useContext } from 'react';
import BaseList from '../../../../system/components/base/BaseList';
import BaseListItem from '../../../../system/components/base/BaseListItem';
import BaseListItemText from '../../../../system/components/base/BaseListItemText';
import BaseDivider from '../../../../system/components/base/BaseDivider';
import BaseContainer from '../../../../system/components/base/BaseContainer';
import BaseTypography from '../../../../system/components/base/BaseTypography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import BaseLink from '../../../../system/components/base/BaseLink';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmptyPackgeImage from '../../../../system/assets/images/empty_package.svg'

import { context } from '../../../../system/context';

export default function ListBranches() {

  const ctx = useContext(context);
  const { idProfile, idRepository } = useParams();

  // https://api.github.com/repos/defunkt/ace/branches

  return (
    <React.Fragment>
      <BaseTypography variant="h5" align="center">Lista de Branches</BaseTypography>
      <BaseTypography variant="h6" align="center">De {idProfile} / {idRepository}</BaseTypography>
      <BaseList sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          ctx.listBranchComputedState.length > 0 ?
            ctx.listBranchComputedState.map(branch => {
              return (
                <React.Fragment key={branch.name}>
                  <BaseLink component={RouterLink} to={`${branch.name}/commits`} underline="none">
                    <BaseListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <DataObjectIcon />
                      </ListItemAvatar>
                      <BaseListItemText
                        primary={branch.name}
                      />
                    </BaseListItem>
                  </BaseLink>
                  <BaseDivider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            : 
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
            </BaseContainer>
        }
      </BaseList>
    </React.Fragment>
  );
}
