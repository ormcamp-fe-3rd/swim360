const config = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  expressPort: process.env.EXPRESS_PORT,
};

module.exports = config;
