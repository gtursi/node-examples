var fs = require('fs');

var path1 = ".",
    path2 = "../.",
    logCount;

function countFiles(path, callback) {
    fs.readdir(path, function (err, filenames) {
        callback(err, path, filenames.length);
    });
}

logCount = function (err, path, count) {
	dir = require('path').resolve(__dirname,path);
    console.log(count + " files in " + dir);
};

countFiles(path1, logCount); 
countFiles(path2, logCount);
