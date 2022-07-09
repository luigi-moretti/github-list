import ProfilesRepository from "./ProfilesRepository";

const repositories = {
    'profiles': ProfilesRepository
}

const factory =  {
    get: name => repositories[name]
}

export default factory;