import { IController, IHttpRequest, IHttpResponse } from "../shared/adapt-route";

export class CreateRoomController implements IController {

    async handle(request: IHttpRequest): Promise<IHttpResponse<any>> {
        const response : IHttpResponse = {
            body: "Oieee",
            statusCode: 200
        };
        return response;
    }
}