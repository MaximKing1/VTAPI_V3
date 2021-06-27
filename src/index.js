const fetch = require('fetch');

const uploadFile = "https://www.virustotal.com/api/v3/files",
    fileScanInfo = "https://www.virustotal.com/api/v3/files";

class vtClient {
    constructor(apiKey) {
        this.key = apiKey;

        if(this.key == undefined) return console.error("Please Provide a Valid VirusTotal API Key!");
}

    async scanFile(file) {
        axios({
            method: 'post',
            url: uploadFile,
            headers: { 'x-apikey': this.key }
        }).then(function (response) {
            return response;
        }).catch(err => console.error(err.response.status));
    }

    async scanInfo(ID) {
        await axios({
            method: 'get',
            url: `${fileScanInfo}/${ID}`,
            headers: { 'x-apikey': this.key }
        }).then(response => {
            return console.log(response.data)
        }).catch(err => console.error(err.response.status));
    }

}

module.exports.vtClient = vtClient;
