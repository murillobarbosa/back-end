/*******************************************************************
 * Objetivo: Sistema que separe números ímpares dos pares
 * Data: 17/02/23
 * Autor: Murillo
 * Versão: 1.0
 ******************************************************************/

var readline = require('readline')
var separar = require('./modulo/fuction_par&impar')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero inicial [ENTRE 0 E 500]:\n', function(valorInicio) {

    let valorMinimo = parseInt(valorInicio)

    if (valorMinimo < 0 || valorMinimo > 500 || isNaN(valorMinimo) || valorMinimo === '') {
        console.log('ERRO: Digite somente NÚMEROS entre 0 e 500')
        entradaDados.close()

    } else {
        entradaDados.question('Digite o valor final [ENTRE 100 E 1000]:\n', function(valorFim) {

            let valorMaximo = parseInt(valorFim)

            if (valorMaximo < 100 || valorMaximo > 1000 || valorMaximo == '' || isNaN(valorMaximo)) {
                console.log('ERRO: Digite somente NÚMEROS entre 100 e 1000!')
                entradaDados.close()

            } else if (valorMinimo == valorMaximo) {
                console.log('ERRO: O número inicial não pode ser igual ao final')
                entradaDados.close()

            } else if (valorMinimo > valorMaximo) {
                console.log('ERRO: O número inicial não pode ser maior que o final')
                entradaDados.close()

            } else {
                entradaDados.question('Você deseja calcular como?\n ' + '1 - somente [PARES]\n' + '2 - Somente [ÍMPARES]\n' + '3 - [AMBOS]\n', function(valor) {

                    separar.numerosParesImpares(valorMinimo, valorMaximo, valor)
                    entradaDados.close()

                })
            }

        })
    }


})
