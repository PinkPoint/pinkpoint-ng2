import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap, For } from 'angular2/angular2';
import { Routes } from './pinkPointBackend';

@Component({
  selector: 'hello-app',
  injectables: [Routes]
})
@View({
  template: `
  <div *for="#route of routes">
    <p>{{route.name}}</p>
  </div>
  `,
  directives: [For]
})
class HelloApp {
  constructor(routes: Routes) {
    routes.all().then(res => {
     this.routes = res;
    });
  }
}

bootstrap(HelloApp);
