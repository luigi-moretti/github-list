import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListCommits() {

  const [listCommitsState, setListCommitsState] = React.useState([
    {
      sha: "6fdb28556235107f40242345b1b3a9313a736cc2",
      commit: {
        
      author: {
        name: "Fabian Jakobs",
        email: "fabian.jakobs@web.de",
        date: "2011-09-06T16:15:17Z"
      },
      committer: {
        name: "Fabian Jakobs",
        email: "fabian.jakobs@web.de",
        date: "2011-09-06T16:15:17Z"
      },
      message: "jslint fixes",
      tree: {
        sha: "4109eadc639ecce82e08ce3a9258cc84e10a2eea",
        url: "https://api.github.com/repos/defunkt/ace/git/trees/4109eadc639ecce82e08ce3a9258cc84e10a2eea"
      },
      url: "https://api.github.com/repos/defunkt/ace/git/commits/6fdb28556235107f40242345b1b3a9313a736cc2",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
      }
    },
    {
      sha: "6fdb28556235107f40242345b1b3a9313a736cc2",
      commit: {
        
      author: {
        name: "Fabian Jakobs",
        email: "fabian.jakobs@web.de",
        date: "2011-09-06T16:15:17Z"
      },
      committer: {
        name: "Fabian Jakobs",
        email: "fabian.jakobs@web.de",
        date: "2011-09-06T16:15:17Z"
      },
      message: "jslint fixes",
      tree: {
        sha: "4109eadc639ecce82e08ce3a9258cc84e10a2eea",
        url: "https://api.github.com/repos/defunkt/ace/git/trees/4109eadc639ecce82e08ce3a9258cc84e10a2eea"
      },
      url: "https://api.github.com/repos/defunkt/ace/git/commits/6fdb28556235107f40242345b1b3a9313a736cc2",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
      }
    },
  ]);

  // https://api.github.com/repos/defunkt/ace/commits

  return (
    <React.Fragment>
      <Typography variant="h4" align="center">Lista de Commits</Typography>
      <Typography variant="h5" align="center">De Tom Preston-Werner</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          listCommitsState.map(commit => {
            return (
              <React.Fragment>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={`${commit.name} avatar`} src={commit.url_avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={commit.commit.author.name}
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
        }
      </List>
    </React.Fragment>
  );
}
