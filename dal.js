//Data Access Layer-dal.js
import mysql2 from 'mysql2/promise';
class Author {
    constructor(id,fname,lname){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
}
export async function get_author(id){
    const conn= await mysql2.createConnection({
        user:'root',
        password:'n3u3da!',//don't give password in production code
        host:'localhost',
        database:'pubs'
    })

    let query_results= await conn.query('select au_lname,au_fname from authors where au_id= ?',[id]);
    if(query_results[0].length===0){
        throw new Error(`Err: id ${id} not found`)
    }else{
        //return query_results[0][0];
        return new Author(id,query_results[0][0].au_fname,query_results[0][0].au_lname);
    }

    // conn.query('select au_lname,au_fname from authors where au_id= ?'
    //     [id],handler)
    //given 100 as string because once the id is passed as a parameter in the route, it is treated as a string
    /*if(id==='100'){
        return new Author(id,'Bob','Smith')
    }else{
        throw new Error(`id ${id} not found`);
    }*/
}
//does not really matter what id you gave at the app.get /author/:id route, it will always return the same author object