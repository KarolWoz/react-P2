const urlAll = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";

const fetchCurrencyList = async () => {
  try {
    const response = await fetch(urlAll);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export { fetchCurrencyList };
