var { str3, miStringConFormato, mensajePrecio, division, multiplicacion, resta,suma } = require("../modulo_1")

test('concatena dos strings', () => {
  expect(str3).toBe("Hola Mundo")
});

test('escapa caracteres especiales', () => {
  expect(miStringConFormato).toBe("Ella dijo \'Hola\' y luego escribió \\\'Mundo\\\\n\\\'");
});

test('muestra precio con descuento', () => {
  expect(mensajePrecio).toBe('El precio del producto pasó de 100 a 80');
});

test('suma tres números', () => {
  expect(suma).toBe(17);
});

test('resta tres números', () => {
  expect(resta).toBe(3);
});

test('multiplica tres números', () => {
  expect(multiplicacion).toBe(100);
});

test('divide tres números', () => {
  expect(division).toBe(1);
});