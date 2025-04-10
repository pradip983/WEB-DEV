import { appendFile } from "fs";
import fs from "fs/promises"

let a = await fs.readFile("pradip.txt"); 

let b = await fs.appendFile("pradip.txt",
    "\n\n\n\nthis is amazing promise"
)
console.log(a.toString(),b);