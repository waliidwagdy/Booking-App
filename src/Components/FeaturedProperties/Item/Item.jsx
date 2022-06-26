import "./Item.css";
import PropTypes from "prop-types";
const Item = ({
  imgUrl,
  imgAlt,
  title,
  city,
  price,
  rating,
  ratingText,
  numOfReviews,
}) => {
  return (
    <div className="fpItem">
      <img src={imgUrl} alt={imgAlt} className="fpImg" />
      <h3>
        <span className="fpName">{title}</span>
      </h3>
      <span className="fpCity">{city}</span>
      <span className="fpPrice">Starting from EGP {price}</span>
      {rating && (
        <div className="fpReview">
          <div className="fpRating">{rating}</div>
          <span className="fpRatingText">{ratingText}</span>
          <span className="fpRatingReviews">{numOfReviews} reviews</span>
        </div>
      )}
    </div>
  );
};
Item.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  ratingText: PropTypes.string,
  numOfReviews: PropTypes.number,
};

export default Item;
