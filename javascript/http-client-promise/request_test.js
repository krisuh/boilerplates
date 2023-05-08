const { request } = require('./request');

request('www.google.fi').then(response => console.log(response)).catch(error => console.log(error));
