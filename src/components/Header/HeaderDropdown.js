import { useAuth } from '../../contexts/AuthContext';
import { logout } from '../../services/authService';

const HeaderDropdown = ({ }) => {
    const { user, onLogout } = useAuth();

    return (
        <div className="header__dropdown">
            <div className="header__dropdown__hd">
                <div className="header__dropdown__hd-wp">
                    <div className="hd_image">
                        <span className="circle">
                            <img
                                className="circle__img"
                                src={
                                    user.imageUrl
                                        ? user.imageUrl
                                        : "https://ik.imagekit.io/8brpz6ecl/vasilignatov_dev/IMG_0631.JPG?updatedAt=1687415333369"
                                }
                            />
                        </span>
                    </div>
                    <div className="hd_title">Васил Игнатов</div>
                </div>
            </div>

            <div className="header__dropdown__row">
                <div className="header__dropdown__row-wp">
                    <span className="circle">
                        <i class="fa-solid fa-gear"></i>
                    </span>
                    <div className="row__title">Настройки на профила</div>
                </div>
            </div>
            <div className="header__dropdown__row">
                <div className="header__dropdown__row-wp">
                    <span className="circle">
                        <img className="circle__img exit" src='imgs/icons8-exit-66.png' />
                    </span>
                    <div className="row__title">Изход</div>
                </div>
            </div>


        </div>
    )
}

export default HeaderDropdown;