import Client from '../../../system/repository/clients/AxiosClient';
import ApplicationError from '../../../system/utils/ApplicationError';

const actions = {
    getRepos(idProfile) {
        return Client
            .get(`/users/${idProfile}/repos`)
            .then(response => response.data)
            .catch(response => {
                throw new ApplicationError(response.response.data.message, response.response.status,)
            })
    }
}

export default actions;