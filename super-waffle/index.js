module.exports = robot => {
  robot.log('Yay, the robot was loaded!')

  robot.on('issues.assigned', async context => {
    console.log('An issue has been assigned')
    // Add label "backlog"
    const params = context.issue({
      labels: [{ name: 'backlog' }]
    })
    return context.github.issues.addLabels(params)
  })

  robot.on('push', async context => {
    console.log('Code pushed to your project')
    const issueNumber = context.payload.commits[0].message.match(/#(\d+)/)[1]
    const params = context.issue({
      labels: [{ name: 'in progress' }],
      number: issueNumber,
      name: 'backlog'
    })
    console.log(params)
    context.github.issues.deleteLabel(params)
    return context.github.issues.addLabels(params)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
