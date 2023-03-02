let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase();

if (nacionalidade === "brasileira") {
  console.log("a pessoa é do Brasil!");
} else if (nacionalidade === "argentina") {
  console.log("a pessoa é da Argentina!");
} else if (nacionalidade === "uruguaia") {
  console.log("a pessoa é do Uruguai!");
} else if (nacionalidade === "chilena") {
  console.log("a pessoa é do Chile!");
} else if (nacionalidade === "colombiana") {
  console.log("a pessoa é da Colômbia!");
} else {
  console.log("nacionalidade não encontrada");
}

function usuarioNacionalidade() {
  const nacionalidade = prompt(`Escreva aqui a sua nacionalidade`);

  switch (nacionalidade) {
    case "brasileiro":
      console.log(`Você é do Brasil`);
      break;
    case "argentino":
      console.log(`Você é da Argentina`);
      break;
    case "uruguaio":
      console.log(`Você é do Uruguai`);
      break;
    case "chileno":
      console.log(`Você é do Chile`);
      break;
    case "colombiano":
      console.log(`Você é da Colombia`);
      break;
    default:
      console.log(`Nacionalidade não encontrada`);
  }
}

usuarioNacionalidade();
