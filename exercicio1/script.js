const numero = Number(prompt(`Digite um número`));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log(`O número ${numero} é divisil por 2 e por 3`);
  } else {
    console.log(`O número ${numero} não é divisil por 2 e por 3`);
  }
}

if (numero % 2 === 0 && numero % 3 === 0) {
  console.log(`O número ${numero} é divisil por 2 e por 3`);
} else {
  console.log(`O número ${numero} não é divisil por 2 e por 3`);
}
