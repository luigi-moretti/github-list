import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Container, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
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
      <Typography variant="h5" align="center">Lista de Branches</Typography>
      <Typography variant="h6" align="center">De {idProfile} / {idRepository}</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          ctx.listBranchComputedState.length > 0 ?
            ctx.listBranchComputedState.map(branch => {
              return (
                <React.Fragment key={branch.name}>
                  <Link component={RouterLink} to={`${branch.name}/commits`} underline="none">
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <DataObjectIcon />
                      </ListItemAvatar>
                      <ListItemText
                        primary={branch.name}
                      />
                    </ListItem>
                  </Link>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            : 
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
            </Container>
        }
      </List>
    </React.Fragment>
  );
}
