import { Request, Response } from 'express';

function createFailResponse(req: Request, res: Response, code: number, message: string) {
    return res.status(code).json({
        status: 'failed',
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

function createErrorResponse(req: Request, res: Response, code: number, message: string, error: {}) {
    return res.status(code).json({
        status: 'failed',
        message,
        error
    });
}

export {
    createSuccessResponse,
    createFailResponse,
    createErrorResponse
}