var lorem  = require('../');

lorem(10, function(err, str, unicode) {
    console.log(str, unicode);
})