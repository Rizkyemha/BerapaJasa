import HOME from '../views/pages/page-home';
import SIGNUP from '../views/pages/page-signup';
import SIGNIN from '../views/pages/page-signin';
import PROFILE from '../views/pages/page-profile';

const routes = {
  '/': HOME,
  '/dashboard': HOME,
  '/signup': SIGNUP,
  '/signin': SIGNIN,
  '/profile/:id': PROFILE,
  // '/profile/:id/namaloan' : PRINTLOAN,
  // '/fitur/:id' : INPUTLOAN,
};

export default routes;
