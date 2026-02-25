import React from "react";
import { useState } from "react";
import apicall from "./apiCalls/apicall";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

/*

first call the api 
then 
grab the key values from the api call
exportable components of input and converter 
currency calculator

*/

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedamount] = useState(0);

  console.log("from app amount", amount);
  console.log("from app setamount", setAmount);
  console.log("from app convertedamount", convertedAmount);
  console.log("from app setconverted", setConvertedamount);

  const apiCall = apicall(from); // grab the all values from api itself

  const keys = Object.keys(apiCall);
  // console.log("keys ", keys);

  const swap = () => {
    // setFrom(to);
    // setTo(from);

    setFrom((prev) => to);
    setTo((prev) => from);

    setAmount(convertedAmount);
    setConvertedamount(amount);

    console.log(amount, "  amount ", convertedAmount);
    console.log(to, "  from to ", from);
  };

  let calculate = (e) => {
    console.log("\n calculated \n from app amount", amount);
    console.log("from app setamount", setAmount);
    console.log("from app convertedamount", convertedAmount);
    console.log("from app setconverted", setConvertedamount);

    setConvertedamount(amount * apiCall[to]);
    console.log("amount", amount);
    console.log("calculated amount", convertedAmount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      {/* Hello this is React */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      >
        <CurrencyConverter
          label={from}
          options={keys}
          amount={amount} // this holds the select amount value via amount hook
          amountChanged={(amount) => {
            // this optionChanged higher ord func by help to update the variable from hook setAmount hook
            setAmount(amount);
          }}
          selectCurrency={from} // this holds the select currency value via from hook
          optionChanged={(currency) => {
            // this optionChanged higher ord func by help to update the variable from setfrom hook
            setFrom(currency);
          }}
        />

        <button type="button" onClick={swap}>
          swap
        </button>

        <CurrencyConverter
          label={to}
          amount={convertedAmount}
          //here it holds the value of converted amt via from convertedAmount  hook
          options={keys}
          selectCurrency={to}
          //here it holds the value of converted amt via to hook
          optionChanged={(optionchanged) => {
            setTo(optionchanged);
            // this helps to change the value ia higher order function by help of setTo hook function
          }}
          inputDisabled={true}
        />

        <button type="submit" onClick={calculate}>
          calculate
        </button>
      </form>
    </div>
  );
}

export default App;
