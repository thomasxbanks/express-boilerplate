module.exports = (function() {
  ('use strict');
  var router = require('express').Router();
  var helpers = require(`${appRoot}/modules/helpers/index.js`);
  var api = require(`${appRoot}/modules/api/index.js`);
  var config = require(`${appRoot}/modules/config.js`);

  // Middleware for every top level route in the application
  router.use(function(req, res, next) {
    // Load middleware
    api.middleware(req, res);
    // continue doing what we were doing and go to the route
    next();
  });

  router
    .route('/')
    .get(function(req, res) {
      let local = res.app.locals;
      let site = local.site;

      site.page.template = 'archive';
      site.page.body.title = 'Blog';
      site.page.body.classes.push(helpers.slugify(site.page.body.title), site.page.template);
      console.log(site.page);
      res.render(`pages/${site.page.template}`, {
        local: local,
      });
    })
    .post(function(req, res) {})
    .put(function(req, res) {});

  router
    .route('/:section')
    .get(function(req, res) {
      let local = res.app.locals;
      let site = local.site;

      site.page.template = 'index';
      site.page.body.classes.push(site.page.template);

      res.render(`pages/${req.params.section}/${site.page.template}`, { local: local });
    })
    .post(function(req, res) {})
    .put(function(req, res) {});

  router
    .route('/:section/:slug')
    .get(function(req, res) {
      let local = res.app.locals;
      let site = local.site;

      site.page.template = 'index';
      site.page.body.classes.push(site.page.template);

      res.render(`pages/${req.params.section}/${site.page.template}`, {
        local: local,
      });
    })
    .post(function(req, res) {})
    .put(function(req, res) {});

  return router;
})();
