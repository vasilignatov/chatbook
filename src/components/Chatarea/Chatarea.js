import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getChatMessagesByRoomId } from '../../services/chatService';
import { getUserById } from '../../services/userService';

import ChatareaHeader from './ChatareaHeader';
import ChatareaMessages from './ChatareaMessages';
import ChatareaUserActions from './ChatareaUserActions';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { useAuth } from '../../contexts/AuthContext';
import { socket } from '../../socket';

const Chatarea = () => {
    const { roomId } = useParams();
    const { user } = useAuth();

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isTyping, setIsTyping] = useState();

    const [selectedUser, setSelectedUser] = useState({});
    const [chatMessages, setChatMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const room = await getChatMessagesByRoomId(roomId);
            const chatRoomFriendId = room.users.filter(u => u._id != user._id)[0]._id;
            const friendInfo = await getUserById(chatRoomFriendId);
            setSelectedUser(friendInfo);

            setUsers(room.users);
            setChatMessages(room.chatMessages);

            socket.emit('join_room', roomId, friendInfo.id);
        })();
        return () => {
            socket.emit('leave_room', roomId);
        }
    }, [roomId]);

    useEffect(() => {
        const recieveMessageListener = (message) => {
            console.log('Message recieved', message);
            setChatMessages([...chatMessages, message]);
        }

        socket.on('receive_message', recieveMessageListener);

        return () => {
            socket.off('receive_message', recieveMessageListener);
        }
    }, [chatMessages]);

    function setIsVisible() {
        setIsProfileVisible(!isProfileVisible);
    }



    return (
        <>
            <section className="chatarea">
                <div className="chatarea_container">
                    <ChatareaHeader setIsVisible={setIsVisible} selectedUser={selectedUser} />
                    <ChatareaMessages roomData={{ chatMessages, users, isTyping, roomId }} />
                    <ChatareaUserActions roomId={roomId} setIsTyping={setIsTyping} />
                </div>
            </section>

            {
                isProfileVisible && <ProfileInfo selectedUser={selectedUser} />
            }
        </>
    )
}

export default Chatarea;