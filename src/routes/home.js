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

  router.route('/').get(function(req, res) {
    let local = res.app.locals;
    let site = local.site;

    site.page.template = site.template;
    site.page.body.title = site.title;
    site.page.body.classes.push(helpers.slugify(site.page.body.title), site.page.template);

    res.render(`pages/${site.template}`, {
      local: local,
    });
  });

  // Routes for all subsections of the homepage
  // Privacy Policy, Terms & Conditions, etc.
  router.get('/:section', function(req, res) {
    let local = res.app.locals;
    let site = local.site;
    console.log(req.params.section);
    site.page.template = 'index';
    site.page.body.title = req.params.section === 'styleguide' ? 'Styleguide' : 'Tertiary page';
    site.page.body.classes.push(site.page.template);

    res.render(`pages/${req.params.section}/${site.page.template}`, { local: local });
  });

  return router;
})();
