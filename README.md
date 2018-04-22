# Bastion GitHub Bot

A GitHub bot to automate common tasks in GitHub.

## Features
- **Work in Progress**  

  Blocks merging of pull requests, if it's a work in progress.  

  It determines if a PR is a work in progress, if the PR title contains the
  phrase *WIP*, *Work in Progress* or *Do not Merge*

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
`.github/bastion.yml`
```yml
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

## Like this project?

If you like this project, please **⭐ Star** it in [GitHub](https://github.com/TheBastionBot/Bastion-GitHub-Bot)
to show your love.

Also, please consider supporting this project by being my
[Patron on Patreon](https://patreon.com/bastionbot) or [Donating via PayPal](https://paypal.me/snkrsnkampa).

<!-- Links -->
[configuration file]: #Repository-Configuration
