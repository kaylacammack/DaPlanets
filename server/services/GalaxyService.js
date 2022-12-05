import { dbContext } from "../db/DbContext.js"

class GalaxyService {
    async getAllGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query).populate('planetCount')
        return galaxies
    }
    async createGalaxy(galaxyData) {
        try {
            const newGalaxy = await dbContext.Galaxies.create(galaxyData)
            return newGalaxy
        } catch (error) {
            next(error)
        }
    }
}
export const galaxyService = new GalaxyService()