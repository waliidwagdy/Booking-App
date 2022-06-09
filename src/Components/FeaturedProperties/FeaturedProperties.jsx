import "./featuredProperties.css";
import Item from "./Item/Item";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <Item
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max500/29465472.jpg?k=7c0133d14c54156613fb89d3baa5bf95ca41241d9805dd2da83092387dd75edc&o="
        imgAlt="London"
        title="Cheval Three Quays at The Tower of London"
        city="London"
        price={9196}
        rating={9.4}
        ratingText="Wonderful"
        numOfReviews={488}
      />
      <Item
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
        imgAlt="Rio de Janeiro"
        title="Sugar Loft Apartments"
        city="Rio de Janeiro"
        price={841}
        rating={9.1}
        ratingText="Wonderful"
        numOfReviews={290}
      />
      <Item
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max500/32087571.jpg?k=3724cb7f37e0e34e60b01cea07c4659a897885c9819728c67b1cec5544dd2b24&o="
        imgAlt="Split"
        title="Luxury Apartments Klara"
        city="Split"
        price={3410}
        rating={9.6}
        ratingText="Exceptional"
        numOfReviews={425}
      />
      <Item
        imgUrl="https://cf.bstatic.com/xdata/images/hotel/max500/71184956.jpg?k=4f0dd080f161eb3d2631565c7df9b6e634442addd10dc715b8dd519092a4517f&o="
        imgAlt="Lisbon"
        title="Chiado Mercy Apartments"
        city="Lisbon"
        price={9938}
        rating={9.5}
        ratingText="Exceptional"
        numOfReviews={587}
      />
    </div>
  );
};

export default FeaturedProperties;
