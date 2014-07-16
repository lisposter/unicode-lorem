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
            if(code.length < 4) {
                code = '0000'.substr(0, 4 - code.length) + code;
            }
            var uniChar = String.fromCharCode(code);
            
            if(uniChar == '\u0000' || !uniChar.length || uniChar.length > 2) {
                i--;
            } else {
                result.unicode.push('u' + code);
                result.str.push(uniChar);
            }
        }; 
    }

    callback(null, result.str, result.unicode);
}

module.exports = lorem;