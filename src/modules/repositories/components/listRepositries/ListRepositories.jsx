import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function ListRepositories() {

  const [listRepositoriesState, setListaRepositoriesState] = React.useState([
    {
      id: 1861402,
      name: "ace",
      full_name: "defunkt/ace",
      language: "JavaScript",
      description: 	"Ajax.org Cloud9 Editor"
    },
    {
      id: 1861402,
      name: "acts_as_textiled",
      full_name: "defunkt/acts_as_textiled",
      language: "Ruby",
      description: 	"Makes your models act as textiled."
    },
  ]);

  // https://api.github.com/users/defunkt/repos

  const { idProfile } = useParams();
  console.log(idProfile)

  return (
    <React.Fragment>
      <Typography variant="h4" align="center">Lista de Repositórios</Typography>
      <Typography variant="h5" align="center">De Tom Preston-Werner</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          listRepositoriesState.map(repository => {
            return (
              <React.Fragment>
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
        }
      </List>
    </React.Fragment>
  );
}
