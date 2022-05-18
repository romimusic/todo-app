import '../styles/Header.css'



const Header = () => {
  return (
    <header className="header">
      <section className="header__logo">
        <span className="material-icons">home</span>
      </section>

      <section className="header__profile">
        <figure className="header__profile-figure">
          <img className="header__profile-image" src="../img/avatar.jpg" alt="Profile" />
        </figure>
      </section>
    </header>
  );
}

export default Header;