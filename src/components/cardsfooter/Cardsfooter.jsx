import { useTranslation } from "react-i18next";
import "./cardsfooter.css";
import frame19 from "../../assets/Frame 19.png";

export default function Cardsfooter({ id }) {
  const { t } = useTranslation();

  return (
    <div id={id} className="cardsfooter_container">
      <div>
        <h1>{t("cardsfooter.title")}</h1>
        <p>{t("cardsfooter.description")}</p>
      </div>
      <img className="frame19" src={frame19} alt="" />
    </div>
  );
}