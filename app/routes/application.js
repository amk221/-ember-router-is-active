import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParams = {
    foo: {
      refreshModel: true,
    },
  };
}
