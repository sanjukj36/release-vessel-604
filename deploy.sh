#!/bin/bash

last_commit_id=

npm run build

if [ $? -eq 0 ]; then
  echo "[SUCCESS] Build."
else
  echo "[FAILED] Build."
  exit
fi

scp -r dist/* memphis@192.168.17.22:/var/www/ams.memphis-marine.com/html

if [ $? -eq 0 ]; then
  echo "[SUCCESS] Deployement."
else
  echo "[FAILED] Deployement."
  exit 1
fi;
