class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  
  fazerSom() {
    console.log("Som de animal");
  }
}
  
class Cachorro extends Animal {
  fazerSom() {
    console.log("Au Au");
  }

  exibirNome() {
    console.log(`${this.nome}`);
  }
}

const cachorro = new Cachorro("Rex");
console.log(cachorro.nome); // Saída: "Rex"
cachorro.fazerSom(); // Saída: Au Au
cachorro.exibirNome(); // Saída: "Rex"