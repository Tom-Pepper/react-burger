import {API_URL} from "./constants";

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponse(res) {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMenu() {
    return fetch(`${this._url}/ingredients`, {
      headers: this._headers,
    })
      .then(res => this._getResponse(res))
  }

  putOrder(orderIDs) {
    return fetch(`${this._url}/orders`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        ingredients: orderIDs,
      })
    })
      .then(res => this._getResponse(res));
  }
}

const api = new Api({
  url: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;
