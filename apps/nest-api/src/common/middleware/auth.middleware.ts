import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');

    const userInfoResult = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {headers: {
        authorization: req.headers.authorization
      }});

    console.log('temp');
    console.log(userInfoResult);
    // find user in DataBase

    // if user in DB
    next();
    // if user not in DB
    // next(new Error('401 bla bla bla));
  }
}
