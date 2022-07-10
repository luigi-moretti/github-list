import * as React from 'react';
import Skeleton  from '@mui/material/Skeleton';

function BaseSkeleton(props) {
    return(<Skeleton {...props} />)
}

BaseSkeleton.muiName = 'Skeleton';

export default BaseSkeleton