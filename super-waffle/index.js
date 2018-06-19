module.exports = app => {
  app.log('Yay, the app was loaded!')

  app.on('push', async context => {
    app.log('Sent a push')
    let output = await context
    app.log(output)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
