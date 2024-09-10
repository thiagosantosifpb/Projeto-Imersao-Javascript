# Jogadores do Sport Club Corinthians Paulista

Este projeto é uma página web que exibe informações sobre os jogadores do Sport Club Corinthians Paulista. A página permite pesquisar jogadores por nome, e exibe os resultados com descrições, links e imagens relacionadas.

## Funcionalidades

- Exibição de uma lista de jogadores do Corinthians.
- Campo de busca para pesquisar jogadores por nome, descrição ou tags.
- Alerta quando o usuário tenta realizar uma busca sem digitar algo.
- Exibição de mensagens informando que nenhum jogador foi encontrado, caso a pesquisa não retorne resultados.
- Imagem do logo do Corinthians centralizada na página.
- Responsividade da imagem, ajustando-se à largura da tela.

## Tecnologias Utilizadas

### 1. **HTML**
   - Estruturação do conteúdo da página.
   - Utilização de tags semânticas como `<header>`, `<main>`, `<footer>`.
   - Inclusão de campos de texto e botões de busca.

### 2. **CSS**
   - Centralização da imagem utilizando Flexbox.
   - Responsividade da imagem com `max-width: 100%` e `height: auto`.
   - Estilização básica para o cabeçalho e rodapé.
   - Uso de classes como `.img-container` para centralizar a imagem e `.resultados-pesquisa` para exibir os resultados da pesquisa.

### 3. **JavaScript**
   - Implementação da função de pesquisa para encontrar jogadores na lista baseada em nome, descrição ou tags.
   - Exibição de uma mensagem personalizada quando o usuário clica no botão de busca sem digitar nada no campo de pesquisa.
   - Conversão das entradas do usuário e dos dados dos jogadores para letras minúsculas, tornando a pesquisa case-insensitive.

## Como Utilizar

1. Clone este repositório.
2. Certifique-se de que todos os arquivos estão no mesmo diretório, conforme mostrado na estrutura acima.
3. Abra o arquivo `index.html` no seu navegador.
4. Utilize o campo de pesquisa para encontrar um jogador. Se o nome digitado não for encontrado, uma mensagem aparecerá informando que nenhum jogador foi encontrado.




