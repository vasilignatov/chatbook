import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import { getChatMessagesByRoomId } from '../../services/chatService';
import { getUserById } from '../../services/userService';

import ChatareaHeader from './ChatareaHeader';
import ChatareaMessages from './ChatareaMessages';
import ChatareaUserActions from './ChatareaUserActions';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { useSelectedUser } from '../../contexts/SelectedUserContext';
import { useAuth } from '../../contexts/AuthContext';

const initalState = {
    chatMessages: [],
    users: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'get_messages': {
            state = action.payload;
            return state;
        }
        case 'add_message':
            state.chatMessages = [...state.chatMessages, action.payload];
            return state; 
        default:
            return state;
    }
}

const Chatarea = () => {
    const { roomId } = useParams();

    const { user } = useAuth();

    const { selectedUser, setSelectedUser } = useSelectedUser();
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [roomData, setRoomData] = useState();

    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {
        (async () => {
            const room = await getChatMessagesByRoomId(roomId);
            const chatRoomFriendId = room.users.filter(u => u._id != user.id)[0]._id;
            const friendInfo = await getUserById(chatRoomFriendId);
            setSelectedUser(friendInfo);
            dispatch({type: 'get_messages', payload: room});
            console.log(state);
        })();
    }, [roomId]);

    function setIsVisible() {
        setIsProfileVisible(!isProfileVisible);
    }

    return (
        <>
            <section className="chatarea">
                <div className="chatarea_container">
                    <ChatareaHeader setIsVisible={setIsVisible} />
                    <ChatareaMessages roomData={state} />
                    <ChatareaUserActions dispatch={dispatch} roomId={roomId}/>
                </div>
            </section>
            {
                isProfileVisible && <ProfileInfo />
            }
        </>
    )
}

export default Chatarea;