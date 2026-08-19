import { useTranslation } from "react-i18next";
import "./Aside.css";

export default function Aside({ id }) {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <div className="aside_wrapper">
        <div className="aside_left">
          <h1>{t("aside.title")}</h1>
        </div>
        <p>{t("aside.description")}</p>
      </div>
    </div>
  );
}