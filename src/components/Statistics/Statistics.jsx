import css from "./Statistics.module.css";
import { DiRasberryPi } from "react-icons/di";
import { groupNumber } from "../../data";
import StatisticsChart from "../StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>SDS011 Local Sensor</span>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <DiRasberryPi />
          </div>
          <div className={css.card}>
            <span>Running on </span>
            <span> Raspberry Pi 4</span>
          </div>
        </div>
        {/* <div className={css.card}>
          <span>Items</span>
          <span>{groupNumber(455)}</span>
        </div> */}

        <div className={css.card}>
          <span>Daily Average PM10</span>
          <span>{groupNumber(32)}</span>
        </div>
        <div className={css.card}>
          <span>Daily Average PM2.5</span>
          <span>{groupNumber(13.4)}</span>
        </div>
      </div>
      <StatisticsChart />
    </div>
  );
};

export default Statistics;
