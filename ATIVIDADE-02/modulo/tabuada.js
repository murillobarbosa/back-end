/*******************************************************************
 * Objetivo: Sistema Cálculo de uma tabuada
 * Data: 13/02/23
 * Autor: Murillo
 * Versão: 1.0
 ******************************************************************/

const tabuada = function(multiplicandoInicio, multiplicandoFim, contadorInicio, contadorFim) {

    let resultado
    let ValorDoMultiplicando = multiplicandoInicio
    let multiplicandoFinal = multiplicandoFim
    let contadorInicial
    let contadorFinal = contadorFim


    while (ValorDoMultiplicando <= multiplicandoFinal) {
        console.log(`\n*********** Tabuada do ${ValorDoMultiplicando} *********** \n`)

        contadorInicial = contadorInicio
        while (contadorInicial <= contadorFinal) {
            resultado = ValorDoMultiplicando * contadorInicial

            console.log(`${ValorDoMultiplicando} x ${contadorInicial} = ${resultado}`)
            contadorInicial++
        }
        ValorDoMultiplicando++

    }


}


module.exports = { tabuada }