import { useTranslation } from "react-i18next";
import "./Cards.css";
import cardsss from "../../assets/Illustration (1).png";
import illusion from "../../assets/Illustration (2).png";

export default function Cards({ id }) {
  const { t } = useTranslation();

  const cards = [
    {
      title1: t("cards.seo.title1"),
      title2: t("cards.seo.title2"),
      image: cardsss,
      alt: t("cards.seo.title1") + " " + t("cards.seo.title2"),
      variant: "card_light",
    },
    {
      title1: t("cards.ppc.title1"),
      title2: t("cards.ppc.title2"),
      image: illusion,
      alt: t("cards.ppc.title1") + " " + t("cards.ppc.title2"),
      variant: "card_green",
    },
    {
      title1: t("cards.seo.title1"),
      title2: t("cards.seo.title2"),
      image: cardsss,
      alt: t("cards.seo.title1") + " " + t("cards.seo.title2"),
      variant: "card_light",
    },
    {
      title1: t("cards.ppc.title1"),
      title2: t("cards.ppc.title2"),
      image: illusion,
      alt: t("cards.ppc.title1") + " " + t("cards.ppc.title2"),
      variant: "card_green",
    },
    {
      title1: t("cards.seo.title1"),
      title2: t("cards.seo.title2"),
      image: cardsss,
      alt: t("cards.seo.title1") + " " + t("cards.seo.title2"),
      variant: "card_light",
    },
    {
      title1: t("cards.ppc.title1"),
      title2: t("cards.ppc.title2"),
      image: illusion,
      alt: t("cards.ppc.title1") + " " + t("cards.ppc.title2"),
      variant: "card_green",
    },
  ];

  return (
    <div id={id} className="cards_section">
      <div className="cards_grid">
        {cards.map((card, index) => (
          <div key={index} className={`service_card ${card.variant}`}>
            <div className="card_left">
              <div className="card_title">
                <h2><span>{card.title1}</span></h2>
                <h2><span>{card.title2}</span></h2>
              </div>
              <div className="card_link">
                <span className="arrow_icon">➔</span>
                <p>{t("cards.learnMore")}</p>
              </div>
            </div>
            <div className="card_right">
              <img src={card.image} alt={card.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}