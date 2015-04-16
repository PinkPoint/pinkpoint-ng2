import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { Component, View, bootstrap, For } from 'angular2/angular2';
import { Greeter, PinkPointBackend } from './services';

@Component({
  selector: 'hello-app',
  injectables: [Greeter, PinkPointBackend]
})
@View({
  template: `
  <p>{{message}}</p>
  <div *for="#route of routes">
    <p>{{route.name}}</p>
  </div>
  `,
  directives: [For]
})
class HelloApp {
  routes:any[];

  constructor(greeter: Greeter, backend: PinkPointBackend) {
    this.message = greeter.hello('Angular 2 app');

    backend.loadRoutes().then(res => {
     this.routes = res;
    });

  }
}

bootstrap(HelloApp);
