import { HttpException } from '../shared/http.exception'

/**
 * Exception that is raised when some unexpected error occurs.
 */
export class InternalServerErrorException extends HttpException {
  constructor(
    /**
     * Property that defines a string that represents the error text.
     */
    public message = 'Internal Server Error',
    /**
     * Property that defines a number that represents the error status code.
     */
    public statusCode = 500,
    /**
     * Property that defines an object that represents the time that the
     * exeption has raised.
     */
    public timestamp = new Date(),
  ) {
    super(message, statusCode, timestamp)
  }
}