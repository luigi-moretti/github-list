import * as React from 'react';
import TextField  from '@mui/material/TextField';

function BaseTextField(props) {
    return(<TextField {...props} />)
}

BaseTextField.muiName = 'TextField';

export default BaseTextField