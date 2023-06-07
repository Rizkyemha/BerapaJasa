/* eslint-disable quotes */
import '../components/landing-page/jumbtron';
import '../components/landing-page/product';
import '../components/landing-page/about-static-element';
import '../components/landing-page/ourTeam';
import Main from '../components/main-content';
import HEADER from '../components/landing-page/navbar';
import Footer from '../components/landing-page/footer';

const HOME = {
  render() {
    const CreateHeader = HEADER.render();
    const CreateMain = Main.render();
    const CreateFooter = Footer.render();
    return CreateHeader + CreateMain + CreateFooter;
  },

  afterRender() {
    const getIdP = document.querySelector('#mainContent');
    const createJumbotron = document.createElement('section-jumbotron');
    createJumbotron.classList.add('jumbotron');
    const createProduct = document.createElement('product-service');
    createProduct.classList.add('product');
    const createAbout = document.createElement('about-us');
    createAbout.classList.add('about');
    const createTeam = document.createElement('our-team');
    createTeam.classList.add('team');
    getIdP.append(createJumbotron, createProduct, createAbout, createTeam);
  },
};

export default HOME;
