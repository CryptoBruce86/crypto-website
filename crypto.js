console.log("hello");

let wsbtc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

let btcPriceElement = document.querySelector(".btc-price");

wsbtc.onmessage = (event) => {
  let btcObject = JSON.parse(event.data);
  btcPriceElement.innerHTML = parseFloat(btcObject.p).toFixed(2);
};

let wseth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
let ethPriceElement = document.querySelector(".eth-price");

wseth.onmessage = (event) => {
  let ethObject = JSON.parse(event.data);

  ethPriceElement.innerHTML = parseFloat(ethObject.p).toFixed(2);
};

let wsbnb = new WebSocket("wss://stream.binance.com:9443/ws/bnbusdt@trade");
let bnbPriceElement = document.querySelector(".bnb-price");

wsbnb.onmessage = (event) => {
  let bnbObject = JSON.parse(event.data);

  bnbPriceElement.innerHTML = parseFloat(bnbObject.p).toFixed(2);
};

let wsxrp = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@trade");
let xrpPriceElement = document.querySelector(".xrp-price");

wsxrp.onmessage = (event) => {
  let xrpObject = JSON.parse(event.data);

  xrpPriceElement.innerHTML = parseFloat(xrpObject.p).toFixed(4);
};

let wsdoge = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@trade");
let dogePriceElement = document.querySelector(".dodge-price");

wsdoge.onmessage = (event) => {
  let dogeObject = JSON.parse(event.data);

  dogePriceElement.innerHTML = parseFloat(dogeObject.p).toFixed(4);
};
