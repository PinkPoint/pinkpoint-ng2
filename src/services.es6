import { assert } from 'rtts_assert/rtts_assert';
import { Inject } from 'angular2/di';
//import {XHR} from 'angular2/src/services/xhr';

//console.log(XHR);
export class Greeter {
  hello(name: string) {
    return `Hello ${name}!`
  }
}

//@Inject(XHR)
export class PinkPointBackend {


  constructor() {
    //this.$http = http;
  }

  loadRoutes() {
    var url = 'http://projectpinkpoint.azurewebsites.net/routes';

    return fetch(url)
        .then(res => { return res.json(); } );
  }
}
