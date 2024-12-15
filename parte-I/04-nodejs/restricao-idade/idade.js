const http = require('http');

// Função de callback para processar pedidos e enviar respostas.
function handleRequest(req, res) {
  let idade = 20;

  // Condição no servidor que verifica a idade do usuário.
  if (req.url === '/maior-de-idade') {
    if (idade >= 18) {
      console.log("Você é maior de idade.");
      res.write('Você é maior de idade.');
      res.end();
    } else {
      console.log("Você é menor de idade.");
      res.write('Você é menor de idade.');
      res.end();
    }
  } else if (req.url === '/') {
    console.log("Servidor executou a função de callback.");
    console.log("Olá, Node.js!");
    res.write('Olá, Node.js!');
    res.end();
  }
}

// Cria um servidor com o método HTTP GET.
const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});