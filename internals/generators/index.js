const routerGenerator = require('./router');
const pageGenerator = require('./page');
const sharedComponentGenerator = require('./sharedComponent');
const pageComponentGenerator = require('./pageComponent');
const templateGenerator = require('./templates');
// const serviceGenerator = require('./service');

module.exports = plop => {
  plop.setGenerator('router', routerGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('page component', pageComponentGenerator);
  plop.setGenerator('shared component', sharedComponentGenerator);
  plop.setGenerator('template', templateGenerator);
  // plop.setGenerator('service', serviceGenerator);
};
