import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import passport from '../../lib/passport';
import { NextApiRequest, NextApiResponse } from 'next';

// typescript
const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(middleware);

// Request and Response
interface ExtendedRequest {
  user: string;
};

interface ExtendedResponse { };


handler.post<ExtendedRequest, ExtendedResponse>(passport.authenticate('local'), (req, res) => {
  // return our user object
  res.json({ user: req.user });
});

export default handler;