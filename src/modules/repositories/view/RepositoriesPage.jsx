import React from 'react';
import ListRepositories from '../components/listRepositries/ListRepositories'
import FormFilter from '../components/formFilter/FormFilter'

function RepositoriesPage() {
    return (
        <div>
            <FormFilter />
            <ListRepositories />
        </div>
    )
}

export default RepositoriesPage