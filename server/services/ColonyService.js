import { dbContext } from "../db/DbContext.js"

class ColonyService {
    async getAllColonies(query) {
        const colonies = await dbContext.Colonies.find(query).populate('planet', 'species')
        return colonies
    }
    async getSpeciesByPlanetId(planetId) {
        const species = await dbContext.Colonies.find({planetId}).populate('planet', 'species')
        return species
    }
    async createColony(colonyData) {
        const newColony = await dbContext.Colonies.create(colonyData)
        return newColony
    }
}
export const colonyService = new ColonyService()