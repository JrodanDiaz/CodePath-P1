import "../App.css";
import Card from "./Card";
import ICE_CREAM_DATA from "../assets/ICECREAM_DATA";

function CardContainer() {
  return (
    <>
      <div className="card-container">
        {ICE_CREAM_DATA.map((location) => (
          <Card
            img={location.img}
            name={location.name}
            key={location.name}
            type={location.type}
            menu={location.menu}
          />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
