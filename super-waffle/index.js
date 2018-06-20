module.exports = robot => {
  robot.log('Yay, the robot was loaded!')

  robot.on('push', async context => {
    console.log('Code pushed to your project')
    const params = { test: 'test value' }
    console.log(context.issue.toString())
    console.log(context.issue(params))
  })

  robot.on('issues.assigned', async context => {
    console.log('An issue has been assigned')
    // Add label "backlog"
    const params = context.issue({
      labels: [{ name: 'backlog' }]
    })
    console.log(params)
    return context.github.issues.addLabels(params)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
