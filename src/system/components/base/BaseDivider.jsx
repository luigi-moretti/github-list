import * as React from 'react';
import Divider  from '@mui/material/Divider';

function BaseDivider(props) {
    return(<Divider {...props} />)
}

BaseDivider.muiName = 'Divider';

export default BaseDivider