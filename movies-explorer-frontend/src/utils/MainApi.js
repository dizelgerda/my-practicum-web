class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handelResponse(res) {
    if (res.ok) return res.json();
    else return Promise.reject(res.json())
  }

  authorization(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(this._handelResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
    })
    .catch((err) => Promise.reject(`Ошибка: ${err.status}`));
  }

  registration(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._handelResponse);
  }

  setUserInformation(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then(this._handelResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._handelResponse);
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(this._handelResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._token}`
      },
      credentials: 'include',
    })
    .then(this._handelResponse);
  }
}

export const MainApi = new Api({
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'https://api.kovalenko.diploma.nomoredomains.rocks'
});
