module.exports = robot => {
  robot.log('Bastion GitHub bot is live!');

  require('./handlers/eventHandler')(robot);
};
