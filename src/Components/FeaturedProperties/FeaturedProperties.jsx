import useFetch from "../../Hooks/useFetch";
import "./featuredProperties.css";
import Item from "./Item/Item";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "https://booking-api-backend.herokuapp.com/api/hotels?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data?.map((el) => (
            <Item
              key={el._id}
              imgUrl={el.photos[0]}
              imgAlt={el.name}
              title={el.name}
              city={el.city}
              price={el.cheapestPrice}
              rating={el.rating}
              ratingText="Wonderful"
              numOfReviews={488}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
