import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const language = [
  { code: "uz", label: "Uzbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar_container">
      <div className="navbar-wrapper">
        <img className="logo" src={logo} alt="Positivus logo" />
        <h1>{t("navbar.brand")}</h1>
      </div>

      <button
        className="burger_menu"
        aria-label="Toggle navigation"
      >
        <span className="burger_bar"></span>
        <span className="burger_bar"></span>
        <span className="burger_bar"></span>
      </button>

      <nav className="navbar">
        <ul>
          <li>
            <a className="nav_link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("use-cases"); }}>
              {t("navbar.useCases")}
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("pricing"); }}>
              {t("navbar.pricing")}
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}>
              {t("navbar.blog")}
            </a>
          </li>
          <li>
            <a className="nav_link quote_btn" href="#" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              {t("navbar.quote")}
            </a>
          </li>
        </ul>
      </nav>

      <select
        className="select"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {language.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Navbar;