// Key Points:
// 1. Print multiple labels at once, with a 1024 character limit.
// 2. Print data if no new data is added withing 10 seconds.
// 3. Must create class that "extends/implements" Printer class/interface


// I believe File System would be the equivalent to InputStream in JavaScript/Node.
const fs = require("fs");

class PrinterJr {
    constructor(printedText = [], characterCount = 0) {
        // I used an array to store different labels into one place, so that they may all be printed together
        this.printedText = printedText;
        // The character count is used to make sure that the printedText array does not go above the 1024 character count once it is printeds
        this.characterCount = characterCount;
    };


    // Where the magic happens!
    print = (fileName) => {
        //Only allows user to enter a string as a parameter
        if (typeof fileName === "string") {
            // This will return the file as a string, converting it from ASCII
            var file = fs.readFileSync(fileName + ".txt", "ascii")

            // Case will stop new labels from exceeding limit and print if it is full
            if (this.characterCount + file.length > 1024) {
                // Notify user that the character limit is reached
                console.log("Limit exceeded, BWOMP!");
                // Print currently pending text
                console.log(this.printedText)
                // Reset printedText array as well as character count
                this.printedText = [];
                this.characterCount = 0;

            } else {
                // Send string from array to printedText array
                this.printedText.push(file);

                // Increase the character count by the amount of characters in the new file
                this.characterCount += file.length;

                console.log(this.printedText);
                console.log(this.characterCount);

                // Start printTimer 
                this.printTimer(this.printedText);
            }
        } else {
            console.log("Not a string! BWOMP!")
        }
    }

    // This function is the timer that starts once a label is inputed in print()
    printTimer = (text) => {
        const interval = setInterval(() => {
            console.log(this.printedText);

            // Reset printedText array as well as character count
            this.printedText = [];
            this.characterCount = 0;

            console.log("------------------------------------------");
            console.log(this.printedText);
            console.log("------------------------------------------");

            clearInterval(interval);
        }, 10000);
    }
}

var printerJrDeluxe = new PrinterJr();
printerJrDeluxe.print("socks");
printerJrDeluxe.print(1);

var printerDeluxeSr = new PrinterJr(["ID: WOWOWOWOW Item: Socks Description: Soft socks that are super soft and you should wear them or you just don\'t have good taste in socks. I mean come on it has little designs on them and they\'re super cool. All your friends would be so jealous if they saw you wearing these socks. Buy these socks please. Please buy these socks, they are such good socks. They are the best socks I've ever seen. Price: $100", "ID: WOWOWOWOW Item: Socks Description: Soft socks that are super soft and you should wear them or you just don\'t have good taste in socks. I mean come on it has little designs on them and they\'re super cool. All your friends would be so jealous if they saw you wearing these socks. Buy these socks please. Please buy these socks, they are such good socks. They are the best socks I've ever seen. Price: $100"], 824);
printerDeluxeSr.print("socks");

