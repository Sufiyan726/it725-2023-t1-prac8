let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    // grab values from
    // /addtwonumbers?Number1=1&Number2=2
    let num1 = req.query.number1; // this should return 1
    let num2 = req.query.number2; // this should return 2
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {statusCode:200, message:'success', data:sum}

    res.json(obj);
});

app.listen(port, ()=>{
    console.log('server started -2');
});