import express from 'express';
import bcrypt from 'bcrypt';

const { SALT_ROUNDS, BCRYPT_SECRET } = process.env;

const hashPassword = (req:express.Request, res:express.Response, next:express.NextFunction):void => {
    let { password } = req.body;
     res.locals.password = bcrypt.hashSync(password + BCRYPT_SECRET, parseInt(SALT_ROUNDS as string))
     next();
};

export default hashPassword 