import Main from '../components/main-content';
import '../components/profile/profile-side-bar';
import '../components/profile/profile-header';
import '../components/profile/profile-content';

const PROFILE = {
  async render() {
    const main = Main.render();
    return main;
  },

  async afterRender() {
    const getMain = document.querySelector('#mainContent');
    const createHeader = document.createElement('profile-header');
    const createSideBar = document.createElement('side-bar');
    const createContent = document.createElement('profile-content');
    getMain.append(createSideBar, createHeader, createContent);
  },
};

export default PROFILE;
