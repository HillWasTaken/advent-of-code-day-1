const fs = require('node:fs');

fs.readFile("code.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    let line = data.split("\n");
    let array = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9", "0"
    ];
    let sum = 0 ;
    line.forEach(element => {
        let onlyNumbers = element.split("").filter(x => Number(x));
        let number = onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1];
        console.log(number)
        sum += parseInt(number);
        console.log(sum)
    });
    fs.writeFile('results.txt', sum.toString(), err => {
        if (err) {
            console.error(err);
        }
    });
    // console.log(array2)
});