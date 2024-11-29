let electroProducts = ["heladera", "lavarropas", "horno", "tostador", "refrigerador", "licuadora"];

//ACCEDER DE MANERA ARBITRARIA
// console.log(electroProducts[0]);
// console.log(electroProducts[1]);
// console.log(electroProducts[2]);
// console.log(electroProducts[3]);
// console.log(electroProducts[4]);
// console.log(electroProducts[5]);

//EXTRAER Y AGREGAR EL PRIMER ARRAY
let heladera = electroProducts.shift();
electroProducts.push("heladera");
// console.log(electroProducts);

//AGREGAR DOS PRODUCTOS 
electroProducts.push("cafetera", "microondas");
// console.log(electroProducts);

//CANTIDAD DE ELEMENTOS EN EL ARRAY
// console.log(electroProducts.length);

//PREGUNTAR SI UN PRODUCTO EXISTE
function isExist(producto) {
    if(!electroProducts.includes(producto)) return "El producto buscado no existe";
    return "Producto encontrado"
}
// console.log(isExist("cafeteria"));

//UNIFICAR ELEMENTOS EN STRING
const arrayToString = electroProducts.join(" ");
// console.log(arrayToString);

//CANTIDAD DE ELEMENTOS 
arrayToString.length;
// console.log(arrayToString.length);

//CAMBIAR EL NOMBRE DE UN PRODUCTO
electroProducts.splice(0, 1, "secarropas")
// console.log(electroProducts);

//NUEVO ARRAY
let newRayProducts = ['secarropas', 'horno', 'tostador', 'refrigerador', 'licuadora', 'heladera', 'cafetera', 'microondas'];
// console.log(newRayProducts);

