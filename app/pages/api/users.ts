import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { parse, stringify } from 'flatted';
import database from '../../middlewares/database';
// typescript
const handler = nextConnect<NextApiRequest, NextApiResponse>();


// user all middleware
// session / database / passport
handler.use(middleware);

// Request and Response
interface ExtendedRequest {
  name: string;
  password: string;
  email: string;
  db: any;
  login: any;
  user?: string;
};

interface ExtendedResponse { };

// POST /api/users
handler.get<ExtendedRequest, ExtendedResponse>(async (req, res) => {


})
  .post<ExtendedRequest, ExtendedResponse>(async (req, res, next) => {

    // target.values
    const { name, password, email } = req.body;


    // if (!isEmail(email)) {
    //   res.status(400).send('The email you entered is invalid.');
    //   return;
    // }

    // checking password and name 
    if (!password || !name) return res.status(400).send('Missing field(s)');


    // check if email existed
    if ((await req.db.collection('users').countDocuments({ email })) > 0) {
      res.status(403).send('The email has already been used.');
    }


    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await req.db.collection('users')
      .insertOne({ email, password: hashedPassword, name })
      ;

    // login
    /* 
      req.login 
      if user is register it renders users
      - currently not found 
   
    */

    req.login(user, (err) => {
      // catch errors
      if (err) { return next(err); }

      // when we finally log in, return the (filtered) user object
      res.status(201).json({
        user,
      })
    });
  });



export default handler;
