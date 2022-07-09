import Client from '../../../system/repository/clients/AxiosClient';

const actions = {
    getProfile(idProfile) {
        return Client.get(`users/${idProfile}`)
    }
}

export default actions;