import { Request, Response } from 'express';

function createFailResponse(req: Request, res: Response, code: number, message: string) {
    return res.status(code).json({
        status: 'fail',
        message,
    });
}

function createSuccessResponse(req: Request, res: Response, code: number, message: string, data: {}) {
    return res.status(code).json({
        status: 'success',
        message,
        data
    });
}

export {
    createSuccessResponse,
    createFailResponse
}