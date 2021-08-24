import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: IHttpRequest = {
            body: req.body
        }
        const httpResponse = await controller.handle(httpRequest)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export interface IController {
    handle(request: IHttpRequest): Promise<IHttpResponse>
}

export interface IHttpRequest {
    body?: any
}

export interface IHttpResponse<T = any> {
    statusCode: number
    body: T
}