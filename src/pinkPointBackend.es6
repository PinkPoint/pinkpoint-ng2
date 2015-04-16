//const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export class Routes {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    all() {
        var url = `${this.baseUrl}/routes`;
        return fetch(url).then(res => { return res.json(); });
    }

    create(route:any) {
        var url = `${this.baseUrl}/routes/create`;
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(route)});
    }
}