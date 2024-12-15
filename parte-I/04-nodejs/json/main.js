const usuario = {
  nome: "João",
  idade: 30
};
  
// Convertendo para JSON
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);  // Saída: {"nome":"João","idade":30}
  
// Convertendo de JSON para objeto
const usuarioObj = JSON.parse(usuarioJSON);
console.log(usuarioObj.nome);  // Saída: João