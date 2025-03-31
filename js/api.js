const historia = {
    "inicio": {
        "texto": "Você e seus amigos decidiram passar o fim de semana em uma antigo chalé nas montanhas. Uma tempestade de neve inesperada isola vocês do resto do mundo. Durante a noite, um grito ecoa pela floresta. Você precisa decidir o que fazer.",
        "opcoes": [
            { "texto": "Sair para investigar", "destino": "floresta" },
            { "texto": "Ficar dentro da cabana e trancar as portas", "destino": "cabana" }
        ]
    },
    "floresta": {
        "texto": "Você caminha pela neve, iluminando o caminho com sua lanterna. Pegadas estranhas aparecem à sua frente, levando até uma velha mina abandonada.",
        "opcoes": [
            { "texto": "Seguir as pegadas para a mina", "destino": "mina" },
            { "texto": "Voltar para a cabana e avisar os outros", "destino": "cabana" }
        ]
    },
    "cabana": {
        "texto": "Você decide trancar todas as portas e janelas. Mas então, as luzes piscam e um som estranho vem do andar de cima.",
        "opcoes": [
            { "texto": "Subir para investigar", "destino": "quarto" },
            { "texto": "Reunir todos e armar-se com o que encontrar", "destino": "sala" }
        ]
    },
    "quarto": {
        "texto": "No quarto, você encontra uma janela aberta e marcas de garras na parede. Algo ou alguém esteve aqui recentemente.",
        "opcoes": [
            { "texto": "Fechar a janela e investigar a casa", "destino": "sala" },
            { "texto": "Sair pela janela e seguir as pegadas", "destino": "floresta" }
        ]
    },
    "sala": {
        "texto": "Vocês se reúnem e tentam entender o que está acontecendo. De repente, batidas fortes na porta assustam a todos.",
        "opcoes": [
            { "texto": "Abrir a porta", "destino": "estranho" },
            { "texto": "Ignorar e procurar outra saída", "destino": "saida" }
        ]
    },
    "estranho": {
        "texto": "Ao abrir a porta, um homem ensanguentado cai no chão, sussurrando: 'Não está sozinho...'.",
        "opcoes": [
            { "texto": "Ajudá-lo e trazê-lo para dentro", "destino": "ajuda" },
            { "texto": "Fechar a porta e se preparar para o pior", "destino": "preparacao" }
        ]
    },
    "ajuda": {
        "texto": "O homem diz que uma criatura antiga habita essas montanhas e caça à noite. Vocês precisam sair antes que seja tarde demais.",
        "opcoes": [
            { "texto": "Acreditar nele e fugir da cabana", "destino": "fuga" },
            { "texto": "Ignorar e continuar na cabana", "destino": "espera" }
        ]
    },
    "preparacao": {
        "texto": "Vocês barricam as portas e preparam armas improvisadas. O silêncio toma conta do ambiente... até que algo começa a arranhar as paredes.",
        "opcoes": [
            { "texto": "Sair e confrontar o que está lá fora", "destino": "confronto" },
            { "texto": "Ficar escondido e esperar", "destino": "espera" }
        ]
    },
    "fuga": {
        "texto": "Vocês correm pela neve em direção à estrada mais próxima. Mas algo os persegue, movendo-se rapidamente entre as árvores.",
        "opcoes": [
            { "texto": "Se esconder na floresta", "destino": "esconderijo" },
            { "texto": "Continuar correndo", "destino": "abismo" }
        ]
    },
    "esconderijo": {
        "texto": "Vocês se escondem atrás de uma rocha. A criatura passa lentamente por vocês, farejando o ar. A respiração de um amigo é alta demais...",
        "opcoes": [
            { "texto": "Mandar ele calar a boca", "destino": "ataque" },
            { "texto": "Correr de volta para a cabana", "destino": "cabana" }
        ]
    },
    "abismo": {
        "texto": "Correndo sem olhar para trás, você não percebe que está na beira de um penhasco. O chão cede.",
        "opcoes": [
            { "texto": "Tentar segurar na borda", "destino": "pendurado" },
            { "texto": "Aceitar seu destino", "destino": "queda" }
        ]
    },
    "ataque": {
        "texto": "A criatura percebe vocês. Em um piscar de olhos, ela salta e... tudo se apaga. Fim!",
        "opcoes": [
            { "texto": "Recomeçar", "destino": "inicio" }
        ]
    },
    "queda": {
        "texto": "Você sente o vento ao cair. O impacto nunca vem. Você acorda em um local estranho e desconhecido. O jogo continua...",
        "opcoes": [
            { "texto": "Explorar o local", "destino": "subterraneo" }
        ]
    },
    "subterraneo": {
        "texto": "Você acorda em uma caverna iluminada por tochas. Há inscrições antigas nas paredes e um caminho adiante.",
        "opcoes": [
            { "texto": "Seguir pelo túnel", "destino": "altar" },
            { "texto": "Tentar escalar de volta", "destino": "parede" }
        ]
    },
    "altar": {
        "texto": "No fim do túnel, um altar macabro está coberto de símbolos. Uma figura encapuzada murmura palavras estranhas.",
        "opcoes": [
            { "texto": "Se esconder e observar", "destino": "ritual" },
            { "texto": "Atacar o encapuzado", "destino": "luta" }
        ]
    },
    "ritual": {
        "texto": "Você assiste enquanto o ritual acontece. Algo começa a emergir do altar... O que você fez? Fim!",
        "opcoes": [
            { "texto": "Recomeçar", "destino": "inicio" }
        ]
    },
    "luta": {
        "texto": "Você ataca o encapuzado, mas ele some em uma nuvem negra. A caverna começa a ruir.",
        "opcoes": [
            { "texto": "Correr para fora", "destino": "fuga" },
            { "texto": "Tentar descobrir mais", "destino": "mistério" }
        ]
    },
    "mistério": {
        "texto": "Ao procurar mais pistas, você encontra um artefato brilhante. Mas algo o observa na escuridão... Fim!",
        "opcoes": [
            { "texto": "Pegar o artefato", "destino": "artefato" },
            { "texto": "Fugir da caverna", "destino": "saida_caverna" }
        ]
    },
    "artefato": {
        "texto": "Ao tocar o artefato, sua visão escurece. Você ouve sussurros e sente uma presença dentro de sua mente.",
        "opcoes": [
            { "texto": "Resistir à influência", "destino": "resistencia" },
            { "texto": "Aceitar o chamado", "destino": "transformacao" }
        ]
    },
    "resistencia": {
        "texto": "Você luta contra a presença em sua mente. A caverna começa a tremer e desmoronar ao seu redor!",
        "opcoes": [
            { "texto": "Correr para a saída", "destino": "saida_caverna" },
            { "texto": "Tentar usar o artefato contra a presença", "destino": "despertar_poder" }
        ]
    },
    "transformacao": {
        "texto": "Você sente seu corpo mudar. Sua mente se expande e segredos ancestrais são revelados. Você não é mais humano...",
        "opcoes": [
            { "texto": "Abraçar seu novo destino", "destino": "ascensao" },
            { "texto": "Tentar recuperar sua humanidade", "destino": "luta_interior" }
        ]
    },
    "saida_caverna": {
        "texto": "Você corre para fora da caverna, mas algo o segue. A noite está mais escura do que antes... e você sente que não escapou de verdade.",
        "opcoes": [
            { "texto": "Voltar para a cabana", "destino": "cabana" },
            { "texto": "Se esconder na floresta", "destino": "esconderijo" }
        ]
    },
    "despertar_poder": {
        "texto": "Você canaliza a energia do artefato e a presença é repelida. Mas agora você sente um poder imenso dentro de si.",
        "opcoes": [
            { "texto": "Usar esse poder para destruir a entidade", "destino": "confronto_final" },
            { "texto": "Tentar selar o artefato para sempre", "destino": "selo" }
        ]
    },
    "ascensao": {
        "texto": "Você se torna parte da entidade, um novo ser imortal e onisciente. A humanidade se torna uma lembrança distante... Fim!",
        "opcoes": [
            { "texto": "Recomeçar", "destino": "inicio" }
        ]
    },
    "luta_interior": {
        "texto": "Você luta contra a entidade dentro de si. Mas será que é possível recuperar sua humanidade? O jogo continua...",
        "opcoes": [
            { "texto": "Explorar seu novo estado", "destino": "exploracao" },
            { "texto": "Buscar uma cura", "destino": "busca_cura" }
        ]
    },
    "confronto_final": {
        "texto": "Você usa seu novo poder para enfrentar a entidade. A batalha final começa!",
        "opcoes": [
            { "texto": "Atacar diretamente", "destino": "vitoria" },
            { "texto": "Criar uma armadilha mágica", "destino": "selo" }
        ]
    },
    "selo": {
        "texto": "Você realiza um ritual para selar a entidade para sempre. O preço? Seu próprio destino permanece incerto... Fim!",
        "opcoes": [
            { "texto": "Recomeçar", "destino": "inicio" }
        ]
    },
    "vitoria": {
        "texto": "Com um último golpe, você destrói a entidade. Mas algo dentro de você mudou para sempre. O horror terminou? Fim!",
        "opcoes": [
            { "texto": "Recomeçar", "destino": "inicio" }
        ]
    }
}

