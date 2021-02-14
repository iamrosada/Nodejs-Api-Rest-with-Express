
//importando o express
const express = require('express');
const app = express();
//a porta que vai ser chamada
const port = 3000;

app.get('/',(req, res)=>{

    res.send("ola mundo pelo Express");
})
//ouvindo a porta e return uma funcao
app.listen(port, ()=>{
  console.log("rodando na porta 3000")
})