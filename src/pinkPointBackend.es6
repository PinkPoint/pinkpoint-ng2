//const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export class Routes {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    all() {
        var url = `${this.baseUrl}/routes`;
        return fetch(url).then(res => { return res.json(); });
    }
}