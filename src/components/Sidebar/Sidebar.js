import HistoryCard from './HistoryCard';

const chatHistory = [
    {
        'userId': '1234aslkdflknj12123',
        'name': 'Велислав Боянов',
        'imageUrl': 'imgs/user_img.jpg',
        'lastMessage': 'Какво правиш?',
        'roomId': 1231231854987
    },
    {
        'userId': '1j121234fasdff41546s',
        'name': 'Nikolai Petkov',
        'imageUrl': 'imgs/user_img.jpg',
        'lastMessage': 'Как си?',
        'roomId': 1231897987789
    },
    {
        'userId': '12асдф4654654а6сд543',
        'name': 'Strahil Stoqnov',
        'imageUrl': 'imgs/user_img.jpg',
        'lastMessage': 'Какво правиш?',
        'roomId': 1223185498731
    },
]

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <div className="sidebar__header">
                <h1>Чатове</h1>
                <div className="sidebar__header__menu">
                    <span className="circle">
                        <i className="fa-solid fa-ellipsis" />
                    </span>
                    <span className="circle">
                        <i className="fa-solid fa-video" />
                    </span>
                    <span className="circle">
                        <i className="fa-solid fa-pen-to-square" />
                    </span>
                </div>
            </div>
            <div className="sidebar__search">
                <label className="sidebar__search__wrapper">
                    <span className="cont-height">
                        <img src="imgs/search-icon.svg" alt="" />
                    </span>
                    <input className="input" type="text" placeholder="Търсене в Messenger" />
                </label>
            </div>
            <div className="sidebar__menu">
                <div className="cont-box cont-height sb_m_clicked noselect">Входяща кутия</div>
                <div className="cont-box cont-height noselect">Общности</div>
            </div>

            {/* HISTORY CONTAINER */}
            <div className="sidebar__history">


                {
                    chatHistory.map((x, i) => {
                        return <HistoryCard key={x.userId} userData={x} />
                    })
                }



                {
                    /* <div className="sidebar__history__cell noselect">
                    <div className="sidebar__history__cell__img_wp">
                        <img src="imgs/user_img.jpg" alt="User image" />
                    </div>
                    <div className="sidebar__history__cell__wrapper">
                        <p className="sidebar__history__cell__username">Велислав Боянов</p>
                        <p className="sidebar__history__cell__message">Велислав Боянов</p>
                    </div>
                    </div> 
                */}

            </div>
        </aside>

    )
}

export default Sidebar;