import React, { useEffect, useState } from "react";
import css from "./AQIWidget.module.css";
import { BiSearch } from "react-icons/bi";

function AQIWidget({ defaultCity = "beijing" }) {
  const [inputCity, setInputCity] = useState(""); // State for input
  const [city, setCity] = useState(defaultCity); // State for current city

  useEffect(() => {
    if (window._aqiFeed) {
      window._aqiFeed({
        display: "%details",
        container: "city-aqi-container",
        city: city,
      });
    }
  }, [city]);

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setCity(inputCity); // Set the city to the value from the input
    setInputCity(""); // Optionally, clear the input after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ paddingLeft: "50px" }}>
        {/* <BiSearch size={20} /> */}

        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Search city..."
        />
        <button type="submit" className={css.submitBtn}>
          Search
        </button>
      </form>
      <span id="city-aqi-container" style={{ paddingLeft: "50px" }}></span>
    </>
  );
}

export default AQIWidget;
