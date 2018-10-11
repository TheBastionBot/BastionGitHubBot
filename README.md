# Bastion GitHub Bot

A GitHub bot to automate common tasks in GitHub.

## Features
- **Work in Progress**  

  Blocks merging of pull requests, if it's a work in progress.  

  It determines if a PR is a work in progress, if the PR title or a label contains
  the phrase *WIP*, *Work in Progress* or *Do not Merge*

- **Invite Contributors to Organization**

  Send invitation to contributors, to join the organization as a member when
  their pull request is merged in a repository where this is configured.

  **Configuration Options:** `inviteContributors`

- **Issue Welcome Comments**  

  Sends welcome comments in newly opened issues with the message you specify in
  your repository's [configuration file]: `.github/bastion.yml`.  

  **Configuration Options:** `firstIssueWelcomeComment`, `issueWelcomeComment`

- **Pull Request Welcome Comments**  

  Sends welcome comments in newly opened pull requests with the message you
  specify in your repository's [configuration file]: `.github/bastion.yml`.  

  **Configuration Options:** `firstPullRequestWelcomeComment`, `pullRequestWelcomeComment`

> More features will be coming soon.

## Repository Configuration
This is an example of how the Bastion configuration for the repository should look like.

Location: `.github/bastion.yml`

```yml
## Invite Contributors to Organization ##

inviteContributors: true


## Issue Welcome Comments ##

# Comment to send on a user's first issue in the repository.
firstIssueWelcomeComment: |
  Thank you for opening this issue. A maintainer will get by as soon as possible to address this issue.
  Since this is your first issue in this repository, please make sure follow the issue template and provide as much detail as possible.

# Comment to send on the user's forthcoming issues in the repository.
issueWelcomeComment: |
  Thank you for opening this issue. A maintainer will get by as soon as possible to address this issue.
  In the mean time, please check out our contributing guidelines to explore other ways you can get involved.


## Pull Request Welcome Comments ##

# Comment to send on a user's first pull request in the repository.
firstPullRequestWelcomeComment: |
  Thank you for opening this issue. A maintainer will get by as soon as possible to address this issue.
  Since this is your first issue in this repository, please make sure follow the issue template and provide as much detail as possible.

# Comment to send on the user's forthcoming pull requests in the repository.
pullRequestWelcomeComment: |
  Thank you for opening this issue. A maintainer will get by as soon as possible to address this issue.
  In the mean time, please check out our contributing guidelines to explore other ways you can get involved.
```

## Like this project? Consider supporting it.

If you like this project, please **⭐ Star** it in [GitHub](https://github.com/TheBastionBot/Bastion-GitHub-Bot)
to show your love.

This application is currently hosted on a free service, which means that it
will have performance issues in the future if too many users/organizations
started using it.  
So, please consider supporting this project by being my
[Patron on Patreon](https://patreon.com/bastionbot) or [Donating via PayPal](https://paypal.me/snkrsnkampa),
which will allow me to host this application in it's own dedicated server, so
that it will be able to server as many users/organizations as possible without
any issues.

Thank you! 😄

<!-- Links -->
[configuration file]: #Repository-Configuration
