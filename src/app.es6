import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';

import { Component, View, bootstrap, For } from 'angular2/angular2';
import PinkPointBackend from './pinkPointBackend';

@Component({
  selector: 'hello-app',
  injectables: [PinkPointBackend]
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
  constructor(backend: PinkPointBackend) {
    this.message = "Hello World";
    this.routes = [
      {
        "name": "asdf"
      },
      {
        "name": "qwer"
      }
    ];
    backend.loadRoutes().then(res => {
     this.routes = res;
    });

  }
}

bootstrap(HelloApp);
