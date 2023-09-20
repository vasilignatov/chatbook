

const ChatareaUserActions = () => {
    function sendMessage(e) {
        if (e.key === "Enter") {
            console.log(e.target);
            e.target.value = '';
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