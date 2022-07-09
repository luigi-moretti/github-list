import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';

import { context } from '../../../../system/context';

export default function ListRepositories() {

  const ctx = useContext(context);
  const { idProfile } = useParams();

  // https://api.github.com/users/defunkt/repos

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Lista de Repositórios</Typography>
      <Typography variant="h6" align="center">De {idProfile}</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          ctx.listReposState.length > 0 ?
            ctx.listReposState.map(repository => {
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
                                  { repository.description ? ` — Descrição: ${repository.description} ` : ''}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </Link>
                      <Divider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            : ''
        }
      </List>
    </React.Fragment>
  );
}
