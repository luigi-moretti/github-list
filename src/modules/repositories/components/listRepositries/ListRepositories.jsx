import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Container, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import EmptyPackgeImage from '../../../../system/assets/images/empty_package.svg'

import { context } from '../../../../system/context';

export default function ListRepositories() {

  const ctx = useContext(context);
  const { idProfile } = useParams();

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Lista de Repositórios</Typography>
      <Typography variant="h6" align="center">De {idProfile}</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          ctx.listRepoComputedState.length > 0 ?
            ctx.listRepoComputedState.map(repository => {
              return (
                <React.Fragment key={repository.full_name}>
                  <Link component={RouterLink} to={`${repository.name}/branches/`} underline="none">
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <FolderOpenIcon />
                      </ListItemAvatar>
                      <ListItemText
                        primary={repository.full_name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {repository.language}
                            </Typography>
                            {repository.description ? ` — Descrição: ${repository.description} ` : ''}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Link>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            :
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
            </Container>
        }
      </List>
    </React.Fragment>
  );
}
