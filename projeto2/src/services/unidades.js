import axios from 'axios';
const apiUrl = "http://localhost:4000"

const unidadesService = {
    
    //unidades service

    async list() {
        const enpoint = apiUrl + "/unidades"
        return axios.get(enpoint)
    },

    async getOne(unidadeId) {
        const enpoint = apiUrl + "/unidades/" + unidadeId
        return axios.get(enpoint)
    },


    async listUnidades() {
        const enpoint = apiUrl + "/unidades"
        return axios.get(enpoint)
    },

    async addUnidade(data) {
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

//consumo service

    async addConsumo(data) {
        const enpoint = apiUrl + "/consumos"
        return axios.post(enpoint, data)
    },
    
    async listConsumo() {
        const enpoint = apiUrl + "/consumos"
        return axios.get(enpoint)
    },
}

export default unidadesService;