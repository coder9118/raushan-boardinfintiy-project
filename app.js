const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
app.use(express.json());

app.post('/student/add' , (req,res) =>{
    let studentData = JSON.stringify(req.body);
    fs.writeFileSync('details.json', studentData);
    res.send({
        "result": "Success"
    })
})
app.get('/student/getDetails' , (req,res)=>{
   let data = fs.readFileSync('details.json');
   res.send(JSON.parse(data));
});
app.get('/student/studentsList' , (req,res)=>{
    let data = fs.readFileSync('students.json');
    res.send(JSON.parse(data));
});
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})