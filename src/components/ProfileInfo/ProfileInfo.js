const ProfileInfo = ({ selectedUser }) => {
  return (
    <section className="profile_info">
      <div className="profile_info__header">
        <div className="profile_info__header__img_wp circle">
          <img src={selectedUser.imageUrl} alt="User Profile Image" />
        </div>
        <h3>{selectedUser.firstName + ' ' + selectedUser.lastName}</h3>
        <p>На линия в момента</p>
      </div>
      <div className="profile_info__icons_wp">
        <div className="icon-box">
          <span className="circle">
            <i className="fa-brands fa-facebook" />
          </span>
          <p>Профил</p>
        </div>
        <div className="icon-box">
          <span className="circle">
            <i className="fa-solid fa-bell" />
          </span>
          <p>Изключване на звука</p>
        </div>
        <div className="icon-box">
          <span className="circle">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
          <p>Търсене</p>
        </div>
      </div>
      <div className="profile_info__dropdown-wp">
        <div className="dropdown noselect">
          <h4>Пресонализиране на чата</h4>
          <i className="fa-solid fa-chevron-down" />
        </div>
        <div className="dropdown noselect">
          <h4>Media &amp; files</h4>
          <i className="fa-solid fa-chevron-down" />
        </div>
        <div className="dropdown noselect">
          <h4>Поверителност и поддръжка</h4>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </div>
    </section>

  )
}

export default ProfileInfo;