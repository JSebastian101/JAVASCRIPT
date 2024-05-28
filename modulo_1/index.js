//╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮//
//╞═════════════════════════════════ EJERCICIOS STRINGS ════════════════════════╡//
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ 1. Concatena los dos strings y asígnalos a str3                             ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    const str1 = "Hola";
    const str2 = "Mundo";
    let str3;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ 2. Dada una variable que contiene un string, crea una nueva variable que    ║//
//║    contenga el mismo string pero con los caracteres especiales ", ', \\     ║//
//║    y \n escapados.                                                          ║//
//║    Es decir, si el string usa comillas simples, remplazrlas por \'          ║//
//║    si el string usa barra invertida, reemplazarlar por  \\                  ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    const miString = "Ella dijo 'Hola' y luego escribió \'Mundo\\n\'";
    let miStringConFormato;
    
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ 3. Dadas dos variables numéricas total y descuento, crea un string          ║//
//║    utilizando comillas invertidas (template strings) que muestre el mensaje ║//
//║    "El precio del producto pasó de [total] a [total - descuento]".          ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    const total = 100;
    const descuento = 20;
    let mensajePrecio;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//╞═════════════════════════════════ EJERCICIO NUMEROS ═════════════════════════╡//
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ Dadas tres variables numéricas, realiza las siguientes operaciones          ║//
//║ aritméticas y asigna el resultado a nuevas variables:                       ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    const num1 = 10;
    const num2 = 5;
    const num3 = 2;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ - Suma de las tres variables                                                ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    let suma;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ - Resta de las tres variables (primera menos segunda menos tercera)         ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    let resta;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ - Multiplicación de las tres variables                                      ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    let multiplicacion;
//╞═════════════════════════════════════════════════════════════════════════════╡//
//║ - División de la primera variable por la segunda y luego por la tercera     ║//
//╞═════════════════════════════════════════════════════════════════════════════╡//
    let division;
//╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯//

module.exports = {
  str3,
  miStringConFormato,
  mensajePrecio,
  suma,
  resta,
  multiplicacion,
  division,
};
