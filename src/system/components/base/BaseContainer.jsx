import * as React from 'react';
import Container  from '@mui/material/Container';

function BaseContainer(props) {
    return(<Container {...props} />)
}

BaseContainer.muiName = 'Container';

export default BaseContainer