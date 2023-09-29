import { Request, Response } from 'express';
import {body,check, validationResult} from 'express-validator';

 
class AuthController {

    public data: any;

    async signup(req: Request, res: Response): Promise<Response | void> {
         // const params = req.body;
         const validator = [
            body('name').isAlpha().isEmpty(),
            body('surname').isAlpha(),
            body('username').isAlphanumeric(),
            body('password').isAlphanumeric(),
            body('email').isEmail().normalizeEmail()
        ];

        const val = validationResult(validator);

        if (!val.isEmpty()) {
            return res.status(400).json({ errors: val.array() });
        }else{
            return res.status(200).json(req.body);
        }
      
    }

    async signin(req: Request, res: Response): Promise<Response | void> {

        res.json({
            code: 200,
            status: 'success',
            params: ''
        });
        
    }

    async verifyToken (req: Request, res: Response): Promise<Response | void> {
        
    }



} 
export default new AuthController();

