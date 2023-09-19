import "../App.css";
import iceCream from "../assets/ice-cream-transparent.png";

function Header() {
  return (
    <>
      <div className="header">
        <img src={iceCream} alt="ice cream" id="ice-cream" />
        <h1 className="header-text">Miramar's Best Ice Cream</h1>
      </div>
    </>
  );
}

export default Header;
