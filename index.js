/* 
Created by: Atul Gupta
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
.prompt([
    {
        message: "Enter your URL: ",
        name: "URL",
    },
]).then((answers)=>{
    console.log(answers.URL)
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
})