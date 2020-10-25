module.exports = {
  port: process.env.port || 8090,
  db: {
    database: process.env.DB_NAME || 'vue_project',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'q',
    options: {
      port: '3303',
      dialect: process.env.dialect || 'sqlite',
      host: process.env.host || 'localhost',
      storage: './vue_project.sqlite'
    }
  }
}
