import axios from 'axios';
const apiUrl = "http://localhost:4000"

const unidadesService = {

    async list() {
        const enpoint = apiUrl + "/unidades"
        return axios.get(enpoint)
    },

    async getOne(unidadeId) {
        const enpoint = apiUrl + "/unidades/" + unidadeId
        return axios.get(enpoint)
    },

    async create(data) {
        const enpoint = apiUrl + "/unidades"
        return axios.post(enpoint, data)
    },

    async edit(data, unidadeId) {
        const enpoint = apiUrl + "/unidades/" + unidadeId
        return axios.put(enpoint, data)
    },

    async delete(unidadeId) {
        const enpoint = apiUrl + "/unidades/" + unidadeId
        return axios.delete(enpoint)
    },
}

export default unidadesService;