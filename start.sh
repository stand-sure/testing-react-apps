#! /bin/bash
export NVM_DIR=$HOME/.nvm;

# shellcheck disable=SC1091
source "$NVM_DIR/nvm.sh";

nvm use lts/gallium
npm start