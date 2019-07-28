import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';
import config from 'config';

export default (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.header('x-auth-token');

  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded: any = jwt.verify(token, config.get('jwtSecret'));
    
    (<any>req).user = decoded.user;
    next();
  } catch(err) {
    res.status(401).json({ msg: 'Token not valid' })
  }
}