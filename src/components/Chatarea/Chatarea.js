import { useParams } from 'react-router-dom';

const Chatarea = () => {
    const { userId } = useParams();
    console.log(userId);
    return (
        <>
            <section className="chatarea">
                <div className="chatarea_container">
                    <div className="chatarea__header">
                        <div className="chatarea__header__user">
                            <div className="user-img-wp">
                                <img src="imgs/user_img.jpg" alt="User img" />
                            </div>
                            <div className="user-info">
                                <h3>Велислав Боянов</h3>
                                <p>На линия в момента</p>
                            </div>
                        </div>
                        <div className="chatarea__header__icons">
                            <div className="icons_wp">
                                <span className="circle">
                                    <i className="fa-solid fa-phone" />
                                </span>
                                <span className="circle">
                                    <i className="fa-solid fa-video" />
                                </span>
                                <span className="circle">
                                    <i className="fa-solid fa-circle-info" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="chatarea__messages">
                        <div className="chatarea__messages__wrapper">
                            <div className="message_row user">
                                <div className="message_row__content uslm">asdf</div>
                            </div>
                            <div className="message_row fr">
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
                        </div>
                    </div>
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
                            <input className="input" type="text" placeholder="Aa" />
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
                </div>
            </section>

            {/* <ProfileInfo /> */}
        </>
    )
}

export default Chatarea;