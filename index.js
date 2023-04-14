const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('página inicial')
})
app.listen(8080, ()=>{
    console.log('O servidor foi iniciado na porta 8080: http://localhost:8080')
})