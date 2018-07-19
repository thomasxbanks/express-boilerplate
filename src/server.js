'use strict';
var express = require('express');
var path = require('path');
var helmet = require('helmet');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
const session = require('express-session');
const app = (module.exports = express());
app.use(helmet());
global.appRoot = path.resolve(__dirname);

const config = require(`${appRoot}/modules/config`);
const helpers = require(`${appRoot}/modules/helpers/index.js`);

const directory = {
  routes: `${__dirname}/routes`,
  views: `${__dirname}/views`,
  modules: `${__dirname}/modules`,
};

app.use(express.static(path.join(__dirname, '')));

app.use(
  session({
    secret: 'keyboard cat',
    cookie: {},
    resave: true,
    saveUninitialized: true,
  })
);
app.use(
  require('express-flash-notification')(app, {
    viewName: 'atoms/flash',
    beforeSingleRender: function(notification, callback) {
      if (notification.type) {
        switch (notification.type) {
          case 'failure':
            notification.alert_class = 'flash-notification-failure';
            break;
          case 'warning':
            notification.alert_class = 'flash-notification-warning';
            break;
          case 'info':
            notification.alert_class = 'flash-notification-primary';
            break;
          case 'success':
            notification.alert_class = 'flash-notification-success';
            break;
          case 'ok':
            notification.alert_class = 'flash-notification-primary';
            break;
        }
      }
      callback(null, notification);
    },
  })
);

app.set('view engine', 'ejs');
app.set('views', directory.views);
app.use(expressLayouts);

// use body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var d = new Date();

var messages = require(`${directory.modules}/messages.js`);

app.locals = {
  site: {
    views: directory.views,
    company: {
      name: 'Default Company',
      address: '1 Address Road, Townsville, Countyshire, Country, PO57 CDE',
      companyNumber: '123456789',
    },
    title: 'Application title',
    description:
      'This is a description of the application that explains what it does and who it is for',
    author: 'thomasxbanks',
    template: 'index',
    today: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
    colophon: d.getFullYear(),
    primaryNavItems: [
      {
        link: '/news-events',
        text: 'News & Events',
      },
      {
        link: '/styleguide',
        text: 'Styleguide',
      },
    ],
    routes: config.routes,
    messages: messages,
  },
};

app.use('/news-events', require(`${directory.routes}/blog`));
app.use('/', require(`${directory.routes}/home`));

// Final Catch-all for errors
app.use('/*', function(req, res) {
  console.log('..this is my LAST RESORT');
  let site = res.app.locals.site;
  var pageSlug = site.template;
  site.template = 'error';
  site.page = {
    slug: pageSlug,
    template: site.template,
    body: {
      title: helpers.getStatus(404)['NOT_FOUND'].message,
      classes: [site.template, pageSlug],
    },
    subnavigation: false,
    breadcrumbs: false,
  };
  res.render(`pages/${site.template}`, res.app.locals);
});

app.listen(config.PORT, () => {
  console.log(`app started. Listening on port ${config.PORT}`);
});
