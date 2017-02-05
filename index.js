'use strict';

var Transform = require('readable-stream/transform');
var rs = require('replacestream');
var through = require('through2');
var Readablee = require('readable-stream/readable');

module.exports = function(searchQuery, replacement) {
    return new Transform({
        objectMode: true,
        //enc:encoding file:index.html
        transform: function(file, enc, callback) {

            if (file.isNull()) {
                return callback(null, file);
            }


            function streamingReplace() {
                if (file.isStream()) {
                    console.log("File Is A Stream");
                    file.contents = file.contents.pipe(rs(searchQuery, replacement));
                    return;
                }
            }

            function Readable(buffer) {

                var readable = new Readablee();
                var idx = 0;
                readable._read = function(size) {
                    var chunk = buffer.slice(0, size);
                    buffer = buffer.slice(size);
                    var finished = (chunk.length == 0 && buffer.length == 0);
                    this.push(finished ? null : chunk);
                };
                return readable;
            }


            function ensureStream() {

                if (file.isBuffer()) {
                    var createStream = Readable(file.contents);
                    createStream.on('error', function() {
                        console.log("Error!!")
                    });
                    file.contents = createStream;
                }
                streamingReplace();
                callback(null, file);
            }

            ensureStream();
        }
    });
};
