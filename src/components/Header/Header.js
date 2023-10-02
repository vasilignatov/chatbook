import './Header.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getSuggestions } from '../../services/userService';
import * as chatService from '../../services/chatService';

import HeaderDropdown from './HeaderDropdown';
import HeaderSearch from './HeaderSearch';
import useDebaunce from '../../hooks/useDebaunce';
const debaunceTime = 1000;

const Header = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

    const [searchInput, setSearchInput] = useState(null);
    const [suggestions, setSuggestion] = useState(null);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);

    const searchValue = useDebaunce(searchInput, debaunceTime);

    useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setSuggestion(null);
            setIsVisibleSearch(false);
        } else {
            getSuggestions(searchValue)
                .then(data => {
                    setSuggestion(data);
                    setIsVisibleSearch(true);
                });
        }
    }, [searchValue]);

    function handleInputChange(ev) {
        const value = ev.target.value.trim();

        if (value.length !== 0) {
            setSearchInput(value);
        } else {
            setSearchInput('')
            setIsVisibleSearch(false);
            setSuggestion([]);
        }
    }

    function onClickDropdown() {
        return setIsVisibleDropdown(!isVisibleDropdown)
    }

    async function onClickSuggestion(ev, userId) {
        // close serch  dropdown
        setSearchInput('');
        setSuggestion(null);
        setIsVisibleSearch(false);
        // create room
        const room = await chatService.initiate([userId]);
        console.log(room);
        // navigate to room
        navigate(`messages/${room.chatRoomId}`);
        // update sidebar with new room
    }

    return (
        <header className="header">
            <div className="nav_wrapper left">
                <h1>chatbook</h1>

                <input
                    type='text'
                    className='input header__search'
                    placeholder='  Търси приятели'
                    onChange={handleInputChange}
                    defaultValue={searchInput}
                />

                {
                    isVisibleSearch && <HeaderSearch
                        suggestions={suggestions}
                        isVisibleSearch={isVisibleSearch}
                        onClickSuggestion={onClickSuggestion}
                    />
                }

            </div>

            <div className="nav_wrapper right">
                <span className="circle--big">
                    <i className="fa-solid fa-bell" />
                </span>
                <span className="circle--big" onClick={onClickDropdown}>
                    <img
                        className="circle__img"
                        src={user.imageUrl}
                        alt="profile image"
                    />
                </span>
            </div>

            {
                isVisibleDropdown && <HeaderDropdown />
            }

        </header>
    )
}

export default Header;