import Client from '../../../system/repository/clients/AxiosClient';


const actions = {
    getCommits(idProfile, idRepo, idBranch) {
        return Client
            .get(`/repos/${idProfile}/${idRepo}/commits`)
            .then(response => response.data)
    }
}

export default actions;