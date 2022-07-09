import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function ListBranches() {

  // https://api.github.com/repos/defunkt/ace/branches

  const [listBranchesState, setListBranchesStatue] = React.useState([
    "dont-hardcode-fonts-protocol",
    "master",
    "upper-and-lower"
  ])

  return (
    <React.Fragment>
      <Typography variant="h4" align="center">Lista de Branches</Typography>
      <Typography variant="h5" align="center">De Tom Preston-Werner</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          listBranchesState.map(branch => {
            return (
              <React.Fragment>
                <Link component={RouterLink} to={`${branch}/commits`} underline="none">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={branch}
                          />
                        </ListItem>
                      </Link>
                    <Divider  component="li" />
              </React.Fragment>
            )
          })
        }
      </List>
    </React.Fragment>
  );
}
