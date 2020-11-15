#!/usr/bin/env node

const { command } = require('commander')
const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'Manage API key --https://nomics.com')
    .command('check', 'check coin price info')
    .parse(process.argv)
