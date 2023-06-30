function checkString(cadena) {
    let reg = /[\W_1-9]/g;
    if (reg.test(cadena)) {
        return true;
    }
    else return false;
}
var arr = [];
let nombre = prompt("Ingrese un nomre valido o presione 0 para finalizar: \n");
let bool = checkString(nombre);
while (nombre !== "0") {
    if ((bool === false) && (nombre !== null) && (nombre !== ''))
        arr.push(nombre)
    else console.log("se ingreso un nombre invalido:" + nombre + "\n");
    nombre = prompt("Ingrese un nombre valido o presione 0 para finalizar: \n");
    bool = checkString(nombre);
}

if (arr.length !== 0) {
    (function () {
        for (let i = 0; i < arr.length; i++) {
            console.log("Hi: " + arr[i]);
        }
    })(arr);
}
else console.log("el array esta vacio.");
