import { logDOM } from '@testing-library/react';
import { useAuth } from '../../contexts/AuthContext';
import { useSelectedUser } from '../../contexts/SelectedUserContext';

const messageTemplate = (msg, type) => (
    <div className={`message_row ${type}`} key={msg._id}>
        <div className="message_row__content uslm">{msg.text}</div>
    </div>
);

const ChatareaMessages = ({ roomData }) => {

    const { user } = useAuth();
    return (
        <div className="chatarea__messages">
            <div className="chatarea__messages__wrapper">

                {
                    roomData?.chatMessages.map(msg => {
                        if (msg.postedByUserId._id == user.id) {
                            return messageTemplate(msg, 'user');
                        } else {
                            return messageTemplate(msg, 'fr');
                        }
                    })
                }

            </div>
        </div>
    )
}

export default ChatareaMessages;