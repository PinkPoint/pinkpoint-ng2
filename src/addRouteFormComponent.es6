import { Component, View } from 'angular2/angular2';
import { bind} from 'angular2/di';
import { Control, FormDirectives } from 'angular2/forms';
import { Routes } from './pinkPointBackend';
import { SERVER_URL } from './config';


@Component({
    selector: 'add-route-form',
    injectables: [bind(Routes).toValue(new Routes(SERVER_URL))]
})
@View({
    templateUrl: 'add-route-form.html',
    directives: [FormDirectives]
})
class AddRouteFormComponent {

    constructor(routes:Routes) {
        this.routes = routes;

        this.newRouteName = new Control("");
        this.newRouteBuilder = new Control("");
        this.newRouteDifficulty = new Control("5a");
    }

    addNewRoute() {
        var newRoute = {
            name: this.newRouteName.value,
            builder: this.newRouteBuilder.value,
            difficulty: this.newRouteDifficulty.value
        }

        this.routes.create(newRoute);
    }
}

export { AddRouteFormComponent }