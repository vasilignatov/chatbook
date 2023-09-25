import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { socket } from '../../socket';

const HeaderDropdown = () => {
    const { user, onLogout } = useAuth();
    const navigate = useNavigate();

    async function logout() {
        const response = await authService.logout({ refreshToken: user.refreshToken });
        console.log(response);

        if (response.logout) {
            return onLogout();
        }
        socket.disconnect();
        onLogout();
        navigate('404');
    }

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
                <div className="header__dropdown__row-wp" onClick={logout}>
                    <span className="circle">
                        <img className="circle__img exit" src='https://ik.imagekit.io/8brpz6ecl/chatbook/icons8-exit-66.png?updatedAt=1695390637017' />
                    </span>
                    <div className="row__title">Изход</div>
                </div>
            </div>


        </div>
    )
}

export default HeaderDropdown;