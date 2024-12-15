const express = require('express');
const app = express();

// Middleware para interpretar JSON no body das requisições
app.use(express.json());

// Simulando um banco de dados em memória
let usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 }
];

// Rota GET - Listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET - Obter um usuário pelo ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Rota POST - Adicionar um novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1, // Simulando um ID automático
    nome: req.body.nome,
    idade: req.body.idade
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario); // Retorna o usuário criado com status 201 (Created)
});

// Rota PUT - Atualizar um usuário existente pelo ID
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (usuario) {
    usuario.nome = req.body.nome || usuario.nome;
    usuario.idade = req.body.idade || usuario.idade;

    res.json(usuario); // Retorna o usuário atualizado
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Rota DELETE - Remover um usuário pelo ID
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice !== -1) {
    usuarios.splice(indice, 1); // Remove o usuário pelo índice
    res.status(204).send(); // Retorna status 204 (No Content)
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Inicializando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
