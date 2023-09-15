import { NavLink } from 'react-router-dom';

const HistoryCard = ({ userData }) => {

    return (
        <NavLink 
            to={`messages/${userData.userId}`}
            className={({ isActive, isPending }) =>
                isActive
                    ? 'sidebar__history__cell noselect active'
                    : 'sidebar__history__cell noselect'
            }
        >
            <div className="sidebar__history__cell__img_wp">
                <img src={userData.imageUrl} alt="User image" />
            </div>
            <div className="sidebar__history__cell__wrapper">
                <p className="sidebar__history__cell__username">{userData.name}</p>
                <p className="sidebar__history__cell__message">{userData.lastMessage}</p>
            </div>
        </NavLink>
    )
}

export default HistoryCard; 