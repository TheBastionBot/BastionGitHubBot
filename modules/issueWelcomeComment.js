/**
 * Sends welcome comments in newly opened issues.
 * @module issueWelcomeComment
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
      creator: context.payload.issue.user.login
    }));

    let onlyIssues = allIssues.data.filter(data => !data.pull_request);

    let config = await context.config('bastion.yml');
    if (!config) return;

    if (onlyIssues.length === 1) {
      if (!config.firstIssueWelcomeComment) return;

      context.github.issues.createComment(context.issue({
        body: config.firstIssueWelcomeComment
      }));
    }
    else {
      if (!config.issueWelcomeComment) return;

      context.github.issues.createComment(context.issue({
        body: config.issueWelcomeComment
      }));
    }
  }
  catch (e) {
    if (e.code !== 404) throw e;
  }
};
