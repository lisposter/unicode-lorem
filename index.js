function lorem(length, callback) {
    var done = arguments[arguments.length - 1];
    if(done instanceof Function !== true) return new Error('No callback fn');

    var result = {
        str: [],
        unicode: []
    };

    if(length) {
       for (var i = 0; i < length; i++) {
            var dec = Math.floor(Math.random() * (917999 + 1));
            var code = Number(dec).toString('16');
            var uniChar = String.fromCharCode(code);
            
            if(uniChar == '\u0000' || !uniChar.length) {
                i--;
            } else {
                result.unicode.push('/' + 'u' + code);
                result.str.push(uniChar);
            }
        }; 
    }

    callback(null, result);
}

module.exports = lorem;