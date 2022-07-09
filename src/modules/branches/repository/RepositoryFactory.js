import BranchesRepository from "./BranchesRepository";

const repositories = {
    'branches': BranchesRepository
}

const factory =  {
    get: name => repositories[name]
}

export default factory;