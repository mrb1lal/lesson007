import { useTranslation } from "react-i18next";
import "./Banner.css";
import stration from "../../assets/Illustration.png";
import logotypes from "../../assets/Logotypes.png";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="banne_wrapper">
        <div className="banner_left">
          <h1 dangerouslySetInnerHTML={{ __html: t("banner.title") }} />
          <p dangerouslySetInnerHTML={{ __html: t("banner.description") }} />
          <button className="banner_left_btn">{t("banner.cta")}</button>
        </div>
        <img className="stration" src={stration} />
      </div>
      <img className="logotypes" src={logotypes} />
    </div>
  );
}