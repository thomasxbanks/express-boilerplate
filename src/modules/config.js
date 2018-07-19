var config = {};

config.ENV = process.env || 'development';
config.PORT = process.env.PORT || 8008;
config.url = {
  api: '/path/to/api/endpoint',
};

config.routes = {
  home: Object.assign(String(''), {
    blog: false,
  }),
};

config.routes.home.blog = Object.assign(String('news-events'), {
  add: `/${config.routes.home}/${config.routes.home.blog}/create`,
  edit: `/${config.routes.home}/${config.routes.home.blog}/modify`,
  delete: `/${config.routes.home}/${config.routes.home.blog}/destroy`,
});

module.exports = config;
