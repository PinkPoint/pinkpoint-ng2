import { Component, View, For } from 'angular2/angular2';
import { bind} from 'angular2/di';
import { Routes } from './pinkPointBackend';
import { SERVER_URL } from './config';

@Component({
    selector: 'routes',
    injectables: [bind(Routes).toValue(new Routes(SERVER_URL))]
    // injectables: [ Routes ]
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