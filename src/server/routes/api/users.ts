import * as express from 'express';

import { check, validationResult } from 'express-validator/check';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as config from 'config';
import * as gravatar from 'gravatar';

import User from '../../models/User.model';

class UsersController {
  public path = '/users';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path, [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a password with 6 or more chars').isLength({ min: 6 }),
    ], this.registerUser);
  }

  // @route  POST api/users
  // @desc   Register user
  // @access Public
  async registerUser(req: express.Request, res: express.Response) {
    const errors: any = validationResult(req);
    if(!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user: any = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });        
      }

      const avatar: any = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });


      const salt: any = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload: object = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if(err) throw err;
          res.json({ token })
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  };
}

export default UsersController;
