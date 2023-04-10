import { useRef, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditAvatarPopup(props) {
    const inputRef = useRef();
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => inputRef.current.value = currentUser.avatar || '', [currentUser, props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        if (currentUser.avatar !== inputRef.current.value) props.onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }


    return (
        <PopupWithForm
            {...props}
            onSubmit={handleSubmit}
            popupName='popup-update-avatar'
            formName='updateAvatar'
            title='Обновить аватар'
            buttonText='Сохранить'
        >
            <input
                type="url"
                name="avatar"
                className="form__field form__field_type_link"
                placeholder="Ссылка на аватар"
                required
                ref={inputRef}
                onFocus={() => inputRef.current.select()}
            />
            <span className="form__alert" id="avatar-error"> </span>
        </PopupWithForm>
    )
}
