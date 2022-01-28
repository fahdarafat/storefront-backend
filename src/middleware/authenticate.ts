import express from 'express';
import jwt from 'jsonwebtoken';


const authenticate = (req:express.Request, res:express.Response, next:express.NextFunction):void => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = (authorizationHeader as string).split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET as string);
        next()
    } catch(err) {
        res.status(401);
        res.json(`Invalid Token, ${err}`);
    }
};

export default authenticate 