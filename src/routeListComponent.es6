import { Component, View, For } from 'angular2/angular2';
import { Routes } from './pinkPointBackend';

@Component({
    selector: 'routes',
    injectables: [Routes]
})
@View({
    templateUrl: 'routes.html',
    directives: [For]
})
class RouteListComponent {
    constructor(routes: Routes) {
        routes.all().then(res => {
            this.routes = res;
        });
    }
}

export { RouteListComponent }