
### Projeto: Manipulação de Arrays de Objetos com Programação Funcional do ES6

Este projeto aborda a manipulação de arrays de objetos com foco no uso de recursos de **programação funcional do ES6**, como `filter`, `map` e `template literals`, aplicados em um exercício prático do **Módulo 25**. O objetivo é processar uma lista de alunos, classificá-los em aprovados, reprovados e em repescagem, e exibir mensagens personalizadas com base nas notas.

---

### Estrutura do Projeto

O arquivo contém as seguintes funcionalidades principais:

1. **Array de objetos**: 
   Um array chamado `notasDosAlunos` armazena objetos com as propriedades:
   - `nome` (string): Nome do aluno.
   - `nota` (number): Nota do aluno.

2. **Filtragem de Alunos**:
   - `filter`: Identifica alunos aprovados, reprovados ou em repescagem com base em suas notas:
     - **Aprovados**: Nota maior ou igual a 6.
     - **Reprovados**: Nota menor que 4.
     - **Repescagem**: Nota entre 4 (inclusive) e 6 (exclusivo).

3. **Formatação de Mensagens**:
   - `map`: Cria frases personalizadas para cada grupo de alunos, incluindo o que precisam para aprovação na repescagem.

4. **Cálculo da Nota Faltante**:
   - Para alunos na repescagem, calcula a nota necessária para atingir a aprovação (6).

5. **Exibição no Console**:
   - Mensagens de saída detalham os resultados para cada grupo de alunos.

---

### Exemplo de Saída Esperada

```plaintext
["Gian foi aprovado com nota 9", "Helena foi aprovada com nota 10"]
["Pedro foi reprovado com nota 4", "Joana foi reprovada com nota 3"]
["Lucas vai para repescagem com nota 5", "Priscila vai para repescagem com nota 6"]
Lucas precisa tirar 1 na repescagem
Priscila precisa tirar 0 na repescagem
```

---

### Recursos do ES6 Utilizados

1. **`filter`**:
   - Método utilizado para criar novos arrays com base em condições.
   - Exemplo: `notasDosAlunos.filter(aluno => aluno.nota >= 6)`.

2. **`map`**:
   - Cria novos arrays ao transformar os elementos originais.
   - Exemplo: `alunosAprovados.map(aluno => \`\${aluno.nome} foi aprovado com nota \${aluno.nota}\`)`.

3. **Template Literals**:
   - Permite criar strings interpoladas de forma clara e dinâmica.
   - Exemplo: \`\` \`\${aluno.nome} foi aprovado com nota \${aluno.nota}\` \`\`.

4. **Arrow Functions**:
   - Sintaxe concisa para funções anônimas.
   - Exemplo: `(aluno => aluno.nota >= 6)`.

---

### Ferramentas Utilizadas

1. **Node.js**: 
   - Para executar o script diretamente no ambiente local.

2. **Babel**: 
   - Transpila o código ES6 para garantir compatibilidade com versões anteriores de JavaScript.

---

### Como Rodar o Projeto

1. **Pré-requisitos**:
   - Instale o Node.js.
   - Opcional: Instale o Babel para transpilar o código.

2. **Execução**:
   - Salve o código em um arquivo `.js`.
   - Rode o comando: 
     ```bash
     node nome-do-arquivo.js
     ```

3. **Transpilar com Babel (opcional)**:
   - Adicione o Babel ao projeto:
     ```bash
     npm install --save-dev @babel/core @babel/cli @babel/preset-env
     ```
   - Crie um arquivo de configuração `.babelrc`:
     ```json
     {
       "presets": ["@babel/preset-env"]
     }
     ```
   - Transpile o código:
     ```bash
     npx babel nome-do-arquivo.js -o output.js
     ```
   - Execute o código transpilado:
     ```bash
     node output.js
     ```

---

### Conceitos Aprendidos

- Manipulação de arrays com métodos do ES6.
- Uso de programação funcional (`filter` e `map`).
- Construção de strings dinâmicas com `template literals`.
- Aplicação prática de arrow functions.

---

Caso precise de mais explicações ou exemplos, fique à vontade para pedir! 😊
