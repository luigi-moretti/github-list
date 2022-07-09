import React, { useState, useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';

import { context } from '../../../../system/context';
import  Repository  from '../../repository/RepositoryFactory';

export default function ListRepositories() {

  const RepoRepository = Repository.get('repos');
  const ctx = useContext(context);
  const { idProfile } = useParams();
  
  const [listRepositoriesState, setListaRepositoriesState] = useState([]);


  async function getRepos() {
      ctx.setLoading(true);
      try {
        const response = await RepoRepository.getRepos(idProfile);
        setListaRepositoriesState(response);
        ctx.setLoading(false);
      } catch(erro) {
        setListaRepositoriesState([]);
        console.log(erro)
        ctx.setLoading(false);
        ctx.setAlertMessage({
          message: 'deu ruim',
          status: 'error'
        });
        ctx.setOpenAlert(true);
      }
  }

   useEffect(() => {
    getRepos()
   }, []); 

  // https://api.github.com/users/defunkt/repos


  return (
    <React.Fragment>
      <Typography variant="h4" align="center">Lista de Repositórios</Typography>
      <Typography variant="h5" align="center">De Tom Preston-Werner</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          listRepositoriesState.length > 0 ?
            listRepositoriesState.map(repository => {
              return (
                <React.Fragment key={repository.full_name}>
                  <Link component={RouterLink} to={`${repository.name}/branches/`} underline="none">
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt={`${repository.name} avatar`} src={repository.url_avatar} />
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
