import { IController, IHttpRequest, IHttpResponse } from "../shared/adapters/adapt-route";

export class JoinRoomController implements IController {

    async handle(request: IHttpRequest): Promise<IHttpResponse<any>> {
        const response : IHttpResponse = {
            body: "Oieee",
            statusCode: 200
        };
        return response;
    }
}