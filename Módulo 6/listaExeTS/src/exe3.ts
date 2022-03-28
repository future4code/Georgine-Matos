enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filme = {
  nome: string;
  ano: number;
  genero: GENERO;
};

type filmeComInfoOpcional = {
  pontuacao?: number;
};

type filmeCompleto = filme & filmeComInfoOpcional;

function chamaFilme(
  nome: filmeCompleto,
  ano: filmeCompleto,
  genero: GENERO.ACAO,
  pontuacao: filmeCompleto
): any {
  return filmeCompleto;
}

console.log(chamaFilme('duna',15, GENERO.ACAO, 15));
