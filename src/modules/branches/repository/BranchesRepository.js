import Client from '../../../system/repository/clients/AxiosClient';
import ApplicationError from '../../../system/utils/ApplicationError';

const actions = {
    getBranches(idProfile, idRepo) {
        return Client
            .get(`/repos/${idProfile}/${idRepo}/branches`)
            .then(response => response.data)
            .catch(response => {
                throw new ApplicationError(response.response.data.message, response.response.status,)
            })
    }
}

export default actions;