declare module '@paypal/checkout-server-sdk';

declare namespace Express {
    export interface Request {
        userId: string;
    }
}