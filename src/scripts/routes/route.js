import HOME from '../views/pages/page-home';
import COBA from '../views/pages/page-coba';
import SIGNUP from '../views/pages/page-signup';
import SIGNIN from '../views/pages/page-signin';
import PROFILE from '../views/pages/page-profile';
import TOOLS from '../views/pages/page-coba-tools';

const routes = {
  '/': HOME,
  '/dashboard': HOME,
  '/coba': COBA,
  '/tools': TOOLS,
  '/signup': SIGNUP,
  '/signin': SIGNIN,
  '/profile': PROFILE,
  // '/profile/:id': PROFILE,
  // '/profile/:id/namaloan' : PRINTLOAN,
  // '/fitur/:id' : INPUTLOAN,
};

export default routes;
