#!/bin/bash
if [[ $TRAVIS_COMMIT_MESSAGE == *"[skip publish]"* ]]
then
	echo "Skipping publish stage"
  exit 0
else
  npm run docs:build
fi