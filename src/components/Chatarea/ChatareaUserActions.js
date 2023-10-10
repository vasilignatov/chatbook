import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { socket } from '../../socket';

const ChatareaUserActions = ({ roomId }) => {

    const [isTyping, setIsTyping] = useState();
    const { user } = useAuth();

    async function sendMessage(e) {
        const input = e.target;
        if (e.key === "Enter") {
            const text = input.value.trim();
            input.value = '';

            const message = { roomId, senderId: user._id, text };
            setIsTyping(false);
            socket.emit('user_typing', roomId, false);
            socket.emit('send_message', message);
        } else if (!isTyping && input.value !== '') {
            setIsTyping(true);
            socket.emit('user_typing', roomId, true);
        } else if (isTyping && input.value == '') {
            setIsTyping(false);
            socket.emit('user_typing', roomId, false);
        }
    }

    return (
        <div className="chatarea__useraction">
            <div className="useraction_container noselect">
                <span className="circle">
                    <i className="fa-solid fa-circle-plus" />
                </span>
                <span className="circle">
                    <i className="fa-solid fa-images" />
                </span>
                <span className="circle">
                    <i className="fa-solid fa-note-sticky" />
                </span>
                <span className="circle">
                    <i>GIF</i>
                </span>
            </div>
            <div className="useraction__input">
                <input
                    className="input"
                    type="text"
                    placeholder="Aa"
                    onKeyDown={sendMessage}
                />
                <span className="cont-height">
                    <i className="fa-solid fa-face-smile" />
                </span>
            </div>
            <div className="useraction__like-btn">
                <span className="circle">
                    <i className="fa-solid fa-thumbs-up" />
                </span>
            </div>
        </div>
    )
}

export default ChatareaUserActions;