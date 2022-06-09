import "./featured.css";
import FeaturedItem from "./FeaturedItem/FeaturedItem";

const Featured = () => {
  return (
    <div className="featured">
      <FeaturedItem
        imgSrc="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_614,q_75,w_500/http://res.cloudinary.com/simpleview/image/upload/v1492713751/clients/dublinoh/Hayden_Falls1_sherrill_photo_bc50e68e-7aee-4ee7-b17a-8342381bbc23.jpg"
        imgAlt="Dublin Falls"
        title="Dublin"
        properties="123 properties"
      />
      <FeaturedItem
        imgSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/cd/04/caption.jpg?w=700&h=-1&s=1&cx=1440&cy=949&chk=v1_1dc18af01397ba07dac9"
        imgAlt="Austin"
        title="Austin"
        properties="420 properties"
      />
      <FeaturedItem
        imgSrc="https://travelnevada.com/wp-content/uploads/2020/09/Reno_Desktop-scaled.jpg"
        imgAlt="Reno"
        title="Reno"
        properties="533 properties"
      />
    </div>
  );
};

export default Featured;
