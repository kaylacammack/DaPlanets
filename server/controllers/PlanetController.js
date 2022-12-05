import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getAllPlanets)
            .get('/:galaxyId', this.getPlanetsByGalaxy)
            .post('', this.createPlanet)
    }
    async getAllPlanets(req, res, next) {
        try {
            const planets = await planetService.getAllPlanets(req.query)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async getPlanetsByGalaxy(req, res, next) {
        try {
            const planets = await planetService.getPlanetsByGalaxy(req.params.galaxyId)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            const planet = await planetService.createPlanet(req.body)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}