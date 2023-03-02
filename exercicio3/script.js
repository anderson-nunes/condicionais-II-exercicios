// códigos a serem reescritos

// a)
if (nome === "José") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}

function nomeUsuario() {
  const nome = prompt(`Escreva o seu nome`);
  nome === "José" ? console.log(`Oi, Zé`) : console.log(`Olá ${nome}`);
}

nomeUsuario();

// b)
if (idade >= 18) {
  console.log("Pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista!");
}

function carteiraDeMotorista() {
  const idade = Number(prompt(`Digite a sua idade`));

  idade >= 18
    ? console.log("Pode tirar carteira de motorista!")
    : console.log("Ainda não pode tirar carteira de motorista!");
}

carteiraDeMotorista();
