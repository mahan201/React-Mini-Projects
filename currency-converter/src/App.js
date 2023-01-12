import "./App.css";
import Button from "@mui/material/Button";
import { CircularProgress, TextField, Typography } from "@mui/material";
import { CurrencyRow } from "./components/CurrencyRow/CurrencyRow";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest";
const API_KEY = "CsLDsUaGtdFibainFJpaBklLv7SrKzEo";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({});

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const [curr1, setCurr1] = useState("AUD");
  const [curr2, setCurr2] = useState("AUD");

  useEffect(() => {
    if (Object.keys(currencyOptions).length === 0) {
      console.log("useEffect");
      //Use axios to fetch data from API and set the state
      axios
        .get(`${BASE_URL}?apikey=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setCurrencyOptions(res.data.rates);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(currencyOptions).length !== 0) {
      setAmount2((amount1 * currencyOptions[curr2]) / currencyOptions[curr1]);
    }
  }, [amount1, curr1, curr2]);

  useEffect(() => {
    if (Object.keys(currencyOptions).length !== 0) {
      setAmount1((amount2 * currencyOptions[curr1]) / currencyOptions[curr2]);
    }
  }, [amount2]);

  return (
    <div className="App">
      <div className="title-container">
        <Typography variant="h2" sx={{ color: "white" }}>
          Currency Converter
        </Typography>
      </div>
      {Object.keys(currencyOptions).length === 0 ? (
        <CircularProgress sx={{ color: "white" }} />
      ) : (
        <>
          <CurrencyRow
            rates={Object.keys(currencyOptions)}
            amount={amount1}
            setAmount={setAmount1}
            cur={curr1}
            setCur={setCurr1}
          />
          <Typography variant="h3" sx={{ color: "white" }}>
            =
          </Typography>
          <CurrencyRow
            rates={Object.keys(currencyOptions)}
            amount={amount2}
            setAmount={setAmount2}
            cur={curr2}
            setCur={setCurr2}
          />
        </>
      )}
    </div>
  );
}

export default App;
