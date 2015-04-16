import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap, For } from 'angular2/angular2';
//import { RouteListComponent } from './routeListComponent';


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

@Component({
    selector: 'pinkpoint-app'
})
@View({
    template: `<routes></routes>`,
    directives: [RouteListComponent]
})
class HelloApp {
}

bootstrap(HelloApp);

