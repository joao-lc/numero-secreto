# 🔢 Jogo do Número Secreto (com Acessibilidade)

Um jogo interativo de adivinhação desenvolvido em JavaScript, onde o usuário deve descobrir o número secreto gerado aleatoriamente pelo sistema. O projeto conta com recursos de síntese de voz para tornar a experiência mais acessível e dinâmica.

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6)**: Lógica do jogo, manipulação de arrays e controle de fluxo.
* **HTML5 & CSS3**: Estrutura e estilização da interface responsiva.
* **ResponsiveVoice JS**: Biblioteca de terceiros utilizada para conversão de texto em fala (TTS), permitindo que o jogo "fale" com o usuário.

## 🛠️ Funcionalidades Técnicas

* **Lógica de Não-Repetição**: O sistema utiliza um `array` para armazenar os números já sorteados, garantindo que o número secreto não se repita até que todas as possibilidades (1 a 10) sejam esgotadas.
* **Manipulação do DOM**: Alteração dinâmica de textos e controle de estados de botões (habilitar/desabilitar) conforme o progresso do jogo.
* **Recursividade**: Uso de funções recursivas para a geração de novos números aleatórios válidos.
* **Acessibilidade**: Integração com a API `responsiveVoice` para narrar as instruções e feedbacks do jogo em português brasileiro.

## 🎮 Como Jogar

1. Digite um número entre **1 e 10** no campo de entrada.
2. Clique no botão **"Chutar"**.
3. O jogo informará se o número secreto é maior ou menor que o seu palpite.
4. Ao acertar, o sistema informará o número de tentativas e liberará o botão para iniciar um **"Novo Jogo"**.

## 📦 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
