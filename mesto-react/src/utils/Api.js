class Api {
    constructor({ baseUrl, token }) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    getUserInformation() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handelResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handelResponse);
    }

    setUserInformation(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(this._handelResponse);
    }

    setUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(this._handelResponse);
    }

    changeLike(id, isLike) {
        if (isLike) return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handelResponse);
        else return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handelResponse);
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(this._handelResponse);
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            },
        })
            .catch(err => console.log(err));
    }

    _handelResponse(res) {
        if (res.ok) return res.json();
        else return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token: 'bae5eb3e-724d-48c0-ab33-5c288df4c2f3'
});

export default api;
