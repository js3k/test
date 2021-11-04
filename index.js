const fs = require('fs');

// fs.writeFile('./files/sample.txt', 'Nodejs - File Write example FS ' + (new Date()), function (err) {

//     if (err) {
//         console.log("Error occurred", err);
//     }

//     console.log("File write successfull");
// });

// fs.appendFile('./files/sample2.txt', '\r\nNodejs - File Append example FS ' + new Date(), (err) => {
//     if (err) {
//         console.log("Error occurred", err);
//     }

//     console.log("File append successfull")
// });



fs.readFile('./files/sample2.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error occurred", err);
    }

    console.log("File read successfull. File Data", data);
});