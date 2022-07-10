import * as React from 'react';
import List  from '@mui/material/List';

function BaseList(props) {
    return(<List {...props} />)
}

BaseList.muiName = 'List';

export default BaseList