# VirusTotal API V3

## Get Scan Results
```js
const { vtClient } = require('vtotal_v3');

const client = new vtClient("NUNYA", false); // ("apiKey", extraDebuggingMode <true | false>) 

client.scanInfo("cf4b367e49bf0b22041c6f065f4aa19f3cfe39c8d5abc0617343d1a66c6a26f5").then(res => {
    console.log(res)
    // Your Code Here!
});
```

## Scan URL
```js
const { vtClient } = require('vtotal_v3');

const client = new vtClient("NUNYA", false); // ("apiKey", extraDebuggingMode <true | false>) 

client.scanDomain("DOMAIN.COM/URL").then(res => {
    console.log(res)
    // Your Code Here!
});
```

## Scan IP
```js
const { vtClient } = require('vtotal_v3');

const client = new vtClient("NUNYA", false); // ("apiKey", extraDebuggingMode <true | false>) 

client.scanDomain("IP_ADDRESS").then(res => {
    console.log(res)
    // Your Code Here!
});
```

## Scan Domain
```js
const { vtClient } = require('vtotal_v3');

const client = new vtClient("NUNYA", false); // ("apiKey", extraDebuggingMode <true | false>) 

client.scanDomain("DOMAIN.COM").then(res => {
    console.log(res)
    // Your Code Here!
});
```
