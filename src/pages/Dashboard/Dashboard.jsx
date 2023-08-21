import React, { Component } from "react";
import { cardsData, groupNumber } from "../../data";
import css from "./Dashboard.module.css";
import Statistics from "../../components/Statistics/Statistics";
import Orders from "../../components/Orders/Orders";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: null,
      AQI: null,
      CO: null,
      OZONE: null,
      PM10: null,
      PM25: null,
    };
  }
  componentDidMount() {
    const testCity = "https://api.ambeedata.com/latest/by-city?city=Paris";
    const url = testCity;
    const AMBEE_API =
      "ed1cd5b5410d087a437a0673a6a89c9e08e5f575f39570e596cac8d0b0437847";
    axios
      .get(url, {
        headers: {
          "x-api-key": AMBEE_API,
        },
      })
      .then((response) => {
        this.setState({
          currentData: response.data.stations,
          AQI: response.data.stations[0].AQI,
          CO: response.data.stations[0].CO,
          OZONE: response.data.stations[0].OZONE,
          PM10: response.data.stations[0].PM10,
          PM25: response.data.stations[0].PM25,
          city: response.data.stations[0].city,
        });
      })
      .catch((error) => {
        console.dir("test", error);
      });
  }
  render() {
    const stateData = this.state;
    const city = this.state.city;
    const keyData = Object.keys(stateData).slice(1, 6);
    return (
      <div className={css.container}>
        <div className={css.dashboard}>
          {/* <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
              <span>
                Current Air Quality Levels of <p>{city}</p>
              </span>
              <div className={css.searchBar}>
                <BiSearch size={20} />
                <input type="text" placeholder="Select by City" />
                <button type="submit" className={css.submitBtn}>
                  Submit
                </button>
              </div>

              <div className={css.durationButton}>
                <div className={css.searchBar}>
                  <BiSearch size={20} />
                  <input type="text" placeholder="Search" />
                </div>

                <select>
                  <option value="">1 week</option>
                  <option value="">1 month</option>
                  <option value="">1 year</option>
                </select>
              </div>
            </div>
            <div className={css.cards}>
              {cardsData.map((card, index) => (
                <div key={index} className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>
                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))}
              {keyData.map((card, index) => (
                <div key={index} className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card}</span>
                    <span>+{+this.state[card]}</span>
                    <span>+{10}</span>
                  </div>
                  <div className={css.cardAmount}>
                    <span></span>
                    <span>{groupNumber(+this.state[card])}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <Statistics />
        </div>
        <Orders />
      </div>
    );
  }
}
