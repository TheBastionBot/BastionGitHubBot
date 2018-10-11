/**
 * Invite first time contributors to organization.
 * @module inviteContributors
 * @param {Object} context GitHub webhook event payload
 * @returns {void}
 */
module.exports = async context => {
  try {
    let actions = [
      'closed'
    ];

    if (!actions.includes(context.payload.action)) return;

    const isMerged = context.payload.pull_request.merged;
    const isUser = context.payload.pull_request.user.type === 'User';
    const isOrg = context.payload.repository.owner.type === 'Organization';
    const userShouldBeInvited = isOrg && isUser && isMerged;

    if (!userShouldBeInvited) return;

    let config = await context.config('bastion.yml');
    if (!config || !config.inviteContributors) return;

    const payload = {
      org: context.payload.repository.owner.login,
      username: context.payload.pull_request.user.login,
      role: 'member'
    };

    context.github.orgs.checkMembership(payload).catch(() => {
      context.github.orgs.addOrgMembership(payload);
    });
  }
  catch (e) {
    throw e;
  }
};
