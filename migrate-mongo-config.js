require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.MONGO_URI,
    databaseName: 'db',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
}

module.exports = config
