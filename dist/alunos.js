"use strict";

// Este arquivo contém um array de objetos com nome e nota de alunos.

// Trabalho relacionado a manipulação de arrays de objetos utilizando recursos de programação funcional do ES6.

var notasDosAlunos = [
// Array de objetos
{
  nome: 'Gian',
  nota: 9
}, {
  nome: 'Cielio',
  nota: 7
}, {
  nome: 'Lucas',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 4
}, {
  nome: 'Joana',
  nota: 3
}, {
  nome: 'Helena',
  nota: 10
}, {
  nome: 'Priscila',
  nota: 6
}];

// Filtrar alunos com nota maior ou igual a 7
var alunosAprovados = notasDosAlunos.filter(function (aluno) {
  return aluno.nota >= 6;
});

// Alunos que reprovaram
var alunosReprovados = notasDosAlunos.filter(function (aluno) {
  return aluno.nota < 6;
});

// Filtrar alunos que vão para repescagem
var alunosRepescagem = notasDosAlunos.filter(function (aluno) {
  return aluno.nota >= 4 && aluno.nota < 6;
});

// Exibir alunos que foram aprovados em uma variavel com frase formatada
var aprovados = alunosAprovados.map(function (aluno) {
  return "".concat(aluno.nome, " foi aprovado com nota ").concat(aluno.nota);
});

// Exibir alunos que foram reprovados em uma variavel com frase formatada
var reprovados = alunosReprovados.map(function (aluno) {
  return "".concat(aluno.nome, " foi reprovado com nota ").concat(aluno.nota);
});

// Exibir alunos que vão para repescagem em uma variavel com frase formatada
var repescagem = alunosRepescagem.map(function (aluno) {
  return "".concat(aluno.nome, " vai para repescagem com nota ").concat(aluno.nota);
});

// printar alunos aprovados
console.log(aprovados);

// printar alunos reprovados
console.log(reprovados);

// função para printar alunos que vão para repescagem e quanto precisa tirar para ser aprovado.
console.log(repescagem);

// Exibir quanto o aluno precisa tirar na repescagem para ser aprovado
alunosRepescagem.map(function (aluno) {
  var notaQueFalta = 6 - aluno.nota;
  console.log("".concat(aluno.nome, " precisa tirar ").concat(notaQueFalta, " na repescagem"));
});

// Exemplo de saida esperada

// Gian foi aprovado com nota 9

// Pedro foi reprovado com nota 4

// Lucas vai para repescagem com nota 5

// Joana precisa tirar 1 na repescagem