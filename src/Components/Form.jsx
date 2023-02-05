import { useState } from "react";
import { fetchCurrencyList } from "../Services/apiCurrencies.js";

const Form = () => {
  const [calculatedValue, setCalculatedValue] = useState();

  const getCurrencyList = (event) => {
    event.preventDefault();

    fetchCurrencyList().then((data) => getCalc(data[0].rates, event.target));
  };

  const getCalc = (rates, target) => {
    if (target.currencyAmount.value >= 0) {
      const currencyOption = target.currencyOption.value;
      const mid = rates.find((rate) => rate.code === currencyOption).mid;
      const calculation = mid * target.currencyAmount.value;
      setCalculatedValue(calculation.toFixed(2));
    }
  };

  return (
    <section className=" container-md">
      <div className="row ">
        <form id="exchangeForm" className="row" onSubmit={getCurrencyList}>
          <div className="col-md-4">
            <input
              type="number"
              min="0"
              id="currencyAmount"
              name="currencyAmount"
            />
          </div>

          <div className="col-md-2">
            <select id="currencyOption" name="currencyOption">
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="col-md-2">
            <input
              id="currencyCalc"
              className="btn btn-primary"
              type="submit"
              value="Calculate"
            />
          </div>
          <div className="col-md-4">
            <p>
              TO <span id="calculatedValue">{calculatedValue}</span> PLN
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Form;
