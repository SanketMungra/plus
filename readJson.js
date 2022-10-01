'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);
console.log(data);
