import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <div className="searchItemImg">
        <img
          src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
          alt="hotel room"
        />
      </div>
      <div className="searchItemDesc">
        <h2 className="siTitle">Tower Street Apartments</h2>
        <p className="siDistance">500m from center</p>
        <p className="siTaxi">Free airport taxi</p>
        <p className="siSubtitle">Studio Apartment with Air conditioning</p>
        <p className="siFeatures">
          Entire studio . 1 bathroom . 21m² 1 full bed
        </p>
        <p className="siCancel">Free cancellation</p>
        <p className="siCancelSub">
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className="searchItemRev">
        <div className="revHeader">
          <p className="revTitle">Excellent</p>
          <span>8.9</span>
        </div>
        <div className="revBody">
          <h3>$112</h3>
          <p>Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
