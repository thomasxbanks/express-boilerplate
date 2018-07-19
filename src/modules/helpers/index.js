var appRoot = `${process.env.PWD}/dist`;

module.exports = {
  stringifyArray: (array) => {
    var string = '';
    array.forEach((item, index) => {
      string += index === array.length - 1 ? item : `${item},`;
    });
    return string;
  },
  slugify: function(input) {
    return input.replace(/ /g, '-').toLowerCase();
  },
  getStatus: function(status) {
    var message = require(`${appRoot}/modules/messages`);
    return message.api[status];
  },
  isLoggedIn: function(token) {
    // Return true if a token, has been provided
    return token ? true : false;
  },
  notifyNavigation: function(type = 'failure', message, destination, req) {
    // Reject the url resolution
    // and display error message
    req.flash({
      type: type,
      message: message,
      redirect: destination,
    });
  },
};
