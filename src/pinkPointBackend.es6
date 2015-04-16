const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export class Routes {
    all() {
        var url = `${baseUrl}/routes`;
        return fetch(url).then(res => { return res.json(); });
    }
}