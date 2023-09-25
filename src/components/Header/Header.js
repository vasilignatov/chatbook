import './Header.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getSuggestions } from '../../services/userService';
import HeaderDropdown from './HeaderDropdown';
import HeaderSearch from './HeaderSearch';
import useDebaunce from '../../hooks/useDebaunce';
const debaunceTime = 2000;

const Header = () => {
    const { user } = useAuth();
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

    const [searchInput, setSearchInput] = useState(null);
    const [suggestions, setSuggestion] = useState(null);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);

    const searchValue = useDebaunce(searchInput, 500);

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
        console.log(value);
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

    return (
        <header className="header">
            <div className="nav_wrapper left">
                <h1>chatbook</h1>

                <input
                    type='text'
                    className='input header__search'
                    placeholder='  Търси приятели'
                    onChange={handleInputChange}
                />

                {
                    isVisibleSearch && <HeaderSearch suggestions={suggestions} isVisibleSearch={isVisibleSearch} />
                }

            </div>
            <div className="nav_wrapper right">
                <span className="circle--big">
                    <i className="fa-solid fa-bell" />
                </span>
                <span className="circle--big" onClick={onClickDropdown}>
                    <img
                        className="circle__img"
                        // TODO
                        src={
                            user.imageUrl
                                ? user.imageUrl
                                : "https://ik.imagekit.io/8brpz6ecl/vasilignatov_dev/IMG_0631.JPG?updatedAt=1687415333369"
                        }
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