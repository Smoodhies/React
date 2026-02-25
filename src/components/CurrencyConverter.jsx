import React from "react";

/*
https://latest.currency-api.pages.dev/v1/currencies/eur.json
*/

function CurrencyConverter({
  label,
  options = [],
  amount,
  selectCurrency = "usd",
  optionChanged,
  inputDisabled = false,
  amountChanged,
}) {
  // console.log("this investigation of the functions optionchanged ",optionChanged)

  return (
    <div className="className={`bg-white p-3 rounded-lg text-sm flex ${className}`}">
      <div className="w-1/2">
        <label htmlFor={label} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          // disabled={inputDisabled}
          // defaultValue={1}
          value={amount}
          id={label}
          type="text"
          min={0}
          className="outline-none w-full bg-transparent py-1.5"
          required={true}
          onChange={(e) => {
            console.log("this investigation of the functions amount", amount);
            console.log(
              "this investigation of the functions amountchanged ",
              amountChanged,
            );
            amountChanged && amountChanged(Number(e.target.value));
          }}
        ></input>
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <select
          // defaultValue={selectCurrency}
          value={selectCurrency}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => {
            console.log("this investigation of the functions option", option);
            console.log(
              "this investigation of the functions optionchanged ",
              optionChanged,
            );
            optionChanged && optionChanged(e.target.value);
          }}
        >
          {options.map((val, index) => {
            return (
              <option key={index} value={val}>
                {val?.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
