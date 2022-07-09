import React from 'react';
import FormFilter from '../components/formFilter/FormFilter';
import ListBranches from '../components/listBranches/ListBranches';

function BranchesPage() {
    return (
        <div>
            <FormFilter />
            <ListBranches />
        </div>
    )
}

export default BranchesPage