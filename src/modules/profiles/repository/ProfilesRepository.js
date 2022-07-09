import Client from '../../../system/repository/clients/AxiosClient';

const actions = {
    getProfile(idProfile) {
        return Client
            .get(`users/${idProfile}`)
            .then(response => response.data)
    }
}

export default actions;