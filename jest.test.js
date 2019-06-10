const somaItemsCarrinho = require('./somaItemsCarrinho');

test("soma todos os produtos de um carrinho", () => {
  const input = [
    {
      nome: "produto 1",
      preco: 2.25,
      quant: 1,
    },
    {
      nome: "produto 2",
      preco: 3.5,
      quant: 3,
    },
    {
      nome: "produto 3",
      preco: 9.75,
      quant: 2,
    },
  ];

  const output = somaItemsCarrinho(input);

  const expected = 32.25;

  expect(output).toBe(expected);
});
