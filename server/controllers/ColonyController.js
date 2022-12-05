import { colonyService } from "../services/ColonyService.js";
import BaseController from "../utils/BaseController.js";

export class ColonyController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .get('', this.getAllColonies)
            .get('/:planetId', this.getSpeciesByPlanetId)
            .post('', this.createColony)
    }
    async getAllColonies(req, res, next) {
        try {
            const colonies = await colonyService.getAllColonies(req.query)
            return res.send(colonies)
        } catch (error) {
            next(error)
        }
    }
    async getSpeciesByPlanetId(req, res, next) {
        try {
            const species = await colonyService.getSpeciesByPlanetId(req.params.planetId)
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }
    async createColony(req, res, next) {
        try {
            const colony = await colonyService.createColony(req.body)
            return res.send(colony)
        } catch (error) {
            next(error)
        }
    }
}