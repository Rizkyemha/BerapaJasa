import CONFIG from './config';
import urlParse from '../routes/url-parse';

const API_ENDPOINT = {
  register: `${CONFIG.DB_BERAPA_JASA}register`,
  login: `${CONFIG.DB_BERAPA_JASA}login`,
  registrasi_pinjaman: `${CONFIG.DB_BERAPA_JASA}new-loan/${urlParse.WithoutCombiner().id}`,
  getloans: (queryParam1, queryParam2) => `${CONFIG.DB_BERAPA_JASA}profile/${urlParse.WithoutCombiner().id}?jenis_loan=${queryParam1}&status_lunas=${queryParam2}`,
};

export default API_ENDPOINT;
