function pesquisar() {
    // Seleciona o elemento da página que contém os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa (o que o usuário digitou)
    let campopesquisa = document.getElementById("campo-pesquisa").value;

    if (!campopesquisa) {
        alert("Por favor, digite o nome de um jogador antes de pesquisar.");
        return;
    }

    // Converte o valor da pesquisa para letras minúsculas para tornar a busca mais adequada
    campopesquisa = campopesquisa.toLowerCase();

    // Inicializa variáveis vazias para armazenar os resultados da pesquisa e os dados temporários
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre a lista de dados (que contém informações dos jogadores)
    for (let dado of dados) {
        // Converte o título, a descrição e as tags do dado atual para letras minúsculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se a pesquisa do usuário está incluída no título, descrição ou tags
        if (titulo.includes(campopesquisa) || descricao.includes(campopesquisa) || tags.includes(campopesquisa)) {
            // Se a pesquisa corresponder, adiciona um novo bloco HTML contendo as informações do jogador
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a> <!-- Link para mais informações -->
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p> <!-- Descrição do jogador -->
                    <a href="${dado.link}" target="_blank">Mais informações</a> <!-- Link adicional -->
                </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem informando que nada foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado, caso o jogador já esteja no nosso time, em breve será cadastrado.</p>";
    }

    // Insere o HTML gerado (resultados da pesquisa) dentro da seção de resultados
    section.innerHTML = resultados;
}
