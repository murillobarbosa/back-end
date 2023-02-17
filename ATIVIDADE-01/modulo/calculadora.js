const { isString } = require("util")

const calcularMediaDoExame = function(media, valorExame) {

    let mediaExame = media
    let notaExame = valorExame
    let resultadoFinal = (Number(mediaExame) + Number(notaExame)) / 2

    return resultadoFinal




}
const calcularMediaDosAlunosDaUniversidade = function(valor1, valor2, valor3, valor4) {

    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media
}


// const erroDeEscrita = function(alu, sexoA, pro, sexoP, cur, disci) {
//     let aluno = alu
//     let sexoAluno = sexoA.toUpperCase()
//     let professor = pro
//     let sexoProfessor = sexoP.toUpperCase()
//     let curso = cur
//     let disciplina = disci

//     if (aluno == "" || sexoAluno == "" || professor == " " || sexoProfessor == "" || curso == "" || disciplina == "") {
//         console.log('ERRO: É necessario que você preencha todos os dados.')
//     } else if (!isString(aluno) || !isString(sexoAluno) || !isString(professor) || !isString(sexoProfessor) || !isString(curso) || !isString(disciplina)) {
//         console.log('ERRO: Você preencheu valores numericos no lugar errado.')
//     } else if (sexoAluno != 'MASCULINO' && sexoAluno != 'FEMININO') {
//         console.log('ERRO: Por favor, digite apenas MASCULINO OU FEMININO')
//     } else if (sexoProfessor != 'MASCULINO' && sexoProfessor != 'FEMININO') {
//         console.log('ERRO: Por favor, digite apenas MASCULINO OU FEMININO')
//     }

// }


module.exports = { calcularMediaDosAlunosDaUniversidade, calcularMediaDoExame, }