import express from "express";
import { User, UserStore } from "../models/user";
import authenticate from "../middleware/authenticate";
import hashPassword from "../middleware/hashPassword";
import jwt from "jsonwebtoken";

const store = new UserStore();
const users = express.Router();

users.get("/", authenticate, async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const result = await store.index();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
}
);
users.get("/:id", authenticate, async (req: express.Request, res: express.Response): Promise<void> => {
  const id: number | undefined = parseInt(req.params.id) ? parseInt(req.params.id) : undefined
  if (id) {
    try {
      const result = await store.show(id);
      res.status(200).json(result).end();
    } catch (err) {
      res.status(400).send(err).end();
    }
  } else {
    res.send('Please enter a number for user id')
  }
}
);
users.post("/", authenticate, hashPassword, async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const user: User = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: res.locals.password,
    };
    const result = await store.create(user);
    res.status(200).json(result).end();
  } catch (err) {
    res.status(400).send(err).end();
  }
}
);
users.post("/signup", hashPassword, async (req: express.Request, res: express.Response): Promise<void> => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: res.locals.password,
  };
  if (user) {
    try {
      const newUser = await store.create(user);
      let token: string = jwt.sign(
        { user: newUser },
        process.env.TOKEN_SECRET as string
      );
      res.json(token);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
);

export default users;
