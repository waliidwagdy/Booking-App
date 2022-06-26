import SearchItem from "./SearchItem/SearchItem";
import "./searchItems.css";

const SearchItems = ({ data }) => {
  return (
    <div className="searchItems">
      {data?.map((el) => (
        <SearchItem item={el} key={el._id} />
      ))}
    </div>
  );
};

export default SearchItems;
