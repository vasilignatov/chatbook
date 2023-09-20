import { logDOM } from '@testing-library/react';
import { useSelectedUser } from '../../contexts/SelectedUserContext';

const messageTemplate = (msg, type) => (
    <div className={`message_row ${type}`}>
        <div className="message_row__content uslm">{msg}</div>
    </div>
);

const ChatareaMessages = ({ roomData }) => {

    const { selectedUser: friend, setSelectedUser } = useSelectedUser();
    console.log(roomData);
    return (
        <div className="chatarea__messages">
            <div className="chatarea__messages__wrapper">

                {
                    roomData?.chatMessages.map(msg => {
                        if (msg.postedByUserId._id == friend._id) {
                            return messageTemplate(msg.text, 'fr');
                        } else {
                            return messageTemplate(msg.text, 'user');
                        }
                    })
                }

                {/* <div className="message_row fr">
                    <span className="circle">
                        <img src="imgs/user_img.jpg" alt="" />
                    </span>
                    <div className="message_row__content fflm">asdf</div>
                </div>
                <div className="message_row fr ">
                    <span className="circle">
                        <img src="imgs/user_img.jpg" alt="" />
                    </span>
                    <div className="message_row__content fllm">asdf</div>
                </div>
                <div className="message_row user ">
                    <div className="message_row__content uflm">asdf</div>
                </div>
                <div className="message_row user ">
                    <div className="message_row__content ullm">asdf</div>
                </div>
                <div className="message_row fr">
                    <span className="circle">
                        <img src="imgs/user_img.jpg" alt="" />
                    </span>
                    <div className="message_row__content fflm">asdf</div>
                </div>
                <div className="message_row fr">
                    <span className="circle">
                        <img src="imgs/user_img.jpg" alt="" />
                    </span>
                    <div className="message_row__content fmlm">asdf</div>
                </div>
                <div className="message_row fr">
                    <span className="circle">
                        <img src="imgs/user_img.jpg" alt="" />
                    </span>
                    <div className="message_row__content fllm">asdf</div>
                </div>
                <div className="message_row user">
                    <div className="message_row__content uflm">asdf</div>
                </div>
                <div className="message_row user">
                    <div className="message_row__content  umlm">asdf</div>
                </div>
                <div className="message_row user ">
                    <div className="message_row__content ullm">asdf 123</div>
                </div>
             */}
            </div>
        </div>
    )
}

export default ChatareaMessages;