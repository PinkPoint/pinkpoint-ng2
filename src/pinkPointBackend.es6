const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export default class PinkPointBackend {
    loadRoutes() {
        var url = `${baseUrl}/routes`;
        return fetch(url).then(res => { return res.json(); });
    }
}