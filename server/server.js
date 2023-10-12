// Comentário de linha

/*

    Comentario de bloco
    

*/


//
const http = require('http');

//Definindo a porta e o host

const port = 3000;
const host = 'localhost';

//Criando servidor HTTP
const server = http.createServer((req, res) => {

    res.statusCode = 200; //Definido status code para OK (200).
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n'); //Mensagem que será enviada no corpo da requisição.
} );

//Iniciando o servidor

server.listen(port,host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);

});

