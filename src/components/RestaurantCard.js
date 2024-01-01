export const RestaurantCard = ({ image, name, cuisines, rating }) => {
    return (
      <div className="card">
        <img src={image} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{rating} Stars</h4>
      </div>
    );
  };