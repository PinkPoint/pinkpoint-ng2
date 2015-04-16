import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap, For } from 'angular2/angular2';
import { RouteListComponent } from './routeListComponent';

@Component({
    selector: 'pinkpoint-app'
})
@View({
    template: `
        <h1>Pink Point</h1>
        <routes></routes>
    `,
    directives: [RouteListComponent]
})
class PinkPointApp {
}

bootstrap(PinkPointApp);

