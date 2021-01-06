const path = require('path');

console.log(path.dirname(require.main.filename));
module.exports = path.dirname(require.main.filename);//directory of the file responsible to running the aplication
