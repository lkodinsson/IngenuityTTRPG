import restaurantListDefault from "./restaurants.yml";

function Restaurant({ name, description, tags }) {
  return (
    <div className="col col--4">
      <div>
        <h3>{name}</h3>
      </div>
      <div>{description}</div>
      {tags && tags.length > 0 && (
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function RestaurantList({restaurants = restaurantListDefault}) {
  console.log("Parsed Yaml:", restaurants, JSON.stringify(restaurants, null, 2));
  return (
    <section>
      <div className="container">
        <div className="row">
          {restaurants.map((restaurant, idx) => (
            <Restaurant key={idx} {...restaurant} />
          ))} 
        </div>
      </div>
    </section>
  );
}
