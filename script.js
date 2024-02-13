const perguntas = [
    {
        pergunta: "Pergunta 01: Qual é o tipo de dado de `null` em JavaScript?",
        respostas: [
            "Número",
            "Objeto",
            "Nulo",
        ],
        correta: 1
    },
    {
        pergunta: "Pergunta 02: Como você declara uma variável em JavaScript?",
        respostas: [
            "var nomeDaVariavel",
            "nomeDaVariavel = var",
            "nomeDaVariavel.var",
        ],
        correta: 0
    },
    {
        pergunta: "Pergunta 03: Qual é a sintaxe correta para um loop `for` em JavaScript?",
        respostas: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (let i = 0; i < 5; i++)",
        ],
        correta: 2
    },
    {
        pergunta: "Pergunta 04: Como você cria uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "minhaFuncao.function() {}",
            "function = minhaFuncao() {}",
        ],
        correta: 0
    },
    {
        pergunta: "Pergunta 05: Como você adiciona um item ao final de um array em JavaScript?",
        respostas: [
            "meuArray.add('novoItem')",
            "meuArray.push('novoItem')",
            "meuArray.append('novoItem')",
        ],
        correta: 1
    },
    {
        pergunta: "Pergunta 06: Como você pode converter uma string em um número em JavaScript?",
        respostas: [
            "Number(minhaString)",
            "minhaString.toNumber()",
            "minhaString.number()",
        ],
        correta: 0
    },
    {
        pergunta: "Pergunta 07: Qual é o resultado de `'10' + 2` em JavaScript?",
        respostas: [
            "12",
            "'102'",
            "Erro",
        ],
        correta: 1
    },
    {
        pergunta: "Pergunta 08: Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "= =",
        ],
        correta: 1
    },
    {
        pergunta: "Pergunta 09: Como você acessa o primeiro elemento de um array em JavaScript?",
        respostas: [
            "meuArray[0]",
            "meuArray[1]",
            "meuArray.first",
        ],
        correta: 0
    },
    {
        pergunta: "Pergunta 10: Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "# Este é um comentário",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// loop ou laço de repetição

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()  
        
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}









