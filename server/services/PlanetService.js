import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getAllPlanets(query) {
        const planets = await dbContext.Planets.find(query).populate('galaxy')
        return planets
    }
    async getPlanetsByGalaxy(galaxyId) {
        const planets = await dbContext.Planets.find({galaxyId}).populate('galaxy')
        return planets
    }
    async createPlanet(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }
}
export const planetService = new PlanetService()