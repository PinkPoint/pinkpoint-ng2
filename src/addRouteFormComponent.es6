import { Component, View } from 'angular2/angular2';
import { Control, FormDirectives } from 'angular2/forms';

@Component({
    selector: 'add-route-form'
})
@View({
    templateUrl: 'add-route-form.html',
    directives: [FormDirectives]
})
class AddRouteFormComponent {
    constructor() {
        this.newRouteName = new Control("");
        this.newRouteBuilder = new Control("");
        this.newRouteDifficulty = new Control("50");
    }
}

export { AddRouteFormComponent }