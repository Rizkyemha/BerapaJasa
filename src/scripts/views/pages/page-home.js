import '../components/jumbtron';
import '../components/product';
import '../components/about-static-element';
import '../components/ourTeam';
import dashboard from '../components/dashboard';

const HOME = {
  render() {
    const main = dashboard.render();
    return main;
  },

  afterRender() {
    const getIdP = document.querySelector('#mainContent');
    const contentHome = document.createElement('a');
    const createJumbotron = document.createElement('section-jumbotron');
    const createProduct = document.createElement('product-service');
    const createAbout = document.createElement('about-us');
    const createTeam = document.createElement('our-teams');
    contentHome.innerHTML = ' coba';
    contentHome.setAttribute('href', '#/coba');
    getIdP.append(createJumbotron, createProduct, createAbout, createTeam, contentHome);
  },
};

export default HOME;
