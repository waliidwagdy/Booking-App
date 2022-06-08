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

const Header = () => {
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
  const checkOptionVal = (value, key) => {
    setOptions({
      ...options,
      [key]: value,
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <HeaderListItem active text="Stays" icon={faBed} />
          <HeaderListItem text="Flights" icon={faPlane} />
          <HeaderListItem text="Car rentals" icon={faCar} />
          <HeaderListItem text="Attractions" icon={faBed} />
          <HeaderListItem text="Airport taxis" icon={faTaxi} />
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
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
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
