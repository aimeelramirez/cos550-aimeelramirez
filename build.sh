#!/bin/bash

git checkout master

# Deletes gh-pages branch if there is one locally.
# If there is no gh-pages branch suppress the output.
git branch -D gh-pages

# Create new gh-pages branch with no commits.
git checkout --orphan gh-pages

# Remove all tracked files from git but don't delete them permanently.
# Preparation for build script.
# Putting quotes are the * enables it to rm directories as well, odd workaround.
git rm --cached '*'

# Run React's build script.
if (npm run build); then
  # If build script works, we only want to add the directory it stored the
  # production files in.
  # The --force flag allows us to add untracked files.
  git add --force client/build/

  # Commit the production directory.
  git commit -m "deploy task"

  # Delete the gh-pages branch on github because its history won't line up with
  # new gh-pages branch.
  git push origin :gh-pages

  # Only push the build/ directory of the gh-pages branch to github.
  git subtree push --prefix client/build/ origin gh-pages
fi

# Remove all production files that we don't want in development, do not delete
# node_modules.
git clean -x -d --force --exclude=node_modules
git checkout master