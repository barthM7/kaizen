const connection = require('../database/connection');

module.exports = {
    async list(request, response) {
        const toolsList = await connection('ferramentas')
            .select('*')
            .orderBy('nome');

        return response.json({ toolsList });
    },

    async create(request, response) {
        const {
            nome,
            moedaTipo,
            basePequenoPorte,
            baseMedioPorte,
            baseGrandePorte,
            valorDeRevenda,
            valorParaParceiro,
            cadastradoPor
        } = request.body;

        const toolIdAfterCreate = await connection('ferramentas')
            .insert({
                nome,
                moedaTipo,
                basePequenoPorte,
                baseMedioPorte,
                baseGrandePorte,
                valorDeRevenda,
                valorParaParceiro,
                cadastradoPor
            });

        return response.json({ toolIdAfterCreate });
    },

    async update(request, response) {
        const { ferramentaId } = request.params;
        const {
            nome,
            moedaTipo,
            basePequenoPorte,
            baseMedioPorte,
            baseGrandePorte,
            valorDeRevenda,
            valorParaParceiro,
            cadastradoPor
        } = request.body;

        const updatedToolId = await connection('ferramentas')
            .where('ferramentaId', ferramentaId)
            .update({
                nome: nome,
                moedaTipo: moedaTipo,
                basePequenoPorte: basePequenoPorte,
                baseMedioPorte: baseMedioPorte,
                baseGrandePorte: baseGrandePorte,
                valorDeRevenda: valorDeRevenda,
                valorParaParceiro: valorParaParceiro,
                cadastradoPor: cadastradoPor
            });

        return response.json({ updatedToolId });
    }
}