const pessoa = {
  nome: "João",
  idade: 30,
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar();