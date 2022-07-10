import React from 'react';
import BaseSkeleton from './BaseSkeleton';
import BaseListItem from './BaseListItem';
import BaseListItemText from './BaseListItemText';
import BaseListItemAvatar from './BaseListItemAvatar';
import BaseTypography from './BaseTypography';


function SkeletonListItemBase() {
    return (
        <BaseListItem alignItems="flex-start">
            <BaseListItemAvatar>
                <BaseSkeleton variant="circular" width={40} height={40} />
            </BaseListItemAvatar>
            <BaseListItemText
                primary={<BaseSkeleton variant="text" />}
                secondary={
                    <>
                        <BaseTypography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <BaseSkeleton variant="text" />
                        </BaseTypography>
                        <BaseSkeleton variant="text" />
                    </>
                }
            />
        </BaseListItem>
    )
}

export default SkeletonListItemBase