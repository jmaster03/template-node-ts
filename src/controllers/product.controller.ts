import { Request, Response } from 'express';


export class ProductController {

    /**
     * Show all your data base on a custom search filter
     * @param req 
     * @param res 
     */
    async index(req: Request, res: Response): Promise<Response | void> {


    }

    /**
     * Save your information obtained from a Request
     * @param req
     * @param res 
     */
    async store(req: Request, res: Response): Promise<Response | void> {

    }

    /**
     * Get an specific item giving an Id through the req.body
     * @param req.body.id 
     * @param res 
     */
    async show(req: Request, res: Response): Promise<Response | void> {

    }

    /**
     * Update a specific resource of your data giving an id through req.body
     * @param req.body.id
     * @param res 
     */
    async update(req: Request, res: Response): Promise<Response | void> {

    }

    /**
     * Delete a specific resource giving an id through req.body
     * @param req.body.id 
     * @param res 
     */
    async delete(req: Request, res: Response): Promise<Response | void> {

    }

}

export default new ProductController();
