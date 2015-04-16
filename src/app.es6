import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap, For } from 'angular2/angular2';
import { RouteListComponent } from './routeListComponent';
import { AddRouteFormComponent } from './addRouteFormComponent';

@Component({
    selector: 'pinkpoint-app'
})
@View({
    template: `
        <h1>Pink Point</h1>
        <add-route-form></add-route-form>
        <routes></routes>
    `,
    directives: [RouteListComponent, AddRouteFormComponent]
})
class PinkPointApp {
}

bootstrap(PinkPointApp);

