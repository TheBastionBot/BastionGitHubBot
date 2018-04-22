/**
 * Sends welcome comments in newly opened pull requests.
 * @module pullRequestWelcomeComment
 * @param {Object} context GitHub webhook event payload
 * @returns {void}
 */
module.exports = async context => {
  try {
    let actions = [
      'opened'
    ];

    if (!actions.includes(context.payload.action)) return;

    let allIssues = await context.github.issues.getForRepo(context.repo({
      state: 'all',
      creator: context.payload.pull_request.user.login
    }));

    let onlyPullRequests = allIssues.data.filter(data => data.pull_request);

    let config = await context.config('bastion.yml');
    if (!config) return;

    if (onlyPullRequests.length === 1) {
      if (!config.firstPullRequestWelcomeComment) return;

      context.github.issues.createComment(context.issue({
        body: config.firstPullRequestWelcomeComment
      }));
    }
    else {
      if (!config.pullRequestWelcomeComment) return;

      context.github.issues.createComment(context.issue({
        body: config.pullRequestWelcomeComment
      }));
    }
  }
  catch (e) {
    if (e.code !== 404) throw e;
  }
};
