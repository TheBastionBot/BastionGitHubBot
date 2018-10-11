module.exports = context => {
  require('../modules/workInProgress')(context);
  require('../modules/pullRequestWelcomeComment')(context);
  require('../modules/inviteContributors')(context);
};
