const numerosParesImpares = function(valorInicial, valorFinal, escolha) {

    let valorMaximo = valorFinal
    let valor = escolha
    let status = true
    let valorMinimo = valorInicial

    if (valor == 1) {
        console.log('*Pares*\n')
        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 == 0)
                console.log(`-----  ${i}  -----`)
        }

    } else if (valor == 2) {
        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 != 0) {
                console.log(`-----  ${i}  -----`)
            }
        }

    } else {
        console.log('--*Pares*--\n')
        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 == 0)
                console.log(`-----  ${i}  -----`)
        }
        console.log('\n--*Ímpares*--\n')

        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 != 0) {
                console.log(`-----  ${i}  -----`)

            }
        }
    }
}

module.exports = { numerosParesImpares }