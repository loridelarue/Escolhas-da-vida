function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","personagem");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>ESCOLHAS DA VIDA</b>");
	N("Um jogo sobre escolhas e suas consequências.");
	N("Oi!");
	N("Você deve estar se perguntando quem sou eu.");

	Choose({
		"Eu não preciso saber, vamos direto ao ponto": Play,
		"Sim, quem é você? ": function(){
			Credits("Who are you?");
		},
		"...": function(){
			About("Hm, tell me more.");
		}
	});


}

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Vou me apresentar mesmo assim. ");
		N("Meu nome é Marina tenho 28 anos e sou médica.");
		N("Eu escolhi ser medica justamente por gostar muito de ajudar os outros então estou sempre envolvida em projetos sociais.");
		N("Mas isso não importa por agora.");
		N("Aconteceu algo comigo que eu não gostaria que ninguém passasse por isso e esse jogo é justamente para você se colocar no meu lugar e a gente tentar ver como você se sairia no meu lugar. ");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		N("Meu nome é Marina tenho 28 anos e sou médica.");
		N("Eu escolhi ser medica justamente por gostar muito de ajudar os outros então estou sempre envolvida em projetos sociais.");
		N("Mas isso não importa por agora.");
		N("Aconteceu algo comigo que eu não gostaria que ninguém passasse por isso e esse jogo é justamente para você se colocar no meu lugar e a gente tentar ver como você se sairia no meu lugar. ");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Meu nome é Marina tenho 28 anos e sou médica.");
		N("Eu escolhi ser medica justamente por gostar muito de ajudar os outros então estou sempre envolvida em projetos sociais.");
		N("Mas isso não importa por agora.");
		N("Aconteceu algo comigo que eu não gostaria que ninguém passasse por isso e esse jogo é justamente para você se colocar no meu lugar e a gente tentar ver como você se sairia no meu lugar. ");
	}

	N("Vamos voltar 1 ano atrás e começar.");


function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("Who are you?");
	}
	
		N("Meu nome é Marina tenho 28 anos e sou médica.");
		N("Eu escolhi ser medica justamente por gostar muito de ajudar os outros então estou sempre envolvida em projetos sociais.");
		N("Mas isso não importa por agora.");
		N("Aconteceu algo comigo que eu não gostaria que ninguém passasse por isso e esse jogo é justamente para você se colocar no meu lugar e a gente tentar ver como você se sairia no meu lugar. ");
	        N("Vamos voltar 1 ano atrás e começar.");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){

	}else{
		N("Vou me apresentar mesmo assim. ");
		N("Meu nome é Marina tenho 28 anos e sou médica.");
		N("Eu escolhi ser medica justamente por gostar muito de ajudar os outros então estou sempre envolvida em projetos sociais.");
		N("Mas isso não importa por agora.");
		N("Aconteceu algo comigo que eu não gostaria que ninguém passasse por isso e esse jogo é justamente para você se colocar no meu lugar e a gente tentar ver como você se sairia no meu lugar. ");
		N("Vamos voltar 1 ano atrás e começar.");
	}
	
			}
		});
	}

}
