export default class ApplicationError extends Error {
    constructor(message, codeError) {
        super(message);
        this.name = "ApplicationError";
        this.code = codeError
    }
}