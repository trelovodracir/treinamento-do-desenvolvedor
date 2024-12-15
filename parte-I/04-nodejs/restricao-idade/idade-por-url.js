const http = require('http');

// Função de callback para processar pedidos e enviar respostas.
function handleRequest(req, res) {
  // Cria um objeto URL usando a requisição
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`); // Necessário para resolver URLs absolutas
  const pathname = parsedUrl.pathname; // Pega apenas o caminho (ex: '/maior-de-idade')
  const query = parsedUrl.searchParams; // Pega os parâmetros da query string

  // Verifica se o parâmetro 'idade' foi passado na URL
  const idade = query.has('idade') ? parseInt(query.get('idade'), 10) : null; // Converte o valor para número, se presente

  // Condição no servidor que verifica a idade do usuário.
  if (pathname === '/maior-de-idade') {
    if (idade !== null && !isNaN(idade)) {
      if (idade >= 18) {
        console.log("Você é maior de idade.");
        res.write(`Você é maior de idade. Sua idade é ${idade}`);
      } else {
        console.log("Você é menor de idade.");
        res.write(`Você é menor de idade. Sua idade é ${idade}`);
      }
    } else {
      console.log("Idade não especificada.");
      res.write('Por favor, forneça sua idade na URL usando ?idade=SEU_VALOR.');
    }
    res.end();
  } else if (pathname === '/') {
    console.log("Servidor executou a função de callback.");
    console.log("Olá, Node.js!");
    res.write('Olá, Node.js!');
    res.end();
  } else {
    // Rota não encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Página não encontrada.');
    res.end();
  }
}

// Cria um servidor com o método HTTP GET.
const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});
