const express = require('express');

const server = express();
const port = 3333;
server.use(express.json())

server.get('/curso',(req,res)=>{
    const nome = req.query.nome
    const id = req.params.id
    return res.send('Rota funcionando'+ ' ' + nome + ' ' + `O numero do curso é ${id}`)

    //query paramas são sempre enviado como objeto ? antes e chave=valor & para adicionar mais um query
})
//posso querer pegar via router params

//vamos ver como funciona os queryParams
//vamos ver como funciona o router params
//vamos ver como funciona o body params

server.listen(port,()=>{
    console.log('servidor rodando na porta' + port);
})


