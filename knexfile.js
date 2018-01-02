module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/database.sqlite'
    }
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './server/database.sqlite'
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './server/test.sqlite'
    }
  }
};
