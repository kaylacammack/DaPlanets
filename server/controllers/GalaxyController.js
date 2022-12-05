import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
    constructor () {
        super('api/galaxies')
        this.router
            .get('', this.getAllGalaxies)
            .post('', this.createGalaxy)
    }
    async getAllGalaxies(req, res, next) {
        try {
            const galaxies = await galaxyService.getAllGalaxies(req.query)
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            const galaxy = await galaxyService.createGalaxy(req.body)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}