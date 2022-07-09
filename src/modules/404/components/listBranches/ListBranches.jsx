import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { context } from '../../../../system/context';

export default function ListBranches() {

  const ctx = useContext(context);
  const { idProfile, idRepository } = useParams();

  // https://api.github.com/repos/defunkt/ace/branches

  return (
    <React.Fragment>
      <Typography variant="h5" align="center">Lista de Branches</Typography>
      <Typography variant="h6" align="center">De {idProfile} / {idRepository}</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          ctx.listBranchState.length > 0 ?
            ctx.listBranchState.map(branch => {
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
            : ''
        }
      </List>
    </React.Fragment>
  );
}
