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
                        src="https://ik.imagekit.io/8brpz6ecl/vasilignatov_dev/IMG_0631.JPG?updatedAt=1687415333369"
                        alt="profile image"
                    />
                </span>
            </div>
        </header>
    )
}

export default Header;