import { Request, Response } from 'express';

function createFailResponse(req: Request, res: Response, code: number, message: string) {
    return res.status(code).json({
        status: 'fail',
        message,
    });
}

export {
    createFailResponse
}