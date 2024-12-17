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

// Filtrar alunos que vão para repescagem
const alunosRepescagem = notasDosAlunos.filter(aluno => aluno.nota >= 4 && aluno.nota < 6);

// Exibir alunos que foram aprovados em uma variavel com frase formatada
const aprovados = alunosAprovados.map(aluno => `${aluno.nome} foi aprovado com nota ${aluno.nota}`);

// Exibir alunos que foram reprovados em uma variavel com frase formatada
const reprovados = alunosReprovados.map(aluno => `${aluno.nome} foi reprovado com nota ${aluno.nota}`);

// Exibir alunos que vão para repescagem em uma variavel com frase formatada
const repescagem = alunosRepescagem.map(aluno => `${aluno.nome} vai para repescagem com nota ${aluno.nota}`);

// Exibir quanto o aluno precisa tirar na repescagem para ser aprovado


// printar alunos aprovados
console.log(aprovados);

// printar alunos reprovados
console.log(reprovados);

// função para printar alunos que vão para repescagem e quanto precisa tirar para ser aprovado.
console.log(repescagem);

alunosRepescagem.map(aluno => {
    const notaQueFalta = 6 - aluno.nota;
    console.log(`${aluno.nome} precisa tirar ${notaQueFalta} na repescagem`);
});

// Exemplo de saida esperada

// Gian foi aprovado com nota 9

// Pedro foi reprovado com nota 4

// Lucas vai para repescagem com nota 5

// Joana precisa tirar 1 na repescagem