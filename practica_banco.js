// Integrantes del equipo:
/*
 Fabio gadea
César Castro
esteban Davyt
David Sánchez
Agustin Hernandez
Alison Paico
Edwin Gomez
*/


//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];


let banco = {
  clientes: arrayCuentas,
  consultarCliente: function(titular){
      for (let i = 0; i < arrayCuentas.length; i++) {
          if (arrayCuentas[i].titularCuenta == titular){
              return arrayCuentas[i]
          }
      }
  },
  deposito: function(titular, montoDeposito){
      for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].titularCuenta == titular){
          arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + montoDeposito
          return arrayCuentas[i]
      }
      }
  },
  extraccion: function(titular, montoRetiro){
    for (let i = 0; i < arrayCuentas.length; i++) {
      if (arrayCuentas[i].titularCuenta == titular){
      
        if (arrayCuentas[i].saldoEnPesos >= montoRetiro){
        arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos - montoRetiro;
        console.log("Extracción realizada correctamente, su nuevo saldo es: "+ arrayCuentas[i].saldoEnPesos)
        return arrayCuentas[i]}
        else  { 
          console.log("Fondos insuficientes, su saldo es: "+ arrayCuentas[i].saldoEnPesos);
          return arrayCuentas[i]
        }
      }
    }
  }
}

console.log(banco.extraccion("Jacki Shurmer", 100))

