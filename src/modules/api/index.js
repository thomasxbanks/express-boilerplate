var appRoot = `${process.env.PWD}/dist`;
// var helpers = require(`${appRoot}/modules/helpers/index.js`);
// var config = require(`${appRoot}/modules/config.js`);
// var fetch = require('node-fetch');
// var FormData = require('form-data');
var moment = require('moment');

module.exports = {
  middleware: (req, res) => {
    let local = res.app.locals;
    let site = local.site;

    let pageBase = req.baseUrl.substr(1) || null;
    let pageSection = req.path.substr(1).split('/')[0] || null;
    let pageSlug = req.path.substr(1).split('/')[1] || null;
    let thisPage = [];
    let pageUrlParts = [pageBase, pageSection, pageSlug];
    pageUrlParts.forEach((pageUrlPart) => {
      if (pageUrlPart !== null) {
        thisPage.push(pageUrlPart);
      }
    });
    let thisSlug = thisPage.filter(String).join('-');

    site.page = {
      slug: false,
      template: site.template,
      body: {
        title: false,
        classes: [thisSlug],
      },
    };

    local.input = require(`${appRoot}/modules/default-inputs.js`);

    console.log('**************************************************************');
    console.log('Timestamp:', moment().format());
    /* 
      @PROTIP: No need to delete.
      These console.logs can be left here switched on or off
      however and whenever you need them.
      The gulp task strips out logging in production!
    */
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request Body:', req.body);
    console.log('Site page:', site.page);

    var randomNumber = ~~(Math.random() * 100);
    req.flash({
      type: randomNumber % 2 === 0 ? 'success' : 'failure',
      message: `${randomNumber} is ${randomNumber % 2 === 0 ? 'even' : 'odd'}`,
      redirect: false,
    });
  },
};
