
const HeaderSearch = ({ suggestions, isVisibleSearch, onClickSuggestion }) => {

    const mappedSuggestions = suggestions.map(user => {
        return (
            <div
                key={user._id}
                className="header__dropdown__hd-wp noselect"
                onClick={(ev) => onClickSuggestion(ev, user._id)}
            >
                <div className="hd_image">
                    <span className="circle">
                        <img
                            className="circle__img"
                            src={user.imageUrl}
                        />
                    </span>
                </div>
                <div className="hd_title">{user.fullName}</div>
            </div>
        )
    });

    return (
        <div className={`searchContainer ${isVisibleSearch ? 'visible' : ''}`}>

            {
                suggestions !== null
                    ? suggestions.length == 0
                        ? <p className="no-results">No results!</p>
                        : mappedSuggestions
                    : null
            }

        </div>
    )
}

export default HeaderSearch;