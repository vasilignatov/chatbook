const HeaderSearch = ({ suggestions, isVisibleSearch }) => {
    const mapped = suggestions.map(user => {
        return (<div key={user._id} className="header__dropdown__hd-wp ">
            <div className="hd_image">
                <span className="circle">
                    <img
                        className="circle__img"
                        src={user.imageUrl}
                    />
                </span>
            </div>
            <div className="hd_title">{user.fullName}</div>
        </div>)
    });

    return (
        <div className={`searchContainer ${isVisibleSearch ? 'visible' : ''}`}>

            {
                suggestions !== null
                    ? suggestions.length == 0
                        ? <p className="no-results">No results!</p>
                        : mapped
                    : null
            }

        </div>
    )
}

export default HeaderSearch;