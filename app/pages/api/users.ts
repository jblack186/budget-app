<<<<<<< HEAD
// import nextConnect from 'next-connect';
// // import isEmail from '.lib/isEmail';
// // import normalizeEmail from 'validator/lib/normalizeEmail';
// import bcrypt from 'bcryptjs';
// import middleware from '../../middlewares/middleware';
// import { extractUser } from '../../lib/api-helpers';

// const handler = nextConnect();

// handler.use(middleware); // see how we're reusing our middleware

// // POST /api/users
// handler.post(async (req, res) => {
//   const { name, password } = req.body;
//   const email = req.body.email; // this is to handle things like jane.doe@gmail.com and janedoe@gmail.com being the same
//   // if (!isEmail(email)) {
//   //   res.status(400).send('The email you entered is invalid.');
//   //   return;
//   // }
//   if (!password || !name) {
//     res.status(400).send('Missing field(s)');
//     return;
//   }
//   // check if email existed
//   if ((await req.db.collection('users').countDocuments({ email })) > 0) {
//     res.status(403).send('The email has already been used.');
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await req.db
//     .collection('users')
//     .insertOne({ email, password: hashedPassword, name })
//     .then(({ ops }) => ops[0]);
//   req.logIn(user, (err) => {
//     if (err) throw err;
//     // when we finally log in, return the (filtered) user object
//     res.status(201).json({
//       user: extractUser(req),
//     });
//   });
// });

// export default handler;
=======
/* 
  currently not in use because of new configuration to auth
 */
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
>>>>>>> 3e662fa67b8fb934efce1c13960c2d56a9224677
