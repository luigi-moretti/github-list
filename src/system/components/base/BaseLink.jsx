import * as React from 'react';
import Link  from '@mui/material/Link';

function BaseLink(props) {
    return(<Link {...props} />)
}

BaseLink.muiName = 'Link';

export default BaseLink