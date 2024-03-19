import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class Foo extends Component {
  @service router;

  // Uncomment this to fix the test

  // get url() {
  //   return this.router.urlFor('application', {
  //     queryParams: {
  //       foo: 'bar',
  //     },
  //   });
  // }

  get isActive() {
    return this.router.isActive('application', {
      queryParams: {
        foo: 'bar',
      },
    });
  }
}
