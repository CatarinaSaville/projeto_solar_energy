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
//     },





// componentDidMount() {
//   if (this.props?.match?.params?.id) {
//     let unidadeId = this.props.match.params.id
//     this.loadUnidade(unidadeId)
//   }
// }

//   async loadUnidade(unidadeId) {
//   try {
//     let res = await unidadesService.getOne(unidadeId)
//     let unidade = res.data.data[0]
//     this.setState(unidade)
//   } catch (error) {
//     console.log(error);
//     alert("Não foi possível carregar as unidades.")
//   }
// }

//   async sendUnidade() {

//   let data = {
//     apelido: this.state.apelido,
//     marca: this.state.marca,
//     modelo: this.state.modelo,
//     ativo: this.state.ativo,
//     local: this.state.local,
//   }


//   try {
//     if (this.state.id) {
//       await unidadesService.edit(data, this.state.id)
//       alert("Unidade editada com sucesso!")
//     }
//     else {
//       await unidadesService.create(data)
//       alert("Unidade criado com sucesso!")
//     }

//     // this.props.history.push('/unidadeLista')
//   } catch (error) {
//     console.log(error)
//     alert("Erro ao criar unidade.")
//   }
// };
// handleSubmit(event) {
//   event.preventDefault();
//   this.sendUnidade();

// };
