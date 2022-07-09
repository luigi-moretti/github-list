import CommitsRepository from "./CommitsRepository";

const repositories = {
    'commits': CommitsRepository
}

const factory =  {
    get: name => repositories[name]
}

export default factory;