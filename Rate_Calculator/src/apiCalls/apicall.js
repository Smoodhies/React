import { useEffect, useState } from "react";

// https://latest.currency-api.pages.dev/v1/currencies/usd.json

function apicall(currency) {
  // console.log(currency);
  const [data, setData] = useState({});
  // isko apun object iskeh liyeh hai q ke apyn isko baa mai keys nikal sakhe obj ka

  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
    )
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        // console.log("respond", val[currency]);
        return setData(val[currency]);
      });
  }, [currency]);
  // console.log("api key data", data);
  return data;

  // ❗❗ this is also way for nested array inside of the json  ❗ ❗

  // .then((val) => {
  //   console.log(val?.[`${currency}`]?.[`${currency}`]);
  // });

  // .then((val) => {
  //   console.log("respond", val[currency][currency]);
  // });

  // ❗ ❗ This is one way to get from nested json combination of objects and array ❗ ❗

  // .then((val) => {
  //   console.log("respond", val?.[`${currency}`].usd);
  // });
}

export default apicall;
