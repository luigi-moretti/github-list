import Client from '../../../system/repository/clients/AxiosClient';

const actions = {
    getRepos(idProfile) {
        return Client
            .get(`/users/${idProfile}/repos`)
            .then(response => response.data)
    }
}

export default actions;