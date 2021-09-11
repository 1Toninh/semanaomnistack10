const Dev = require('../models/Dev');
const parseStrintAsArray = require('../util/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    async index(request, response){
        // Buscar todos os Devs em um raio de 10km
        // Filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStrintAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json({ devs });
    }
}