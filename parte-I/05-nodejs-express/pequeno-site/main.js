const express = require('express');
const app = express();

// Middleware opcional para registrar cada acesso no console
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

// Página inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo ao Meu Site</h1>
    <p>Explore as nossas páginas:</p>
    <ul>
      <li><a href="/contato">Contato</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/portifolio">Portfólio</a></li>
      <li><a href="/quemsomos">Quem Somos</a></li>
    </ul>
  `);
});

// Página Contato
app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <p>Envie-nos uma mensagem!</p>
    <form method="post" action="/contato">
      <label for="nome">Nome:</label><br>
      <input type="text" id="nome" name="nome"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <button type="submit">Enviar</button>
    </form>
    <a href="/">Voltar para o início</a>
  `);
});

// Processar envio do formulário de contato (POST)
app.post('/contato', (req, res) => {
  res.send(`<h1>Obrigado por entrar em contato!</h1> <a href="/">Voltar para o início</a>`);
});

// Página Blog
app.get('/blog', (req, res) => {
  res.send(`
    <h1>Blog</h1>
    <p>Confira nossos últimos artigos:</p>
    <ul>
      <li><a href="/blog/post1">Post 1</a></li>
      <li><a href="/blog/post2">Post 2</a></li>
    </ul>
    <a href="/">Voltar para o início</a>
  `);
});

// Exemplo de página de post do blog
app.get('/blog/:post', (req, res) => {
  const post = req.params.post;
  res.send(`
    <h1>${post}</h1>
    <p>Conteúdo do post: "${post}"</p>
    <a href="/blog">Voltar para o blog</a>
  `);
});

// Página Portfólio
app.get('/portifolio', (req, res) => {
  res.send(`
    <h1>Portfólio</h1>
    <p>Veja alguns dos nossos projetos:</p>
    <ul>
      <li>Projeto A</li>
      <li>Projeto B</li>
      <li>Projeto C</li>
    </ul>
    <a href="/">Voltar para o início</a>
  `);
});

// Página Quem Somos
app.get('/quemsomos', (req, res) => {
  res.send(`
    <h1>Quem Somos</h1>
    <p>Somos uma equipe dedicada a criar soluções incríveis!</p>
    <a href="/">Voltar para o início</a>
  `);
});

// Página para rota não encontrada (404)
app.use((req, res) => {
  res.status(404).send(`
    <h1>Página Não Encontrada</h1>
    <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
    <a href="/">Voltar para o início</a>
  `);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000. Acesse http://localhost:3000');
});
