import React from 'react';
import FormFilter from '../components/formFilter/FormFilter';
import ListCommits from '../components/listCommits/LisCommits';

function CommitsPage() {
    return (
        <div>
            <FormFilter />
            <ListCommits />
        </div>
    )
}

export default CommitsPage