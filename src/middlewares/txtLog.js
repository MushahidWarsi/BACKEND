//const fs = require("fs");
import fs from "fs";

function logReqRes(fileName) {
    return (req, res, next) => {
        fs.appendFile(
            fileName,
            `\n${Date.now()}:`,
            (err, data) => {
                next();
            }
        );
    }
};

//fs.writeFileSync("./test2.txt","Hey there");
//fs.writeFileSync("./test2.txt","Hey there",(err)=>{});


export {
    logReqRes
};