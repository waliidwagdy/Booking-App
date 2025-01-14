import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";
import HeaderListItem from "./HeaderListItem/HeaderListItem";
import { format } from "date-fns";
import OptionItem from "../OptionItem/OptionItem";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import { newSearch } from "../../Context/actionTypes";
import { AuthContext } from "../../Context/AuthContext";

const Header = ({ type }) => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const checkOptionVal = (value, key) => {
    setOptions({
      ...options,
      [key]: value,
    });
  };
  const handleSearch = () => {
    dispatch({ type: newSearch, payload: { search, date, options } });
    navigate("/hotels", {
      state: {
        ...options,
        startDate: date[0].startDate,
        endDate: date[0].endDate,
        search,
      },
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <HeaderListItem active text="Stays" icon={faBed} />
          <HeaderListItem text="Flights" icon={faPlane} />
          <HeaderListItem text="Car rentals" icon={faCar} />
          <HeaderListItem text="Attractions" icon={faBed} />
          <HeaderListItem text="Airport taxis" icon={faTaxi} />
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </p>
            {!user && <button className="headerBtn">Sign in / Register</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adults . ${options.children} children . ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <OptionItem
                      text="Adults"
                      defaultValue={1}
                      optionKey="adult"
                      checkCurrentVal={checkOptionVal}
                    />
                    <OptionItem
                      text="Children"
                      defaultValue={0}
                      optionKey="children"
                      checkCurrentVal={checkOptionVal}
                    />
                    <OptionItem
                      text="Rooms"
                      defaultValue={1}
                      optionKey="room"
                      checkCurrentVal={checkOptionVal}
                    />
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
Header.propTypes = {
  type: PropTypes.string,
};
export default Header;
