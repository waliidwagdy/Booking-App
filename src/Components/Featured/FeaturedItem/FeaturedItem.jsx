import "./featuredItem.css";
import PropTyes from "prop-types";
const FeaturedItem = ({ imgSrc, imgAlt, title, properties }) => {
  return (
    <div className="featuredItem">
      <img className="featuredImg" src={imgSrc} alt={imgAlt} />
      <div className="featuredTitles">
        <h1>{title}</h1>
        <h2>{properties}</h2>
      </div>
    </div>
  );
};
FeaturedItem.propTypes = {
  imgSrc: PropTyes.string.isRequired,
  imgAlt: PropTyes.string.isRequired,
  title: PropTyes.string.isRequired,
  properties: PropTyes.string.isRequired,
};

export default FeaturedItem;
