import * as React from 'react';
import Box  from '@mui/material/Box';

function BaseBox(props) {
    return(<Box {...props} />)
}

BaseBox.muiName = 'Box';

export default BaseBox