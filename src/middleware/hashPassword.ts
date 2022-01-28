import express from 'express';
import bcrypt from 'bcrypt';

const { SALT_ROUNDS, BCRYPT_SECRET } = process.env;

const hashPassword = (req:express.Request, res:express.Response, next:express.NextFunction):void => {
    try {
        let { password } = req.body;
        res.locals.password = bcrypt.hashSync(password + BCRYPT_SECRET, parseInt(SALT_ROUNDS as string))
        next();
    } catch(err) {
        res.status(400).json(err);
    }
};

export default hashPassword 