
const ChatareaHeader = ({ setIsVisible, selectedUser }) => {
    return (
        <div className="chatarea__header">
            <div className="chatarea__header__user">
                <div className="user-img-wp">
                    <img src={selectedUser?.imageUrl} alt="User img" />
                </div>
                <div className="user-info">
                    <h3>{selectedUser?.firstName + ' ' + selectedUser?.lastName}</h3>
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
                    <span className="circle" onClick={() => setIsVisible()}>
                        <i className="fa-solid fa-circle-info" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChatareaHeader;