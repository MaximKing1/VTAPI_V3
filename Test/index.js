const { vtClient } = require('../main.js');

const client = new vtClient("NUNYA", false); // ("apiKey", extraDebuggingMode <true | false>) 

client.scanInfo("cf4b367e49bf0b22041c6f065f4aa19f3cfe39c8d5abc0617343d1a66c6a26f5").then(res => {
    console.log(res)
    // Your Code Here!
})