import * as React from 'react';
import Button  from '@mui/material/Button';

function BaseButton(props) {
    return(<Button {...props} />)
}

BaseButton.muiName = 'Button';

export default BaseButton