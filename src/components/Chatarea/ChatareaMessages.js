import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { socket } from '../../socket';
import Typing from './Typing/Typing';
const messageTemplate = (msg, type) => (
    <div className={`message_row ${type}`} key={msg._id}>
        <div className="message_row__content uslm">{msg.text}</div>
    </div>
);

const ChatareaMessages = ({ roomData }) => {
    const { user } = useAuth();
    const [userIsTyping, setUserIsTyping] = useState();
    const { roomId } = roomData;

    useEffect(() => {
        const userIsTypingHandler = (value) => {
            console.log('value from socket handler: ', value);
            setUserIsTyping(value);
        }

        socket.on('typing_notify', userIsTypingHandler);

        return () => {
            socket.off('typing_notify', userIsTypingHandler);
        }
    }, []);

    return (
        <div className="chatarea__messages">
            <div className="chatarea__messages__wrapper">

                {
                    roomData.chatMessages.map(msg => {
                        if (msg.postedByUserId._id == user._id) {
                            return messageTemplate(msg, 'user');
                        }
                        return messageTemplate(msg, 'fr');
                    })
                }

                {
                    userIsTyping && <Typing />
                }
            </div>
        </div>
    )
}

export default ChatareaMessages;