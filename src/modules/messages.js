module.exports = {
  api: {
    200: {
      OK: {
        name: 'OK',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'All good!',
      },
      LOGGED_IN: {
        name: 'OK',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'Logged in',
      },
      LOGGED_OUT: {
        name: 'OK',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'Logged out',
      },
      GAME_UPDATED: {
        name: 'OK',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'The game has been updated',
      },
    },
    201: {
      CREATE_USER: {
        name: 'Created',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'The user has been created',
      },
      CREATE_GAME: {
        name: 'Created',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success',
        message: 'The game has been created',
      },
    },
    401: {
      UNAUTHORIZED: {
        name: 'Unauthorized',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'Not logged in',
      },
    },
    403: {
      FORBIDDEN: {
        name: 'Forbidden',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'Insufficient privileges',
      },
    },
    404: {
      'Not Found': {
        name: 'Not Found',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'The requested destination was not found',
      },
      NOT_FOUND: {
        name: 'Not Found',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'The requested destination was not found',
      },
    },
    406: {
      USER_EXISTS: {
        name: 'Not Acceptable',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'A user with the provided email already exists',
      },
      GAME_EXISTS: {
        name: 'Not Acceptable',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'A game with the provided UNIQUE IDENTIFIER already exists',
      },
      INVALID_CREDS: {
        name: 'Not Acceptable',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'There was a problem with the credentials provided',
      },
    },
    422: {
      INVALID_ARGUMENT: {
        name: 'Unprocessable Entity',
        info: 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors',
        message: 'You have provided an invalid argument',
      },
    },
  },
  ui: {
    confirmDelete: 'This is a permanent action. Are you sure?',
  },
  forms: {
    failure: {
      generic: 'Generic error message',
      required: 'Please do not leave this blank. ',
      invalid: {
        letters: 'Please use only letters. ',
        numbers: 'Please use only numbers. ',
        email: 'EMAIL VALIDATION MESSAGE. ',
        password: 'PASSWORD VALIDATION MESSAGE. ',
        url: 'URL VALIDATION MESSAGE. ',
        short: 'Please limit description to 250 characters. ',
        id: 'Please enter a valid ID. ',
      },
    },
  },
};
