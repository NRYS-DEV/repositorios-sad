const fs = require('fs');

var factorial = function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const myArgs = process.argv.slice(2);
const content = factorial(myArgs[0]);
fs.writeFile(myArgs[1], content.toString(), err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
