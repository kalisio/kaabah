#!/bin/bash
if [[ $TRAVIS_COMMIT_MESSAGE == *"[skip publish]"* ]]
then
	echo "Skipping publish stage"
else
  - export PUBLISH=true
  - yarn install
  - npm run docs:build
fi