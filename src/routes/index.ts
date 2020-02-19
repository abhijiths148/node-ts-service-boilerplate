import { Router } from 'express';
import { notFoundController } from 'controllers/notFoundController';

const router = Router();

// for all unknown routes
router.use('*', notFoundController);

export default router;