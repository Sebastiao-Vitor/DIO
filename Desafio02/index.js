// Entradas or Input
let vitorias = 1505;
let derrotas = 1410;
let result
let NivelDaRank = "";
let message

// Funções
function resultOfRank(num1, num2) {
  result = num1 - num2;
  return result
};

function levelOfRank(num3) {
  if(num3 < 10) {
    NivelDaRank = "Ferro";
  } else if(num3 >= 11 && num3 <= 20) {
    NivelDaRank = "Bronze"
  } else if(num3 >= 21 && num3 <= 50) {
    NivelDaRank = "Prata"
  } else if(num3 >= 51 && num3 <= 80) {
    NivelDaRank = "Ouro"
  } else if(num3 >= 81 && num3 <= 90) {
    NivelDaRank = "Diamante"
  } else if(num3 >= 91 && num3 <= 100) {
    NivelDaRank = "Lendário"
  } else {
    NivelDaRank = "Imortal";
  };
  return NivelDaRank;
};

function messageFinal(num4, num5) {
  message = `O Herói tem de saldo de ${num4} está no nível de ${num5}`;
  return message
};


// Saidas or Output
resultOfRank(vitorias, derrotas)
levelOfRank(result)
messageFinal(result, NivelDaRank)

// Principal Output do Desafio de ranks

console.log(message)