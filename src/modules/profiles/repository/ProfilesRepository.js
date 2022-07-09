import Client from '../../../system/repository/clients/AxiosClient';

const actions = {
    getProfile(idProfile) {
        return Client
            .get(`users/${idProfile}`)
            .then(response => response.data)
            .catch(erro => erro.response.data.message)
    }
}

export default actions;