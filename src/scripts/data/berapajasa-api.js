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
}

export default BerapaJasaDBSource;
