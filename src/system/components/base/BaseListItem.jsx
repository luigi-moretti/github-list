import * as React from 'react';
import ListItem  from '@mui/material/ListItem';

function BaseListItem(props) {
    return(<ListItem {...props} />)
}

BaseListItem.muiName = 'ListItem';

export default BaseListItem