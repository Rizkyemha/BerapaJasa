import CONFIG from '../globals/config';

const setDataLogin = {
  userLogin(user) {
    sessionStorage.setItem(CONFIG.SESSION_STORAGE_KEY, user);
    console.log('sukses menyimpan');
  },
};

export default setDataLogin;
