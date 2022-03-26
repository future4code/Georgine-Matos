const pessoa: (nome: string, dtNasc: string) => string = (nome, dtNasc) => {
  let dtNascimento = dtNasc.split("/");  
  let dia = dtNascimento[0];
  let mes = dtNascimento[1];
  let ano = dtNascimento[2];
  return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
};

console.log(pessoa("Danilo", "31/07/1987"));
