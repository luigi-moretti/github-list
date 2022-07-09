import ReposRepository from "./ReposRepository";

const repositories = {
    'repos': ReposRepository
}

const factory =  {
    get: name => repositories[name]
}

export default factory;