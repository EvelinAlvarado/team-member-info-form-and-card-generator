import "./Footer.css";

export function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png" }}
    >
      <div className="socialMedia">
        <a href="#">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/img/twitter.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="Logo" />
      <strong>Evelin Alvarado</strong>
    </footer>
  );
}
