const { vtClient } = require('../main.js');

const client = new vtClient("NUNYA", true); // ("apiKey", extraDebuggingMode <true | false>) 
const data = client.scanInfo("cf4b367e49bf0b22041c6f065f4aa19f3cfe39c8d5abc0617343d1a66c6a26f5");

console.log(data)