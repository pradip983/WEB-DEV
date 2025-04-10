import fs from "fs/promises"
import fsn from "fs"

 let basepath = `C:\\Users\\LENOVO\\Documents\\sigma web corse\\backend\\project - 15`

let files = await fs.readdir(`C:\\Users\\LENOVO\\Documents\\sigma web corse\\backend\\project - 15`)
console.log(files);

for (const item of files) {
    let ext1 = item.split(".")[1]
    let ext0 = item.split(".")[0]
     if(`${ext1}` != "js" && `${ext1}` != "json"){
     if (fsn.existsSync(ext1)) {
         fs.rename(`${basepath}//${ext0}.${ext1}`, `${basepath}//${ext1}/${ext0}.${ext1}`)
     }
     else {
         fs.mkdir(ext1)
         fs.rename(`${basepath}//${ext0}.${ext1}`, `${basepath}//${ext1}/${ext0}.${ext1}`)

     }
    }
}
