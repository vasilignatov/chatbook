import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
    const { user } = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    function onClickDropdown() {
        return setIsVisible(!isVisible)
    }
    return (
        <header className="header">
            <div className="nav_wrapper left">
                <h1>chatbook</h1>
                <span className="circle--big">
                    <i className="fa-solid fa-magnifying-glass" />
                </span>
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
                isVisible && <HeaderDropdown  />
            }

        </header>
    )
}

export default Header;