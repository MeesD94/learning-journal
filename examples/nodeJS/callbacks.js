var fs = require("fs");

// *******************************************************************************************************************************
/**
 * This part of the code is written in a blocking way. The last console.log("program ended") waits for the data
 * readFileSync() to complete.
 *
 * ONLY UNCOMMENT ONE PART OF THE CODE.
 */
// var data = fs.readFileSync('files/input.txt');
//
// console.log(data.toString());
// console.log("Program Ended");


// *******************************************************************************************************************************
/**
 * This part of the code does not wait for file reading and proceeds to print "Program Ended" and at the same time,
 * the program without blocking continues reading the file.
 *
 * ONLY UNCOMMENT ONE PART OF THE CODE.
 */

fs.readFile('files/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");