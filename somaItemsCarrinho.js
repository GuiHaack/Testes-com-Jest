module.exports = somaItemsCarrinho;

function somaItemsCarrinho(produtos){
  return produtos.reduce(function(total, produto){
    return total + produto.preco*produto.quant;
  }, 0);
};