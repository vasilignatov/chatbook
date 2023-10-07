import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelectedUser } from '../../contexts/SelectedUserContext';
import { useAuth } from '../../contexts/AuthContext';
import { getUserById } from '../../services/userService';

const HistoryCard = ({ userData }) => {
    const { user } = useAuth();
    const [friend, setFriend] = useState({});
    // const [lastMessage, setLastMessage] = useState();

    useEffect(() => {
        async function fetchData() {
            const chatRoomFriendId = userData.roomInfo.userIds.filter(id => id != user._id)[0];
            const friendInfo = await getUserById(chatRoomFriendId);
            setFriend(friendInfo);
        }
        fetchData();
    }, []);
    
    return (
        <NavLink
            to={`messages/${userData.chatRoomId}`}
            className={({ isActive, isPending }) =>
                isActive
                    ? 'sidebar__history__cell noselect active'
                    : 'sidebar__history__cell noselect'
            }
        >
            <div className="sidebar__history__cell__img_wp">
                <img
                    src={friend.imageUrl}
                    alt="User image" />
            </div>

            <div className="sidebar__history__cell__wrapper">
                <p className="sidebar__history__cell__username">{friend?.firstName + ' ' + friend?.lastName}</p>
                <p className="sidebar__history__cell__message">
                    {userData.text}
                </p>
            </div>
        </NavLink>
    )
}

export default HistoryCard;