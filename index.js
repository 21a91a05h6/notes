import express from 'express';
import {get_author} from './dal.js';

const app = express();
// app.get('/', (req, res) => { // This is a simple route handler
//     res.send('Hello World');
// })
// app.get('/hello', (req, res) => { // This is a simple route handler
//     res.send('Hello, World!');  
// })
// app.get('/author/:id',(req,res)=>{
//     res.send(JSON.stringify(req.params.id));
// })
app.get('/author/:id',async (req, res) => { // This is a simple route handler
    /*
    try{
        let a=get_author(req.params.id);
        res.status(200);
        //res.type('application/json');
        //res.json(a); // Automatically sets the Content-Type to application/json
        res.send(JSON.stringify(a));
    }
    catch(err){
        res.status(404);
        res.send(`Error: ${err}`);
    }*/
    try {
        let a=await get_author(req.params.id)
        res.status(200);
        res.json(a)
    }catch(err){
        res.status(404).send(`Error: ${err}`);
    }
})
app.listen(8081, ()=>{
    console.log('Server Running');
})

console.log('End of file');
//end of file printed first and then the server starts listening because the server runs asynchronously. why is that ?
// The server runs asynchronously, allowing the script to continue executing while waiting for requests.