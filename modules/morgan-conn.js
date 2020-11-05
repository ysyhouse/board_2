const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path= require('path');

const logstream =rfs.createStream('access.log',{
    interval : '1d',
    path: path.join(__dirname,'../logs')
});

const logger =morgan('combined', {stream : logstream});

module.exports = logger;