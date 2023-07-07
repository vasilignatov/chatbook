import { NavLink } from 'react-router-dom';
import { useSelectedChat } from '../../contexts/userContext';

const HistoryCard = ({ userData }) => {

    const { selectedUserId } = useSelectedChat();
    console.log('selected: ', selectedUserId);

    return (
        <NavLink to={`/messages/${userData.userId}`}>
            <div className="sidebar__history__cell noselect ">
                <div className="sidebar__history__cell__img_wp">
                    <img src={userData.imageUrl} alt="User image" />
                </div>
                <div className="sidebar__history__cell__wrapper">
                    <p className="sidebar__history__cell__username">{userData.name}</p>
                    <p className="sidebar__history__cell__message">{userData.lastMessage}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default HistoryCard;