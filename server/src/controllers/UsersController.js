const connection = require('../database/connection');

module.exports = {
    async list(request, response) {
        const usersList = await connection('clientes')
            .select('*')
            .orderBy('nome');

        return response.json(usersList);
    },

    async create(request, response) {
        const {
            nome,
            nomeFantasia,
            email,
            emailSecundario,
            cep,
            porteDaEmpreza,
            telefoneFixo,
            numCelular,
            quantidadeDeFuncionarios,
            rua,
            bairro,
            cidade,
            estado
        } = request.body;

        const userCreated = await connection('clientes')
            .insert({
                nome,
                nomeFantasia,
                email,
                emailSecundario,
                cep,
                porteDaEmpreza,
                telefoneFixo,
                numCelular,
                quantidadeDeFuncionarios,
                rua,
                bairro,
                cidade,
                estado
            });

        return response.json({ userCreated });
    },

    async update(request, response) {
        const { clienteId } = request.params;
        const {
            nome,
            nomeFantasia,
            email,
            emailSecundario,
            cnpj,
            cep,
            porteDaEmpreza,
            telefoneFixo,
            numCelular,
            quantidadeDeFuncionarios,
            rua,
            bairro,
            cidade,
            estado
        } = request.body;

        const userUpdated = await connection('clientes')
            .where('clienteId', clienteId)
            .update({
                nome: nome,
                nomeFantasia: nomeFantasia,
                email: email,
                emailSecundario: emailSecundario,
                cnpj: cnpj,
                cep: cep,
                porteDaEmpreza: porteDaEmpreza,
                telefoneFixo: telefoneFixo,
                numCelular: numCelular,
                quantidadeDeFuncionarios: quantidadeDeFuncionarios,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            })

        return response.json({ userUpdated });
    },

    async delete(request, response) {
        const { clienteId } = request.params;

        const user = await connection('clientes')
            .where('clienteId', clienteId)
            .delete();

        return response.json({ user });
    }
}
