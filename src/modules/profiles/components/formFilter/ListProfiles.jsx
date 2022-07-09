import React, {  useContext  } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { context } from '../../../../system/context';


function ListProfiles() {

  const ctx = useContext(context);

  // console.log(ctx);

  // https://api.github.com/users/defunkt

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Perfis</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          Object.keys(ctx.listProfilesState).length > 0 ? 
                <React.Fragment key={ctx.listProfilesState.login}>
                  <Link component={RouterLink} to={`/profiles/${ctx.listProfilesState.login}/repositories`} underline="none">
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt={`${ctx.listProfilesState.name} avatar`} src={ctx.listProfilesState.url_avatar} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={ctx.listProfilesState.name ? ctx.listProfilesState.name : ctx.listProfilesState.login}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                  Login: {ctx.listProfilesState.login}
                                  </Typography>
                                  { ctx.listProfilesState.public_repos ? ` — ${ctx.listProfilesState.public_repos} Repositórios públicos` : ''}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </Link>
                      <Divider variant="inset" component="li" />
                </React.Fragment>
            : ''
        }

      </List>
    </React.Fragment>
  );
}

export default ListProfiles