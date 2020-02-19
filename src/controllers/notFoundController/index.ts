import { Request, Response, NextFunction } from 'express';

import { createFailResponse } from 'utils/response';

export function notFoundController(req: Request, res: Response, next: NextFunction) {
    return createFailResponse(req, res, 404, 'Page Not Found!!');
}