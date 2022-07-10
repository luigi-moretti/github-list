import * as React from 'react';
import IconButton  from '@mui/material/IconButton';

function BaseIconButton(props) {
    return(<IconButton {...props} />)
}

BaseIconButton.muiName = 'IconButton';

export default BaseIconButton