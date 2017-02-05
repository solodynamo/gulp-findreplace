# gulp-findreplace [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> A gulp plugin that streamingly replaces matching strings with provided replacement string ⚡️

## Usage

First, install `gulp-findreplace` as a development dependency:

```shell
npm install --save-dev gulp-findreplace
```

Then, add it to your `gulpfile.js`:

### Regex Replace
```javascript
var freplace = require('gulp-findreplace');

gulp.task('replaceIt', function(){
  gulp.src(['example.txt'])
    .pipe(freplace(/foo(.{3})/g, 'foo'))
    .pipe(gulp.dest('build/example.txt'));
});
```
### String Replace
```javascript
var freplace = require('gulp-findreplace');

gulp.task('replaceIt', function(){
  gulp.src(['example.txt'])
    .pipe(freplace('love', 'code'))
    .pipe(gulp.dest('build/example.txt'));
});
```
You can also refer to an example provided in ./examples directory.


## API

gulp-findreplace works with streams and even if it encounter a file as a buffer it converts it to a stream then operates with provided string or regex.

### freplace(stringQuery, replacement)

#### stringQuery
Type: `String`

The string to search for.

#### replacement
Type: `String`

The replacement string or function. If `replacement` is a function, it will be called once for each match and will be passed the string that is to be replaced.

### freplace(regex, replacement)

#### regex
Type: `RegExp`

The regex pattern to search for. See the [MDN documentation for RegExp] for details.

#### replacement
Type: `String`

[travis-url]: http://travis-ci.org/solodynamo/gulp-findreplace
[travis-image]: https://travis-ci.org/solodynamo/gulp-findreplace.svg?branch=master
[npm-url]: https://www.npmjs.com/package/gulp-findreplace
[npm-image]: https://badge.fury.io/js/gulp-findreplace.svg
