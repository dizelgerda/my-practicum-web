class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handelResponse(res) {
    if (res.ok) return res.json();
    else return Promise.reject(res.json())
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
    }).then(this._handelResponse);
  }
}

export const MoviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
