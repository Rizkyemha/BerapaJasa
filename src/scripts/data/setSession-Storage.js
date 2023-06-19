import CONFIG from '../globals/config';

const setDataLogin = {
  userLogin(user) {
    sessionStorage.setItem(CONFIG.SESSION_STORAGE_KEY, user);
    console.log('sukses menyimpan');
  },
  dataLoan(loans) {
    sessionStorage.setItem(CONFIG.SESSION_STORAGE_KEY_LOAN, loans);
    console.log('sukses menyimpan');
  },
};

export default setDataLogin;
