import 'babel-core/polyfill';
import { assert } from 'rtts_assert/rtts_assert';
import { Component, View, bootstrap, For } from 'angular2/angular2';
import { Routes } from './pinkPointBackend';

@Component({
  selector: 'hello-app',
  injectables: [Routes]
})
@View({
  templateUrl: 'routes.html',
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
