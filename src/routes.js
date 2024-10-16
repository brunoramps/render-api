import { Router } from 'express'
import { RenderController } from './controllers/RenderController.js';

const router = Router();

router.post('/render/single', new RenderController().getRenderedPageFromSingleUrl)

export { router }