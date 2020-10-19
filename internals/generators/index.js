const routerGenerator = require('./router');
const pageGenerator = require('./page');
const sharedComponentGenerator = require('./sharedComponent');
const pageComponentGenerator = require('./pageComponent');
// const serviceGenerator = require('./service');

module.exports = plop => {
  plop.setGenerator('router', routerGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('page component', pageComponentGenerator);
  plop.setGenerator('shared component', sharedComponentGenerator);
  // plop.setGenerator('service', serviceGenerator);
};
