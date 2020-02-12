import { Router } from 'express';
import { notFoundController } from 'controllers/notFoundController';

const router = Router();

router.use('*', notFoundController);

export default router;