A unicode string generator. Ah...

# Usage

```
npm install unicode-lorem
```

```js
var lorem  = require('unicode-lorem');
lorem(LENGTH, CALLBACK);

```

or
```js
console.log(lorem(10));
```

# Example

```js
var lorem  = require('unicode-lorem');
lorem(10, function(err, str, unicode) {
    console.log(str, unicode);
})
```

`str` is the unicode string, and the `unicode` will be the escaped unicode.
And, both of this results are present as an array.

for example, the code above will display the results like below:
```js
[ '稀', '㢹', 'ḉ', '黅', '鈀', '熵', '쭟', '燿', '', 'Ȉ' ] [ 'u31232',
  'u80057',
  'u73225',
  'u40645',
  'u722e8',
  'u29109',
  'u52063',
  'u94719',
  'u59884',
  'u52e01' ]
```

so, in most time, you may just want to use the string which has been returned in callback.
