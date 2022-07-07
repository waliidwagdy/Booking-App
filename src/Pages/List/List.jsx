import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItems from "../../Components/SearchItems/SearchItems";
import useFetch from "../../Hooks/useFetch";
const List = () => {
  const location = useLocation();
  const state = location.state;
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [adult, setAdult] = useState(state?.adult);
  const [children, setChildren] = useState(state?.children);
  const [search, setSearch] = useState(state?.search || "");
  const [room, setRoom] = useState(state?.room);
  const [openDate, setOpenDate] = useState(false);
  const { data, loading, fetchData } = useFetch(
    `https://booking-api-backend.herokuapp.com/api/hotels?city=${search}&min=${
      minPrice || 0
    }&max=${maxPrice || 999}`
  );
  const [date, setDate] = useState([
    {
      startDate: state?.startDate,
      endDate: state?.endDate,
      key: "selection",
    },
  ]);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="searchTitle">Search</h2>
            <div className="searchInputs">
              <div className="searchInputElement">
                <small>Destination/property name:</small>
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Destination"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="searchInputElemenet">
                <small>Check-in/out date:</small>
                <div className="searchInputDate">
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="searchInputDateText"
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
                      className="searchInputDateModal"
                    />
                  )}
                </div>
              </div>
              <div className="searchInputElemenet">
                <small>Options</small>
                <div className="searchInputOptions">
                  <div className="searchInputOption">
                    <p>
                      Min price<small>(per night)</small>
                    </p>
                    <input
                      min={1}
                      value={minPrice}
                      onChange={(e) => setMinPrice(+e.target.value)}
                      type="number"
                      className="searchInputOptionInput"
                    />
                  </div>
                  <div className="searchInputOption">
                    <p>
                      Max price<small>(per night)</small>
                    </p>
                    <input
                      min={1}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(+e.target.value)}
                      type="number"
                      className="searchInputOptionInput"
                    />
                  </div>
                  <div className="searchInputOption">
                    <p>Adult</p>
                    <input
                      min={1}
                      value={adult}
                      onChange={(e) => setAdult(+e.target.value)}
                      type="number"
                      className="searchInputOptionInput"
                    />
                  </div>
                  <div className="searchInputOption">
                    <p>Children</p>
                    <input
                      min={0}
                      value={children}
                      onChange={(e) => setChildren(+e.target.value)}
                      type="number"
                      className="searchInputOptionInput"
                    />
                  </div>
                  <div className="searchInputOption">
                    <p>Room</p>
                    <input
                      min={1}
                      value={room}
                      onChange={(e) => setRoom(+e.target.value)}
                      type="number"
                      className="searchInputOptionInput"
                    />
                  </div>
                </div>
              </div>
              <button className="searchInputOptionsBtn" onClick={fetchData}>
                Search
              </button>
            </div>
          </div>
          <div className="listResult">
            {loading ? "Loading" : <SearchItems data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
