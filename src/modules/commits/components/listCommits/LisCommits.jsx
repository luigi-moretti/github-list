import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import EmptyPackgeImage from '../../../../system/assets/images/empty_package.svg'

import { context } from '../../../../system/context';

export default function ListCommits() {
 
  const ctx = useContext(context);
  const { idProfile, idRepository } = useParams();

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Lista de Commits</Typography>
      <Typography variant="h6" align="center">De {idProfile} / {idRepository}</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          ctx.listCommitsComputedState.length > 0 ? 
            ctx.listCommitsComputedState.map(commit => {
              return (
                <React.Fragment key={commit.sha}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={`${commit.name} avatar`} src={commit.avatar_url} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={`Autor: ${commit.commit.author.name}`}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {commit.commit.author.date}
                              </Typography>
                              { commit.commit.message ? ` — Mensagem: ${commit.commit.message} ` : ''}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            :
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h6" style={{ marginTop: "25px" }}>Nenhum Commit encontrado</Typography>
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
