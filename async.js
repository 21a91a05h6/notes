const fs=require('fs');
// const data=fs.readFileSync('input.txt', 'utf8');
// fs.writeFileSync('output.txt',data.toLowerCase());
// console.log('File written successfully');
async function files(){
    try{
        //const data=await fs.promises.readFileSync('input','utf8')
        const data=await fs.promises.readFile('./input.txt','utf8');
        //console.log(data.toLowerCase());
        await fs.promises.writeFile('./output.txt', data.toLowerCase());
        console.log('File written successfully');
    }
    catch(err){
        console.error('Error',err)
    }
}
files();