const fetch = require('node-fetch');

const uploadFile = "https://www.virustotal.com/api/v3/files",
    fileScanInfo = "https://www.virustotal.com/api/v3/files";

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
        await fetch(uploadFile, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);
            
            if (json.error.code == "WrongCredentialsError") return console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");
        })
    }

    async scanInfo(ID) {
        return await fetch(`${fileScanInfo}/${ID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-apikey': this.key },
        }).then(res => res.json()).then(json => {
            if (this.debugger == true) console.log(json);

            if (json.error.code == "WrongCredentialsError") return console.error("Wrong Credentials Error! Please Make Sure You Entered a Valid API Token...");
        })
    }

}

module.exports.vtClient = vtClient;
