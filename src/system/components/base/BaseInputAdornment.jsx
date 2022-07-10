import * as React from 'react';
import InputAdornment  from '@mui/material/InputAdornment';

function BaseInputAdornment(props) {
    return(<InputAdornment {...props} />)
}

BaseInputAdornment.muiName = 'InputAdornment';

export default BaseInputAdornment