import nc from 'next-connect';
import passport from '../lib/passport';
import database from './database';
import session from './session';

const all = nc();

all.use(database).use(session).use(passport.initialize()).use(passport.session());

export default all;