const Header = () => {
    return (
        <header className="header">
            <div className="nav_wrapper left">
                <img
                    src="imgs/Facebook_Logo_(2019).svg"
                    className="header__logo"
                    alt="Logo"
                />
                <span className="circle">
                    <i className="fa-solid fa-magnifying-glass" />
                </span>
            </div>
            <div className="nav_wrapper right">
                <span className="circle">
                    <i className="fa-solid fa-bell" />
                </span>
                <span className="circle">
                    <img
                        className="circle__img"
                        src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-1/103099075_3542232225804330_8428963615716529751_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aTnVe3Ne9LkAX9l-Nyh&_nc_ht=scontent-otp1-1.xx&oh=00_AfBwMw4VWK9aAfuHDJrc2o9XW0UArMHATIQauC6GVxCtkQ&oe=64A6B2A2"
                        alt="profile image"
                    />
                </span>
            </div>
        </header>

    )
}

export default Header;