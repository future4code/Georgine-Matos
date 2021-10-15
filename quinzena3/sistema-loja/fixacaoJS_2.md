function calculaPrecoTotal(quantidade) {
  let valorCompra
  if(quantidade >= 12){
    valorCompra = quantidade*1
    return valorCompra
  }else{
    valorCompra = quantidade*1.3
    return valorCompra
  }
}