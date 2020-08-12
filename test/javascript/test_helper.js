const execSync = require('child_process').execSync

global.renderErb = (path) => {
  return execSync('erb app/views/' + path)
}