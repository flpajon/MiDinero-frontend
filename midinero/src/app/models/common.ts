export class StateDTO {
    statusCode: number;
    statusMessage: string;

    constructor(statusCode: number, statusMessage: string) {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }
}
