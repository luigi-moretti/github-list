import Client from '../../../system/repository/clients/AxiosClient';


const actions = {
    getBranches(idProfile, idRepo) {
        return Client
            .get(`/repos/${idProfile}/${idRepo}/branches`)
            .then(response => response.data)
            .catch(e => {
                console.log('vish')
                console.log(e)
            })
    }
}

export default actions;