function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  var pizza = {};
  pizza.tipoCorteza = tipoCorteza;
  pizza.tipoSalsa = tipoSalsa;
  pizza.quesos = quesos;
  pizza.salsas = salsas;
  return pizza;
}

var p1 = pizzaOven(
  "estilo Chicago",
  "tradicional",
  ["mozzarella"],
  ["pepperoni", "salchicha"]
);

var p2 = pizzaOven(
  "lanzada a mano",
  "marinara",
  ["mozzarella", "feta"],
  ["champiñones", "aceitunas", "cebollas"]
);

var p3 = pizzaOven(
  "lanzada a mano",
  "tradicional",
  ["mozzarella", "gouda"],
  ["jamon", "tocino", "carne"]
);

var p4 = pizzaOven(
  "estilo Chicago",
  "tradicional",
  ["provolone", "cheddar"],
  ["jamon", "piña"]
);

var tiposCortezaArr = ["estilo Chicago", "lanzada a mano"];
var tiposSalsaArr = ["tradicional", "marinara"];
var tiposQuesosArr = [
  ["mozzarella"],
  ["mozzarella", "feta"],
  ["mozzarella", "gouda"],
  ["provolone", "cheddar"],
];
var tiposSalsasArr = [
  ["pepperoni", "salchicha"],
  ["champiñones", "aceitunas", "cebollas"],
  ["jamon", "tocino", "carne"],
  ["jamon", "piña"],
];

function randomPizza() {
  var randomCorteza =
    tiposCortezaArr[Math.floor(Math.random() * tiposCortezaArr.length, 0)];
  var randomTipoSalsa =
    tiposSalsaArr[Math.floor(Math.random() * tiposSalsaArr.length, 0)];
  var randomQueso =
    tiposQuesosArr[Math.floor(Math.random() * tiposQuesosArr.length, 0)];
  var randomSalsa =
    tiposSalsasArr[Math.floor(Math.random() * tiposSalsasArr.length, 0)];
  return pizzaOven(randomCorteza, randomTipoSalsa, randomQueso, randomSalsa);
}

console.log(randomPizza());
