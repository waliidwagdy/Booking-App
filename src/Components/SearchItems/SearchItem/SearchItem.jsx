import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="searchItemImg">
        <img
          // src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
          src={item?.photos[0]}
          alt="hotel room"
        />
      </div>
      <div className="searchItemDesc">
        <h2 className="siTitle">{item?.name}</h2>
        <p className="siDistance">{item?.distance}m from center</p>
        <p className="siTaxi">Free airport taxi</p>
        <p className="siSubtitle">Studio Apartment with Air conditioning</p>
        <p className="siFeatures">{item?.desc}</p>
        <p className="siCancel">Free cancellation</p>
        <p className="siCancelSub">
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className="searchItemRev">
        {item?.rating && (
          <div className="revHeader">
            <p className="revTitle">Excellent</p>
            <span>{item?.rating}</span>
          </div>
        )}
        <div className="revBody">
          <h3>${item?.cheapestPrice}</h3>
          <p>Includes taxes and fees</p>
          <Link to={`/hotels/${item?._id}`}>
            <button>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
