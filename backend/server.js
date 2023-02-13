import express from "express" ;
import cors from 'cors'
const app = express()
import connection from './database.js';

app.use(cors());

app.use(express.json());



app.get('/test', function(req,res){
    const sql = "SELECT * FROM faq "
    connection.query(sql, function(err, result){
        if(err) throw(err);
       return res.json(result);
    })
    
})


app.post('/viewer', (req,res)=>{

    const name = req.body.name;
    const password = req.body.password;
    
    connection.query("INSERT into VIEWER (name,password) value (?,?)", [name,password], (err,result)=> {
        if(err) throw err;


    });
})




app.post('/faq', (req,res) =>
{
    const que = req.body.que;

    connection.query("INSERT into faq (que) value (?)",[que],(err,result)=> {
        if(err) throw err;
    })

})

app.delete("/delete" , (req,res) => {

    const  id  = req.body.id;
    const sql = `DELETE from faq WHERE id = '${id}' `;
    connection.query(sql,  (err,result) => {
        if(err) throw err;
    })
})

app.put("/update", (req, res) => {
  const  id  = req.body.id;
  const  que  = req.body.que;
  const sql = `UPDATE faq SET que = '${que}' ' WHERE id = '${id}'`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.send("Record updated successfully");
  });
});

app.get('/login', (req,res) => {

    const name = req.body.name;

   connection.query('SELECT viewer.id,viewer.name ' + 'FROM `viewer` ' + 'where name=? '  , name,(err,data) =>{
    if(err) throw err;
    
    const test = JSON.parse(JSON.stringify(data))
    console.log(test)
   } ) 
})





app.listen(3000, function(){
        connection.connect(function(err){
            if(err) throw(err);
            console.log("connected")
        })
});