function iniciarJogo() {
    const jogador_id = 1; 
    carregarProgresso(jogador_id);
}

function mostrarCena(cena_id) {
    const cena = historia[cena_id];
    if (!cena) {
        console.error("Cena não encontrada!");
        return;
    }

    const container = document.getElementById('conteudo');  // atualiza a interface com o texto da cena
    container.innerHTML = `
        <h2>${cena.texto}</h2>
        <div id="opcoes"></div>
    `;

    const opcoesDiv = document.getElementById('opcoes'); // opções de escolha
    cena.opcoes.forEach((opcao) => {
        let botao = document.createElement('button');
        botao.innerText = opcao.texto;
        botao.onclick = () => escolherOpcao(opcao.destino);
        opcoesDiv.appendChild(botao);
    });
}

function escolherOpcao(destino) {
    const jogador_id = 1; 
    salvarProgresso(jogador_id, destino); 
    mostrarCena(destino); 
}

function salvarProgresso(jogador_id, cena_atual) {
    fetch('php/salvar_progresso.php', {
        method: 'POST',
        body: new URLSearchParams({
            'jogador_id': jogador_id,
            'cena_atual': cena_atual
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao salvar progresso:', error));
}

function carregarProgresso(jogador_id) {
    fetch(`php/carregar_progresso.php?jogador_id=${jogador_id}`)
    .then(response => response.json())
    .then(data => {
        if (data.status === "sucesso") {
            mostrarCena(data.cena_atual); 
        } else {
            mostrarCena("inicio"); 
        }
    })
    .catch(error => console.error('Erro ao carregar progresso:', error));
}

window.onload = () => {
    iniciarJogo();
};