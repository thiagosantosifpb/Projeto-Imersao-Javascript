let dados = [
    {
        titulo: "Hugo Souza",
        descricao: "Hugo Souza é um goleiro brasileiro que se destaca por sua agilidade e segurança no gol, sendo uma das promessas do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Hugo_Souza",
        tags: "goleiro Brasil"
    },
    {
        titulo: "Gustavo Henrique",
        descricao: "Gustavo Henrique é um zagueiro brasileiro que combina força física com boa visão de jogo, se destacando na defesa do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Gustavo_Henrique",
        tags: "zagueiro Brasil"
    },
    {
        titulo: "Matheus Donelli",
        descricao: "Matheus Donelli é um goleiro brasileiro que defende as cores do Corinthians, sendo reconhecido por suas defesas decisivas.",
        link: "https://pt.wikipedia.org/wiki/Matheus_Donelli",
        tags: "goleiro Brasil"
    },
    {
        titulo: "Matheuzinho",
        descricao: "Matheuzinho é um lateral-direito brasileiro com grande potencial ofensivo e defensivo, peça-chave no esquema do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Matheuzinho",
        tags: "lateral-direito Brasil"
    },
    {
        titulo: "Raniele",
        descricao: "Raniele é um versátil volante brasileiro que atua tanto na defesa quanto no meio-campo do Corinthians, com excelente controle de bola.",
        link: "https://pt.wikipedia.org/wiki/Raniele",
        tags: "volante Brasil"
    },
    {
        titulo: "Ruan Oliveira",
        descricao: "Ruan Oliveira é um meia brasileiro, destaque do Corinthians, com uma capacidade criativa para ditar o ritmo de jogo.",
        link: "https://pt.wikipedia.org/wiki/Ruan_Oliveira",
        tags: "meia Brasil"
    },
    {
        titulo: "Félix Torres",
        descricao: "Félix Torres é um zagueiro equatoriano com grande presença física e capacidade de interceptação, peça fundamental na defesa do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Félix_Torres",
        tags: "zagueiro Equador"
    },
    {
        titulo: "Pedro Henrique",
        descricao: "Pedro Henrique é um atacante brasileiro que se destaca pela sua velocidade e precisão nas finalizações no ataque do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Pedro_Henrique",
        tags: "atacante Brasil"
    },
    {
        titulo: "Caetano",
        descricao: "Caetano é um zagueiro brasileiro, titular na defesa do Corinthians, reconhecido por sua solidez defensiva.",
        link: "https://pt.wikipedia.org/wiki/Caetano",
        tags: "zagueiro Brasil"
    },
    {
        titulo: "Giovane",
        descricao: "Giovane é um atacante brasileiro conhecido pela sua habilidade em dribles e finalizações, representando uma ameaça constante aos adversários.",
        link: "https://pt.wikipedia.org/wiki/Giovane",
        tags: "atacante Brasil"
    },
    {
        titulo: "Felipe Longo",
        descricao: "Felipe Longo é um jovem goleiro brasileiro que defende o Corinthians, sempre pronto para mostrar suas habilidades em campo.",
        link: "https://pt.wikipedia.org/wiki/Felipe_Longo",
        tags: "goleiro Brasil"
    },
    {
        titulo: "Pedro Raul",
        descricao: "Pedro Raul é um atacante brasileiro que usa sua força física e habilidades técnicas para criar oportunidades no ataque do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Pedro_Raul",
        tags: "atacante Brasil"
    },
    {
        titulo: "Talles Magno",
        descricao: "Talles Magno é um atacante brasileiro talentoso que impressiona com sua criatividade, velocidade e dribles no Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Talles_Magno",
        tags: "atacante Brasil"
    },
    {
        titulo: "Diego Palacios",
        descricao: "Diego Palacios é um lateral-esquerdo equatoriano que se destaca por sua velocidade e capacidade defensiva no Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Diego_Palacios",
        tags: "lateral-esquerdo Equador"
    },
    {
        titulo: "Matheus Bidu",
        descricao: "Matheus Bidu é um lateral-esquerdo brasileiro com grande potencial, se destacando pelas suas subidas ao ataque no Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Matheus_Bidu",
        tags: "lateral-esquerdo Brasil"
    },
    {
        titulo: "Maycon",
        descricao: "Maycon é um volante brasileiro que organiza o meio-campo do Corinthians, sendo essencial na recuperação de bolas e na transição ofensiva.",
        link: "https://pt.wikipedia.org/wiki/Maycon",
        tags: "volante Brasil"
    },
    {
        titulo: "Charles",
        descricao: "Charles é um volante brasileiro que atua no meio-campo do Corinthians, se destacando pela sua capacidade defensiva e distribuição de passes.",
        link: "https://pt.wikipedia.org/wiki/Charles",
        tags: "volante Brasil"
    },
    {
        titulo: "Yuri Alberto",
        descricao: "Yuri Alberto é um atacante brasileiro que brilha no ataque do Corinthians, sendo uma das principais opções de gol do time.",
        link: "https://pt.wikipedia.org/wiki/Yuri_Alberto",
        tags: "atacante Brasil"
    },
    {
        titulo: "Rodrigo Garro",
        descricao: "Rodrigo Garro é um meia argentino com grande visão de jogo e habilidade técnica, peça-chave no meio-campo do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Rodrigo_Garro",
        tags: "meia Argentina"
    },
    {
        titulo: "Ángel Romero",
        descricao: "Ángel Romero é um atacante paraguaio com grande experiência, conhecido por sua habilidade em balançar as redes adversárias pelo Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Ángel_Romero",
        tags: "atacante Paraguai"
    },
    {
        titulo: "Héctor Hernández",
        descricao: "Héctor Hernández é um atacante espanhol com grande técnica e inteligência tática, oferecendo perigo constante ao ataque do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Héctor_Hernández",
        tags: "atacante Espanha"
    },
    {
        titulo: "Fagner",
        descricao: "Fagner é um lateral-direito brasileiro experiente, capitão do Corinthians, com grande habilidade defensiva e ofensiva.",
        link: "https://pt.wikipedia.org/wiki/Fagner",
        tags: "lateral-direito Brasil"
    },
    {
        titulo: "Cacá",
        descricao: "Cacá é um zagueiro brasileiro com excelente posicionamento defensivo, contribuindo para a solidez da defesa do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Cacá",
        tags: "zagueiro Brasil"
    },
    {
        titulo: "Breno Bidon",
        descricao: "Breno Bidon é um volante brasileiro que contribui para a estabilidade do meio-campo do Corinthians, sendo eficiente na marcação.",
        link: "https://pt.wikipedia.org/wiki/Breno_Bidon",
        tags: "volante Brasil"
    },
    {
        titulo: "Matheus Araújo",
        descricao: "Matheus Araújo é um meia brasileiro, peça promissora do Corinthians, conhecido por sua habilidade de passe e controle de bola.",
        link: "https://pt.wikipedia.org/wiki/Matheus_Araújo",
        tags: "meia Brasil"
    }
];
