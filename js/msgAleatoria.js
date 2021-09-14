	// ========================================
    //
    // CriptoKai created by Kainan Henrique
    // Copyright © 2021 Na18k
    //
    //  Creator - Na18k(GitHub): https://github.com/Na18k
    //  Project page: https://github.com/Na18k/CriptoKai
    //
    // ========================================

    // export mensagens;

    // Obtem elementos do HTML
	let msgAleatoria = document.getElementById('msgAleatoria');

	function aleatorio(min, max) {
		min = Math.ceil(min);
	  	max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min)) + min;
	}

	var mensagens = [
		"Quando você não pode usar um bisturi, use um machado.",
		"Vá ao dentista!",
		"Não escolha a pessoa mais bonita do mundo. Escolha aquela que torna o seu mundo mais bonito :)",
		"Os gênios são aqueles capazes de dizer algo profundo de forma simples.",
		"O indivíduo bem equilibrado é insano.",
		"Ás vezes você acha bondade no meio do inferno.",
		"Talvez pensemos de mais. Sinta mais, pense menos.",
		"I love Charles Bukowski",
		"Indev!",
		"Jogue Minecraft!",
		"Yaaay!",
		"Notch",
		"12345 é uma senha incorreta!",
		"Ouça Sydney Valette!",
		"Não seja mal educado!",
		"Eu sou do  Brasil /-/ I am from Brazil",
		"Trabalho de Kainan Henrique!",
		"I love Minecraft!",
		"Se ver algo escrito 'Não Clique', nunca fique curioso! :)",
		"Aproveite a vida ao máximo.",
		"I love Russia",
		'7 de Setembro, "Independência" do Brasil! /-/ September 7th, "Independence" of Brazil!',
		"Cicada 3301......",
		"Tome cuidado o vazio consome!",
		"EAD não funciona quando você é forçado a fazer!",
		"Discord!",
		"Pra que telefone no email? ningúem mais usa!",
		"Pergunte ao seu amigo se ele está bem :)",
		"Não coma morcego, por favor!",
		"Não use: /eggs para criptografar",
		"Não confie em empresas!",
		"#DigaNãoAoVácuo!",
		"Ouça Lorde!",
		'Ouça "МЫ" /-/ Cлушать "Мы" /-/ listen "Мы"',
		"Você já viu um Macaco Roxo? (BonziBuddy)",
		"YouTube full of commercials :(",
		"Feliz Aniversário!",
		"A escola é um lugar de loucos!",
		"Mais de 1000 linhas de código ao todo!",
		'No Brasil não existe apenas o "Rio de Janeiro"! /-/ In Brazil there is not only "Rio de Janeiro"!',
		"Ouça mais seu filho!",
		"Não tenha medo de errar.",
	];

	function printMensgens() {
		var msgAle = aleatorio(0, mensagens.length);
		msgAleatoria.textContent = mensagens[msgAle];
	}

	var now = new Date
	var dia = now.getDate();
	var mes = now.getMonth();
	var ano = now.getFullYear();

	// var dia = 25;
	// var mes = 11;

	if(dia == 18 && mes == 8) {
		msgAleatoria.innerHTML = `<p class="parabens">Feliz aniversário Kainan! 🎂</p>`;

	} else if(dia == 1 && mes == 0) {
		msgAleatoria.innerHTML = `<p class="parabens">FELIZ ANO NOVO! ${ano}</p>`;

	} else if(dia == 7 && mes == 8) {
		msgAleatoria.innerHTML = `<p class="independencia">"Independência" do Brasil! /-/ "Independence" of Brazil!</p>`;

	} else if(dia == 25 && mes == 11) {
		msgAleatoria.innerHTML = `<p class="natal">Feliz Natal /-/ Merry Christmas</p>`;

	} else {
		printMensgens();
	}