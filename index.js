#! /usr/bin/env node
var path = require('path')
var pkg = require(path.join(process.cwd(), 'package.json'))
var os = require('os')
var platform = os.platform()
var log = console.log

var spawn = require('cross-spawn')

// Build arguments for npm
var dependencies = platform + 'Dependencies'
var dependenciesObj = pkg[dependencies]

if (dependenciesObj && Object.keys(dependenciesObj).length) {
  log('Installing dependencies for ' + platform)
  var npmArgs = ['install']
  // Append any arguments from commandline
  npmArgs = npmArgs.concat(process.argv.slice(2));
  for (var dep in dependenciesObj) {
    if (dependenciesObj.hasOwnProperty(dep)) {
      npmArgs.push(dep.concat('@').concat(dependenciesObj[dep]))
    }
  }
  var options = {
    stdio: 'inherit' // feed all child process logging into parent process
  }

  spawn('npm', npmArgs, options)
} else {
  log('No specific dependencies on this platform: ' + platform)
}
