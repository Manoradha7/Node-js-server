const fs = require('fs') //inbuilt package for filesystem

const { fstat } = require("fs");

//to synchronizely read and write file use sync ex readsync and writesyncnpm init

// //to read file
// fs.readFile("./welcome.txt","utf-8",(err,data)=>{ // to encode we use "utf-8"
//     console.log(data);
// });

// //part 1 is  document to read
// //part 2 is encoder code to encoding from hexadecimal to text
// //part 3 is callback function


// //to write a file
//  const quote = " No beauty shines brighter than that of a good heart";
//  fs.writeFile("./awesome.txt",quote,(err)=>{
//      console.log("Completed writing!!!")
//  })

//  //task 1 :create multiple files 
//  const quote2 ="Live more,worry less";
//   function createQuotes(noOfFile,quote2){
//     for(i=1;i<=noOfFile;i++){
//         fs.writeFile(`./backup/text-${i}.txt`,quote2,(err)=>{
//             console.log("created and writed!!!" ,i);
//         })
//       }
//   }
 
//   //task 2: create numberof files

//   const [, ,noOfFile]= process.argv;
//   createQuotes(noOfFile,quote2);


//   // to update the file data use qppandFile for it 
//   const nicequote= "Enjoy your life"
//   fs.appendFile(`./awesome.txt`,nicequote,(err)=>{
//     console.log("created and writed!!!" ,i);
// })

//to delete file we use unlink to delete 
// fs.unlink("./backup/text-20.txt",(err)=>{
//     console.log("File has been deleted")
// })


//to read files in a directory
fs.readdir("./backup",(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
})