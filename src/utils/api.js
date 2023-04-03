class Api {
  #baseurl;
  #headers;
  constructor({ baseUrl, headers }) {
    this.#baseurl = baseUrl;
    this.#headers = headers;
  }

  #onResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  getAllInfo() {
    return Promise.all([this.getProductsList(), this.getUserInfo()]);
  }

  getProductsList() {
    return fetch(`${this.#baseurl}/products`, {
      headers: this.#headers,
    }).then(this.#onResponse);
  }

  getUserInfo() {
    return fetch(`${this.#baseurl}/users/me`, {
      headers: this.#headers,
    }).then(this.#onResponse);
  }

  search(searchQuery) {
    return fetch(`${this.#baseurl}/products/search?query=${searchQuery}`, {
      headers: this.#headers,
    }).then(this.#onResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.#baseurl}/users/me`, {
      method: "PATCH",
      headers: this.#headers,
      body: JSON.stringify({ name, about }),
    }).then(this.#onResponse);
  }

  changeLikeProductStatus(productID, like) {
    return fetch(`${this.#baseurl}/products/likes/${productID}`, {
      method: like ? "DELETE" : "PUT",
      headers: this.#headers,
    }).then(this.#onResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.react-learning.ru",
  headers: {
    "content-type": "application/json",
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4YzIiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ1LCJleHAiOjE3MTAzMzg0NDV9.RLbCtjvzUzZAj7AOqF0vNQDYGH1UOIRQQQsId5FNkpc",
  },
});

export default api;