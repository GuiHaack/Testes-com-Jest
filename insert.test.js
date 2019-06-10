const java = require('./JavaScript');
var aux = {
    value: null,
    right: null,
    left: null
};
var emOrde=[];
var i=-1;

test('insert', () => {
   expect(java.insert(aux, 5)).toBe(true);
});

test('insert 2', () => {
   expect(java.insert(aux, 3)).toBe(true);
});

test('Erro ao Localizar', () => {
   expect(java.localizar(aux, 5)).toBe(undefined);
});

test('Sucesso ao Localizar', () => {
   expect(java.localizar(aux, 3)).toStrictEqual({"left": {}, "right": {}, "value": 3});
});

