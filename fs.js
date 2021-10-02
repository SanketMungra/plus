const fs=require('fs');
// fs.writeFile('exp.txt',"this is chekc",(err)=>{
//     if(err) console.log(err)
//     else console.log('ha hale j ne')
// });
// fs.readFile('exp.txt','ascii',(err,file)=>{
//     if(err) console.log(err)
//     else console.log(file);
// });

// fs.readdir('exp',(err,files)=>{
//     if(err) console.log(err)
//     else console.log(files);
// })

fs.mkdir('nex',(err)=>{
    if(err) console.log(err)
    else console.log('sucess');

})