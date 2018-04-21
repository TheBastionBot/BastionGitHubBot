/**
 * Checks if a PR is a work in progress
 * @module workInProgress
 * @param {Object} context GitHub webhook event payload
 * @returns {void}
 */
module.exports = context => {
  let actions = [
    'opened',
    'edited'
  ];

  if (!actions.includes(context.payload.action)) return;

  let isWIP = isWorkInProgress(context.payload.pull_request);
  let status = isWIP ? 'Pending' : 'Success';

  context.github.repos.createStatus(context.repo({
    sha: context.payload.pull_request.head.sha,
    state: status.toLowerCase(),
    target_url: 'https://github.com/apps/bastion',
    description: isWIP ? 'Work in progress – Do not merge!' : 'Ready for Review',
    context: 'Bastion/WIP'
  }));

  if (context.payload.repository && context.payload.repository.private) {
    context.log.info(`[Work In Progress]: ${context.payload.repository.owner.login}/{Private}#${context.payload.number} - ${status}`);
  }
  else {
    context.log.info(`[Work In Progress]: ${context.payload.repository.full_name}#${context.payload.number} - ${status}`);
  }
};

/**
 * @function isWorkInProgress
 * @param {Object} pr The pull request object
 * @returns {Boolean} Is the pull request a work in progress or not
 */
function isWorkInProgress(pr) {
  // TODO: Check if the PR is labled as a work in progress.
  if (containsWIP(pr.title)) return true;
  return false;
}

/**
 * @function containsWIP
 * @param {Object} text A string that's to be tested
 * @returns {Boolean} Does the string contains a word indicating it's a work
 * in progress or not
 */
function containsWIP(text) {
  return /\b(?:wip|work(?: |-)in(?: |-)progress|do(?: |-)not(?: |-)merge|don'?t(?: |-)merge)\b/i.test(text);
}
