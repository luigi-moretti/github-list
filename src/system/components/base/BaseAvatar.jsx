import * as React from 'react';
import Avatar  from '@mui/material/Avatar';

function BaseAvatar(props) {
    return(<Avatar {...props} />)
}

BaseAvatar.muiName = 'Avatar';

export default BaseAvatar