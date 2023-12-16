import header from "/img/header.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={header} alt="Org" />
    </header>
  );
}

export default Header;
