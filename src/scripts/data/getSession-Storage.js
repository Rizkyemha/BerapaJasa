import CONFIG from '../globals/config';

const getDataLogin = {
  userLogin() {
    const storageData = sessionStorage.getItem(CONFIG.SESSION_STORAGE_KEY);
    const jsonstorageData = JSON.parse(storageData);
    return jsonstorageData;
  },
};

export default getDataLogin;
