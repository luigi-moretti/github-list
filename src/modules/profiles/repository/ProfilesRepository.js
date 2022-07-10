import Client from '../../../system/repository/clients/AxiosClient';
import ApplicationError from '../../../system/utils/ApplicationError';

const actions = {
    getProfile(idProfile) {
        return Client
            .get(`users/${idProfile}`)
            .then(response => response.data)
            .catch(response => {
                throw new ApplicationError(response.response.data.message, response.response.status,)
            })
    }
}

export default actions;