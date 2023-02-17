/*******************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
 * Data: 17/02/23
 * Autor: Murillo
 * Versão: 1.0
 ******************************************************************/

var calculos = require('./modulo/calculadora')
var readline = require('readline')
const { Console } = require('console')
console.log('\n')
console.log('\n')


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Cadastro abaixo: [PREENCHA CORRETAMENTE!]')
console.log('\n')
entradaDados.question('Digite o nome do aluno(a): \n', function(nomeDoAluno) {

    let aluno = nomeDoAluno

    entradaDados.question('Digite o sexo do aluno(a): [MASCULINO | FEMININO]: \n', function(alunoSexo) {

        let sexoDoAluno = alunoSexo.toUpperCase()



        entradaDados.question('Digite o nome do professor(a): \n', function(nomeDoProfessor) {

            let professor = nomeDoProfessor

            entradaDados.question('Digite o sexo do professor(a): [MASCULINO | FEMININO]: \n', function(professorSexo) {

                let sexoProfessor = professorSexo.toUpperCase()


                entradaDados.question('Digite o nome do curso: \n', function(valorDoCurso) {

                    let curso = valorDoCurso

                    entradaDados.question('Digite a disciplina: \n', function(valorDaDisciplina) {

                        let disciplina = valorDaDisciplina
                        console.log('\n')



                        console.log('[DIGITE ABAIXO À MÉDIA DE CADA ALUNO]: [PREENCHA CORRETAMENTE!]')
                        console.log('\n')

                        entradaDados.question('DIGITE A PRIMEIRA NOTA: \n', function(valor1) {

                            let nota1 = valor1.replace(',', '.')
                            console.log('\n')

                            entradaDados.question('DIGITE A SEGUNDA NOTA: \n', function(valor2) {

                                let nota2 = valor2.replace(',', '.')
                                console.log('\n')


                                entradaDados.question('DIGITE A TERCEIRA NOTA: \n', function(valor3) {

                                    let nota3 = valor3.replace(',', '.')
                                    console.log('\n')


                                    entradaDados.question('DIGITE A QUARTA NOTA: \n', function(valor4) {

                                        let nota4 = valor4.replace(',', '.')
                                        console.log('\n')

                                        let resultado = calculos.calcularMediaDosAlunosDaUniversidade(nota1, nota2, nota3, nota4)

                                        //     if (bimestre1 == "" || bimestre2 == "" || bimestre3 == "" || bimestre4 == "") {
                                        //         console.log('ERRO: É necessario que você preencha todos os dados.')

                                        //     } else if (isNaN(bimestre1) || isNaN(bimestre2) || isNaN(bimestre3) || isNaN(bimestre4)) {
                                        //         console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')

                                        //     } else if (bimestre1 < 0 || bimestre2 < 0 || bimestre3 < 0 || bimestre4 < 0) {
                                        //         console.log('ERRO: Digite somente notas de 0 a 100')

                                        //     } else if (bimestre1 > 100 || bimestre2 > 100 || bimestre3 > 100 || bimestre4 > 100) {
                                        //         console.log('ERRO: Digite somente notas de 0 a 100')
                                        //     }
                                        // }

                                        if (sexoDoAluno != 'FEMININO' && sexoProfessor != 'FEMININO' &&
                                            sexoDoAluno != 'MASCULINO' && sexoProfessor != 'MASCULINO') {
                                            console.log('ERRO: Por favor, digite apenas MASCULINO ou FEMININO')
                                        } else {
                                            if (nota1 < 0 || nota1 > 100 || isNaN(nota1) ||
                                                nota2 < 0 || nota2 > 100 || isNaN(nota2) ||
                                                nota3 < 0 || nota3 > 100 || isNaN(nota3) ||
                                                nota4 < 0 || nota4 > 100 || isNaN(nota4)) {
                                                console.log('ERRO: Digite á nota somente entre 0 e 100!')
                                                entradaDados.close()
                                            } else {
                                                if (aluno == '' || professor == '' || sexoDoAluno == '' || sexoProfessor == '' ||
                                                    curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' ||
                                                    nota4 == '') {
                                                    console.log('ERRO: Você deixou as entradas vazias. [CORRIJA IMEDIATAMENTE]!')
                                                    entradaDados.close()
                                                } else {
                                                    if (resultado < 50) {
                                                        console.log('____________RELATÓRIO DO ALUNO____________')
                                                        console.log('\n')
                                                        if (sexoDoAluno == 'FEMININO')
                                                            console.log(`A ALUNA ${aluno} FOI [{REPROVADA}] NA DISCIPLINA ${disciplina}.`)
                                                        else
                                                            console.log(`O ALUNO ${aluno} FOI [{REPROVADO}] NA DISCIPLINA ${disciplina}.\n`)
                                                        console.log(`CURSO: ${ curso }`)
                                                        if (sexoProfessor == 'FEMININO') {
                                                            console.log(`PROFESSORA: ${ professor }\n`)
                                                        } else
                                                            console.log(`PROFESSOR: ${ professor }`)
                                                        console.log(`NOTAS DA ALUNA: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }`)
                                                        console.log(`MÉDIA FINAL: ${resultado}`)
                                                        entradaDados.close()

                                                    } else if (resultado >= 70) {
                                                        console.log('____________RELATÓRIO DO ALUNO____________')
                                                        console.log('\n')
                                                        if (sexoDoAluno == 'FEMININO')
                                                            console.log(`A ALUNA ${aluno} FOI [{APROVADA}] NA DISCIPLINA ${disciplina}.`)
                                                        else
                                                            console.log(`O ALUNO ${aluno} FOI [{APROVADO}] na disciplina ${disciplina}.\n`)
                                                        console.log(`CURSO: ${ curso }`)
                                                        if (sexoProfessor == 'FEMININO')
                                                            console.log(`PROFESSORA: ${ professor }\n`)
                                                        else
                                                            console.log(`PROFESSOR: ${ professor }`)
                                                        console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }`)
                                                        console.log(`MÉDIA DO ALUNO: ${resultado}`)
                                                        entradaDados.close()

                                                    } else {
                                                        entradaDados.question('Digite a nota do exame:\n', function(valorExame) {

                                                            let notaDoExame = valorExame
                                                            let resultadoExame = calculos.calcularMediaDoExame(resultado, notaDoExame)

                                                            if (resultadoExame == '' || resultadoExame < 0 || resultadoExame > 100 || isNaN(notaDoExame)) {
                                                                console.log('ERRO: Digite um NÚMERO entre 0 e 100!')
                                                                entradaDados.close()
                                                            } else {
                                                                if (resultadoExame < 50) {
                                                                    console.log('____________RELATÓRIO DO ALUNO____________')
                                                                    console.log('\n')
                                                                    if (sexoDoAluno == 'FEMININO')
                                                                        console.log(`A ALUNA ${aluno} FOI [{REPROVADO}] PELO EXAME NA DISCIPLINA ${disciplina}.`)
                                                                    else
                                                                        console.log(`O ALUNO ${aluno} FOI [{REPROVADO}] PELO EXAME NA DISCIPLINA ${disciplina}.\n`)
                                                                    console.log(`CURSO: ${ curso }`)
                                                                    if (sexoProfessor == 'FEMININO')
                                                                        console.log(`PROFESSORA: ${ professor }\n`)
                                                                    else
                                                                        console.log(`PROFESSOR: ${ professor }\n`)
                                                                    console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }, Exame: ${notaDoExame}\n`)
                                                                    console.log(`MÉDIA FINAL: ${resultado}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${resultadoExame}`)
                                                                    entradaDados.close()


                                                                } else {

                                                                    console.log('____________RELATÓRIO DO ALUNO____________')
                                                                    console.log('\n')
                                                                    if (sexoDoAluno == 'FEMININO')
                                                                        console.log(`A ALUNA ${aluno} FOI [{APROVADA}] PELO EXAME NA DISCIPLINA ${disciplina}.`)
                                                                    else
                                                                        console.log(`O ALUNO ${aluno} FOI [{APROVADO}] PELO EXAME NA DISCIPLINA ${disciplina}.\n`)
                                                                    console.log(`CURSO: ${ curso }\n`)
                                                                    if (sexoProfessor == 'FEMININO')
                                                                        console.log(`PROFESSORA: ${ professor }\n`)
                                                                    else
                                                                        console.log(`PROFESSOR: ${ professor }\n`)
                                                                    console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }, Exame: ${notaDoExame}`)
                                                                    console.log(`MÉDIA FINAL: ${resultado}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${resultadoExame}`)
                                                                    console.log('\n')
                                                                    entradaDados.close()

                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})