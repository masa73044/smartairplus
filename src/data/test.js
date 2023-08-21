import React, { Component } from "react";
import { cardsData, groupNumber } from "../../data";
import css from "./Dashboard.module.css";
import Statistics from "../../components/Statistics/Statistics";
import Orders from "../../components/Orders/Orders";
import axios from "axios";

export default class Dashboard extends Component {
  componentDidMount() {
    const testCity = "https://api.ambeedata.com/latest/by-city?city=Bengaluru";

    async function fetchData() {
      try {
        await axios
          .get(url, {
            headers: {
              "x-api-key": AMBEE_API,
            },
            // timeout: 10000, // Here you set the timeout (in milliseconds)
          })
          .then((response) => {
            currentData = response.data;
            console.log(currentData);
          });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }
  render() {
    return (
      <div className={css.container}>
        <div className={css.dashboard}>
          <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
              <span>Dashboard</span>
              <div className={css.durationButton}>
                <select>
                  <option value="">1 week</option>
                  <option value="">1 month</option>
                  <option value="">1 year</option>
                </select>
              </div>
            </div>
            <div className={css.cards}>
              {cardsData.map((card, index) => (
                <div className={css.card}>
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
            </div>
          </div>

          <Statistics />
        </div>
        <Orders />
      </div>
    );
  }
}
