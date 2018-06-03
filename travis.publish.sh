#!/bin/bash
if [[ $TRAVIS_COMMIT_MESSAGE == *"[skip publish]"* ]]
then
	echo "Skipping publish stage"
else
  yarn install
  npm run docs:build
fi