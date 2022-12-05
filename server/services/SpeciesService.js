import { dbContext } from "../db/DbContext.js"

class SpeciesService {
    async getAllSpecies(query) {
        const species = await dbContext.Species.find(query)
        return species
    }
    
    async createSpecies(speciesData) {
        const newSpecies = await dbContext.Species.create(speciesData)
        return newSpecies
    }
}
export const speciesService = new SpeciesService()