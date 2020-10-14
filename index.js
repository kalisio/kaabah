#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const shell = require('shelljs')
const makeDebug = require('debug')
const debug = makeDebug('kaabah')

function log (message, type = 'info') {
  let color = '\x1b[0m'
  switch (type) {
    case 'error': 
      color = '\x1b[31m'
      break
    case 'warn': 
      color = '\x1b[33m'
      break
    default:
  }
  console.error('%s[kargo] %s\x1b[0m', color, message)
}

function init (backend) {
  debug('[subcommand] init')
  if (! fs.existsSync(backend)) {
    log('The ' + backend + ' file does not exist', 'error')
    shell.exit(1)
  }
  if (shell.cp(backend, 'backend.tf').code != 0) {
    log('An error has occured while copying ' + backend, 'error')
    shell.exit(1)
  }
  if (shell.exec('terraform init').code !== 0) {
    log('An error has occured while initializing Terraform', 'error')
    shell.exit(1)
  }
}

program
  .version(require('./package.json').version)
program
  .command('init <backend>')
  .action((backend) => init(backend))
  
 program.parse(process.argv)


