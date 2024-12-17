"use strict";

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

// Exibir alunos que foram aprovados em uma variavel com frase formatada
var aprovados = alunosAprovados.map(function (aluno) {
  return "".concat(aluno.nome, " foi aprovado com nota ").concat(aluno.nota);
});

// Exibir alunos que foram reprovados em uma variavel com frase formatada
var reprovados = alunosReprovados.map(function (aluno) {
  return "".concat(aluno.nome, " foi reprovado com nota ").concat(aluno.nota);
});

// printar alunos aprovados
console.log(aprovados);

// printar alunos reprovados
console.log(reprovados);

// Exemplo de saida
// [ 'Gian foi aprovado com nota 9', 'Cielio foi aprovado com nota 7', 'Helena foi aprovado com nota 10', 'Priscila foi aprovado com nota 6' ]