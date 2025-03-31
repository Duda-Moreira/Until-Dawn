var containerPai = document.querySelector("#desenrolar-historia");
var texto = document.querySelector("#paragrafo-principal");
var desafio = document.querySelector("#paragrafo-principal");
var botaoStart = document.querySelector("#btnStart");
var btn1 = document.querySelector("#btnUm");
var btn2 = document.querySelector("#btnDois");
document.getElementById("restart").style.display = "none";

function inicio(){
    botaoStart.remove();

    document.getElementById("botoes-controladores").style.display = "inline";
    layout('Você e seus amigos decidiram passar o fim de semana em uma antigo chalé nas montanhas. Uma tempestade de neve inesperada isola vocês do resto do mundo. Durante a noite, um grito ecoa pela floresta. Você precisa decidir o que fazer.');
    btn1.onclick = "Floresta"; 
    btn2.onclick = "Cabana";
    desafio.textContent = "Sair para investigar (Floresta)     Ficar dentro da cabana e trancar as portas (Cabana): ";
    document.getElementById("restart").style.display = "inline";
}

function layout(textoLayout, acaoUm, acaoDois){
    texto.textContent = textoLayout;
    btn1.textContent = acaoUm;
    btn2.textContent = acaoDois;
}

function floresta(){
    layout('Você caminha pela neve, iluminando o caminho com sua lanterna. Pegadas estranhas aparecem à sua frente, levando até uma velha mina abandonada');
    btn1.onclick = "Mina";
    btn2.onclick = "Cabana";
    desafio.textContent = "Seguir as pegadas para a mina (Mina)   Voltar para a cabana e avisar os outros (Cabana): ";
    document.getElementById("restart").style.display = "inline";
}

function cabana(){
    layout('Você decide trancar todas as portas e janelas. Mas então, as luzes piscam e um som estranho vem do andar de cima.');
    btn1.onclick = "Quarto";
    btn2.onclick = "Sala";
    desafio.textContent = "Subir para investigar (Quarto)   Reunir todos e armar-se com o que encontrar (Sala): ";
    document.getElementById("restart").style.display = "inline";
}

function quarto(){
    layout('No quarto, você encontra uma janela aberta e marcas de garras na parede. Algo ou alguém esteve aqui recentemente.');
    btn1.onclick = "Sala";
    btn2.onclick = "Floresta";
    desafio.textContent = "Fechar a janela e investigar a casa (Sala)   Sair pela janela e seguir as pegadas (Floresta): ";
    document.getElementById("restart").style.display = "inline";
}

function sala(){
    layout('Vocês se reúnem e tentam entender o que está acontecendo. De repente, batidas fortes na porta assustam a todos.');
    btn1.onclick = "Estranho";
    btn2.onclick = "Saída";
    desafio.textContent = "Abrir a porta (Estranho)   Ignorar e procurar outra saída (Saída): ";
    document.getElementById("restart").style.display = "inline";
}

function estranho(){
    layout('Ao abrir a porta, um homem ensanguentado cai no chão, sussurrando: "Não está sozinho...".');
    btn1.onclik = "Ajuda";
    btn2.onclick = "Preparação";
    desafio.textContent = "Ajudá-lo e trazê-lo para dentro (Ajuda)   Fechar a porta e se preparar para o pior (Preparação): ";
    document.getElementById("restart").style.display = "inline";
}

function ajuda(){
    layout('O homem diz que uma criatura antiga habita essas montanhas e caça à noite. Vocês precisam sair antes que seja tarde demais.');
    btn1.onclick = "Fuga";
    btn2.onclick = "Espera";
    desafio.textContent = "Acreditar nele e fugir da cabana (Fuga)   Ignorar e continuar na cabana (Espera): ";
    document.getElementById("restart").style.display = "inline";
}

function preparacao(){
    layout('Vocês barricam as portas e preparam armas improvisadas. O silêncio toma conta do ambiente... até que algo começa a arranhar as paredes.');
    btn1.onclick = "Confronto";
    btn2.onclick = "Espera";
    desafio.textContent = "Sair e confrontar o que está lá fora (Confronto)   Ficar escondido e esperar (Espera): ";
    document.getElementById("restart").style.display = "inline";
}

function fuga(){
    layout('Vocês correm pela neve em direção à estrada mais próxima. Mas algo os persegue, movendo-se rapidamente entre as árvores.');
    btn1.onclick = "Esconderijo";
    btn2.onclick = "Abismo";
    desafio.textContent = "Se esconder na floresta (Esconderijo)   Continuar correndo (Abismo): ";
    document.getElementById("restart").style.display = "inline";
}

function esconderijo(){
    layout('Vocês se escondem atrás de uma rocha. A criatura passa lentamente por vocês, farejando o ar. A respiração de um amigo é alta demais...');
    btn1.onclick = "Ataque";
    btn2.onclick = "Cabana";
    desafio.textContent = "Mandar ele calar a boca (Ataque)   Correr de volta para a cabana (Cabana): ";
    document.getElementById("restart").style.display = "inline";
}

function abismo(){
    layout('Correndo sem olhar para trás, você não percebe que está na beira de um penhasco. O chão cede.');
    btn1.onclick = "Pendurado";
    btn2.onclick = "Queda";
    desafio.textContent = "Tentar segurar na borda (Pendurado)   Aceitar seu destino (Queda): ";
    document.getElementById("restart").style.display = "inline";
}

function ataque(){ // GAME OVEEERRRRRRRRRRR
    texto.textContent = "A criatura percebe vocês. Em um piscar de olhos, ela salta e... tudo se apaga. Fim!";
    desafio.textContent = "";
    document.getElementById("restart").style.display = "inline";
    document.getElementById("restart").style.color = "red";
    document.getElementById("paragrafo-principal").style.fontSize = "30px";

    document.getElementById("botoes-controladores").style.display = "none";

}

function queda(){
    layout('Você sente o vento ao cair. O impacto nunca vem. Você acorda em um local estranho e desconhecido. O jogo continua...');
    btn1.onclick = "Subterraneo";
    desafio.textContent = "Explorar o local (Subterraneo): ";
    document.getElementById("restart").style.display = "inline";
}

function subterraneo(){
    layout('Você acorda em uma caverna iluminada por tochas. Há inscrições antigas nas paredes e um caminho adiante.');
    btn1.onclick = "Altar";
    btn2.onclick = "Parede";
    desafio.textContent = "Seguir pelo túnel (Altar)   Tentar escalar de volta (Parede): ";
    document.getElementById("restart").style.display = "inline";
}
