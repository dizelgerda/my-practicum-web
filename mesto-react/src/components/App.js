import avatarDefault from '../images/user-icon-default.svg';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import DeleteCardPopup from './DeleteCardPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import { useState, useEffect } from 'react';

export default function App() {
    const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
    const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);
    const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
    const [selectedCard, handleCardClick] = useState(null);
    const [currentUser, setCurrentUser] = useState({
        name: 'Загрузка...',
        avatar: avatarDefault,
    });
    const [cards, setCards] = useState([]);
    const [deleteCandidate, setDeleteCandidate] = useState(null);
    const [statusLoading, setStatusLoading] = useState(false);

    useEffect(() => {
        api.getUserInformation()
            .then(accountData => setCurrentUser(accountData))
            .catch(err => console.log(err));

        api.getInitialCards()
            .then(initialCards => setCards(initialCards))
            .catch(err => console.log(err));
    }, []);

    const closeAllPopups = () => {
        handleEditProfileClick(false);
        handleAddPlaceClick(false);
        handleEditAvatarClick(false);
        handleCardClick(null);
        setDeleteCandidate(null);
    };

    function handleUpdateUser(data) {
        setStatusLoading(true);
        api.setUserInformation(data)
            .then(accountData => {
                setCurrentUser(accountData);
                closeAllPopups();
            })
            .catch(err => console.log(err))
            .finally(() => setStatusLoading(false));
    }

    function handleUpdateAvatar(data) {
        setStatusLoading(true);
        api.setUserAvatar(data)
            .then(accountData => {
                setCurrentUser(accountData);
                closeAllPopups();
            })
            .catch(err => console.log(err))
            .finally(() => setStatusLoading(false));
    }

    function handleAddPlaceSubmit(data) {
        setStatusLoading(true);
        api.addCard(data)
            .then(card => {
                setCards([card, ...cards]);
                closeAllPopups();
            })
            .catch(err => console.log(err))
            .finally(() => setStatusLoading(false));
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLike(card._id, !isLiked)
            .then((newCard) => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
            .catch(err => console.log(err));
    }

    function handleCardDelete(card) {
        setStatusLoading(true);
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter(item => item._id !== card._id));
                closeAllPopups();
            })
            .catch(err => console.log(err))
            .finally(() => setStatusLoading(false));
    }

    return (
        <div className="root">
            <CurrentUserContext.Provider value={currentUser}>
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} statusLoading={statusLoading} />
                <DeleteCardPopup isOpen={deleteCandidate} onClose={closeAllPopups} onDeleteCard={handleCardDelete} statusLoading={statusLoading} />


                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} statusLoading={statusLoading} />
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} statusLoading={statusLoading} />

                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={setDeleteCandidate}
                    cards={cards}
                />
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}
