import { Request, Response, Router } from 'express';

/**
 * Express controller for user login view.
 */
export default class SampleController {
  /** Express router for this controller. */
  router = Router();

  /**
   * Creates the controller and adds routes.
   */
  constructor() {
    this.initializeRoutes();
  }

  /**
   * Initializes rotes with their handlers.
   */
  private initializeRoutes() {
    this.router.post('/echo', this.handleEcho);
  }

  /**
   * Renders the login view for an authorization request.
   * @param request Express request object.
   * @param response Express response object.
   */
  private handleEcho = (request: Request, response: Response) => {
    const params = request.body;
    request.log.info(params);
    response.send(params);
  }
}
