const notasDosAlunos = [ // Array de objetos
    { nome: 'Gian', nota: 9 },
    { nome: 'Cielio', nota: 7 },
    { nome: 'Lucas', nota: 5 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Joana', nota: 3 },
    { nome: 'Helena', nota: 10 },
    { nome: 'Priscila', nota: 6 },
];

// Filtrar alunos com nota maior ou igual a 7
const alunosAprovados = notasDosAlunos.filter(aluno => aluno.nota >= 6);

// Alunos que reprovaram
const alunosReprovados = notasDosAlunos.filter(aluno => aluno.nota < 6);

// Exibir alunos que foram aprovados em uma variavel com frase formatada
const aprovados = alunosAprovados.map(aluno => `${aluno.nome} foi aprovado com nota ${aluno.nota}`);

// Exibir alunos que foram reprovados em uma variavel com frase formatada
const reprovados = alunosReprovados.map(aluno => `${aluno.nome} foi reprovado com nota ${aluno.nota}`);

// printar alunos aprovados
console.log(aprovados);

// printar alunos reprovados
console.log(reprovados);

// Exemplo de saida
// [ 'Gian foi aprovado com nota 9', 'Cielio foi aprovado com nota 7', 'Helena foi aprovado com nota 10', 'Priscila foi aprovado com nota 6' ]