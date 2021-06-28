const fetch = require('node-fetch');

const { createReadStream } = require('fs');

const uploadFile = "https://www.virustotal.com/api/v3/files",
    fileScanInfo = "https://www.virustotal.com/api/v3/files",
    scanURL = "https://www.virustotal.com/api/v3/urls",
    scanDomain = "https://www.virustotal.com/api/v3/domains",
    scanIP = "https://www.virustotal.com/api/v3/ip_addresses";

class vtClient {
    constructor(apiKey, debuggingMode) {
        this.key = apiKey;

        this.debugger;
        if (debuggingMode == true) this.debugger = true;
        if (debuggingMode == false) this.debugger = false;
        if (debuggingMode == undefined) this.debugger = false;

        if(this.key == undefined) return console.error("Please Provide a Valid VirusTotal API Key!");
}

    async scanFile(file) {
        const fileUploaded = createReadStream(file);

        await fetch(uploadFile, {
            method: 'POST',
            body: fileUploaded,
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");

            return json
        })
    }

    async scanInfo(ID) {
        return await fetch(`${fileScanInfo}/${ID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");

            return json
        })
    }

    async scanURL(url) {
        return await fetch(scanURL, {
            method: 'GET',
            body: { 'url': url },
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");

            return json
        })
    }

    async scanDomain(domain) {
        return await fetch(`${scanDomain}/${domain}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");

            return json
        })
    }

    async scanIP(IP) {
        return await fetch(`${scanIP}/${IP}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");

            return json
        })
    }
}

module.exports.vtClient = vtClient;
