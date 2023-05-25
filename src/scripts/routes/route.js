import HOME from '../views/pages/page-home';
import COBA from '../views/pages/page-coba';
import SIGNUP from '../views/pages/page-signup';
import SIGNIN from '../views/pages/page-signin';

const routes = {
  '/': HOME,
  '/dashboard': HOME,
  '/coba': COBA,
  '/signup': SIGNUP,
  '/signin': SIGNIN,
  // '/profile/:id': PROFILE,
  // '/profile/:id/namaloan' : PRINTLOAN,
  // '/fitur/:id' : INPUTLOAN,
};

export default routes;
