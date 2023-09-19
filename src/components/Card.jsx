import "../App.css";

function Card({ img, name, type, menu }) {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img" />
        <div className="card-text">
          <h3>{name}</h3>
          <h5>{type}</h5>
        </div>
        <div className="btn-container">
          <a href={menu} target="_blank" rel="noopener noreferrer">
            {/* The above tags are so that the anchor tag opens a new tab */}
            <button className="menu-btn">View Menu</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
