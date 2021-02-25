const defaults = require('./defaults');
const server = require('./server');

module.exports = (endpoints, config = defaults) => {
  const serve = server(config);

  return serve((req, res) => {
    const routes = Object.keys(endpoints);

    routes.map(endpoint => {
      const routeParams = req.url.split('/');
      const endpointParams = endpoint.split('/');

      if (routeParams[1] === endpointParams[1]) {
        const params = [];
        routeParams.map(param => {
          if (param !== '') params.push(param);
        });
        res.write(JSON.stringify(endpoints[endpoint](params, req, res)));
      }

    });

  });
};
