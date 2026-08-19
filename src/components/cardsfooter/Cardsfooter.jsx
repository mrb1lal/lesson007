import "./cardsfooter.css";
import frame19 from "../../assets/Frame 19.png";
export default function Cardsfooter() {
  return (
    <div className="cardsfooter_container">
      <div>
        <h1>Let’s make things happen</h1>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
      </div>
      <img className="frame19" src={frame19} alt="" />
    </div>
  );
}
