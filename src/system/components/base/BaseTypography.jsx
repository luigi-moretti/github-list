import * as React from 'react';
import Typography  from '@mui/material/Typography';

function BaseTypography(props) {
    return(<Typography {...props} />)
}

BaseTypography.muiName = 'Typography';

export default BaseTypography