const { Client, logger } = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const { stopInstance } = require('./lib/pm2')
const fs = require('fs')
const path = require('path')

// Charger tous les plugins
const pluginsDir = path.join(__dirname, 'plugins')
fs.readdirSync(pluginsDir).forEach(file => {
  if (file.endsWith('.js')) {
    require(path.join(pluginsDir, file))
    console.log("✅ Plugin chargé :", file) // Debug
  }
})

const start = async () => {
  logger.info(`🛡️ SPIDER-NET SECURE-BOT v${VERSION}`)
  try {
    await DATABASE.authenticate({ retry: { max: 3 } })
  } catch (error) {
    const databaseUrl = process.env.DATABASE_URL
    logger.error({ msg: 'Unable to connect to the database', error: error.message, databaseUrl })
    return stopInstance()
  }
  try {
    const bot = new Client()
    await bot.connect()
  } catch (error) {
    logger.error(error)
  }
}
start()
