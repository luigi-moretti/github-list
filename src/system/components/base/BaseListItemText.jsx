import * as React from 'react';
import ListItemText  from '@mui/material/ListItemText';

function BaseListItemText(props) {
    return(<ListItemText {...props} />)
}

BaseListItemText.muiName = 'ListItemText';

export default BaseListItemText