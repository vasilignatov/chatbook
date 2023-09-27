import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getChatMessagesByRoomId } from '../../services/chatService';
import { getUserById } from '../../services/userService';

import ChatareaHeader from './ChatareaHeader';
import ChatareaMessages from './ChatareaMessages';
import ChatareaUserActions from './ChatareaUserActions';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { useSelectedUser } from '../../contexts/SelectedUserContext';
import { useAuth } from '../../contexts/AuthContext';

const Chatarea = () => {
    const { roomId } = useParams();

    const { user } = useAuth();
    const { selectedUser, setSelectedUser } = useSelectedUser();

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [roomData, setRoomData] = useState();    

    useEffect(() => {
        const loadHistoryData = async () => {
            // return object {chatMessages, users} 
            const room = await getChatMessagesByRoomId(roomId);
            const chatRoomFriendId = room.users.filter(u => u._id != user.id)[0]._id;
            const friendInfo = await getUserById(chatRoomFriendId);
            setSelectedUser(friendInfo);
            setRoomData(room);
        }
        loadHistoryData();
    }, [roomId]);


    function setIsVisible() {
        setIsProfileVisible(!isProfileVisible);
    }

    return (
        <>
            <section className="chatarea">
                <div className="chatarea_container">
                    <ChatareaHeader setIsVisible={setIsVisible} />
                    <ChatareaMessages roomData={roomData} />
                    <ChatareaUserActions />
                </div>
            </section>
            {
                isProfileVisible && <ProfileInfo />
            }
        </>
    )
}

export default Chatarea;