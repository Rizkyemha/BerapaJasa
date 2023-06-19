/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class BerapaJasaDBSource {
  static async register(requestBody) {
    if (!requestBody) {
      return null;
    }
    const response = await fetch(API_ENDPOINT.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: await JSON.stringify(requestBody),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.user;
  }

  static async register_pinjaman(requestBody) {
    if (!requestBody) {
      return null;
    }
    const response = await fetch(API_ENDPOINT.registrasi_pinjaman, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: await JSON.stringify(requestBody),
    });
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async login(requestBody) {
    if (!requestBody) {
      return null;
    }
    const response = await fetch(API_ENDPOINT.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: await JSON.stringify(requestBody),
    });
    const responseJson = await response.json();
    return responseJson.user;
  }

  static async getloans(queryParam1, queryParam2) {
    const response = await fetch(API_ENDPOINT.getloans(queryParam1, queryParam2), {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.loan;
  }
}

export default BerapaJasaDBSource;
