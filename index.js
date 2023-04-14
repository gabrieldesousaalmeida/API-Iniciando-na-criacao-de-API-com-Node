const express = require('express');
const app = express();

// fazer o express permitir o uso de json
app.use(express.json());

app.get('/', (req, res)=>{
    return res.json({titulo: "Iniciando com API"})
})
app.listen(8080, ()=>{
    console.log('O servidor foi iniciado na porta 8080: http://localhost:8080')
})