import css from "./Orders.module.css";
import { ordersData, groupNumber } from "../../data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";
import { FaWind } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import AQIWidget from "../AQIWidget/AQIWidget";

const Orders = () => {
  const greenText =
    "Air quality is considered satisfactory, and air pollution poses little or no risk";
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        {/* <img src="./logo.png" alt="logo" /> */}
        {/* <span>About AQI Levels</span> */}
      </div>
      <div className={` grey-container ${css.stat}`}>
        <VscGraph size={20} />

        <span>Current Air Quality Levels</span>
      </div>
      <AQIWidget className={css.widget} />
      {/* <div className={css.orders}>
        <div>
          <div className={css.iconGreen}>
            <FaWind size={20} /> Good 0 - 50
          </div>
        </div>
        <div>
          <span>
            Air quality is considered satisfactory, and air pollution poses
            little or no risk
          </span>
        </div>
      </div> */}

      {/* <div className={css.orderChars}>
        <span>24 hours AQI (PM2.5)</span>

        <OrdersPieChart />
      </div> */}
    </div>
  );
};

export default Orders;
