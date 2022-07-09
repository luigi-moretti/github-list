import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import { context } from '../../../../system/context';

export default function ListCommits() {
 
  const ctx = useContext(context);
  const { idProfile, idRepository } = useParams();


  // https://api.github.com/repos/defunkt/ace/commits

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Lista de Commits</Typography>
      <Typography variant="h6" align="center">De {idProfile} / {idRepository}</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          ctx.listCommitsState.length > 0 ? 
            ctx.listCommitsState.map(commit => {
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
            }) : ''
        }
      </List>
    </React.Fragment>
  );
}
