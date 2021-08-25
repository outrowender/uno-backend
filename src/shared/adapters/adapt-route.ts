import { Request, Response } from 'express'

// a assinatura dessa função é 
// function adaptRoute(controller: IController): (req: any, res: any) => Promise<void>

// (req: any, res: any) é um tipo de função que deve retornar uma Promise vazia
// e essa é exatamente uma das assinaturas possíveis que podem ser passadas dentro do arquivo de rotas
export function adaptRoute(controller: IController) {
    return async function map(req: Request, res: Response) {
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