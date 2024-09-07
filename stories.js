const stories = [
    //História 1: O Castelo do Vampiro
    {
        title: "O Castelo do Vampiro",
        description: "Você é um aventureiro destemido, atraído até um castelo sombrio no topo de uma montanha. O castelo é o lar de um vampiro antigo, uma criatura poderosa que governa as terras ao redor com medo e escuridão. Dizem que ele possui riquezas inimagináveis e segredos antigos, mas também é o pai de uma filha de beleza hipnotizante, que muitos acreditam estar sob um feitiço. Ao entrar no castelo, você se depara com mistérios e tentações que testarão sua coragem e sua alma. O silêncio é cortado apenas pelo vento que atravessa as janelas quebradas, como se o próprio castelo estivesse vivo, observando seus movimentos.",
        parts: [
            {
                // Parte 1: A Entrada Sombria
                title: "A Entrada Sombria",
                description: "Você chega ao portão de ferro forjado do castelo. A lua cheia ilumina o caminho, e a floresta ao redor parece viva com murmúrios e sombras que se movem como se tivessem vontade própria. O portão range ao se abrir, revelando um corredor escuro e frio. A brisa que vem de dentro do castelo carrega o cheiro de mofo e decadência. No fim do corredor, três portas surgem, cada uma levando a um destino diferente dentro do castelo. Sua respiração fica pesada conforme você percebe que qualquer decisão pode ser sua última.",
                image: "assets/story-images/castelo-1.webp",
                options: [
                    {
                        text: "Seguir pelo salão iluminado por candelabros",
                        nextPart: "O Salão dos Candelabros"
                    },
                    {
                        text: "Explorar a cripta subterrânea",
                        nextPart: "A Cripta Sombria"
                    },
                    {
                        text: "Subir a escadaria em espiral",
                        nextPart: "A Torre Alta"
                    }
                ]
            },
            {
                // Parte 2A: O Salão dos Candelabros
                title: "O Salão dos Candelabros",
                description: "Você entra em um salão vasto e silencioso, iluminado apenas por candelabros pendurados em correntes antigas. A luz bruxuleante cria sombras que parecem ganhar vida, acompanhando seus passos com um movimento sinistro. À medida que avança, sente uma presença observando-o, o peso dos olhares invisíveis faz seu coração acelerar. De repente, a filha do vampiro aparece, deslizando pelo chão com uma graça sobrenatural. Sua beleza é inegável, mas seus olhos brilham com uma escuridão que faz o ar ao seu redor pesar. O silêncio no salão é opressor, quebrado apenas pelo sussurro de suas palavras e o som suave de sua respiração.",
                image: "assets/story-images/castelo-2A.webp",
                options: [
                    {
                        text: "Conversar com a filha do vampiro",
                        nextPart: "Confiança ou Engano"
                    },
                    {
                        text: "Desafiar a filha do vampiro",
                        nextPart: "O Confronto"
                    }
                ]
            },
            {
                // Parte 2B: A Cripta Sombria
                title: "A Cripta Sombria",
                description: "A cripta é sombria e cheia de caixões cobertos de poeira e teias de aranha. O cheiro de morte é palpável no ar, e o frio úmido da pedra parece atravessar seus ossos. Ao examinar as paredes, você encontra escritos antigos que falam de uma maldição que consome a linhagem do vampiro. De repente, você sente uma presença ao seu lado, e quando se vira, a filha do vampiro surge em silêncio, seus olhos brilhando na escuridão como brasas. Ela oferece sua ajuda, sua voz baixa e sedutora, mas algo em seu sorriso faz seu estômago revirar. Será uma armadilha?",
                image: "assets/story-images/castelo-2B.webp",
                options: [
                    {
                        text: "Aceitar a ajuda da filha do vampiro",
                        nextPart: "O Preço da Ajuda"
                    },
                    {
                        text: "Recusar a ajuda e sair da cripta",
                        nextPart: "A Fuga da Cripta"
                    }
                ]
            },
            {
                // Parte 2C: A Torre Alta
                title: "A Torre Alta",
                description: "A escadaria em espiral parece interminável, cada passo ecoando como um lembrete solitário de sua jornada. O vento entra por pequenas janelas, trazendo o cheiro de uma noite fria e isolada. No topo, você encontra a filha do vampiro, olhando pela janela para a lua cheia que ilumina o horizonte. Seu rosto está banhado pela luz prateada, revelando uma tristeza profunda. Há algo nela que parece frágil, mas você sente uma energia poderosa e perigosa emanando de sua presença, como se um simples toque pudesse desencadear algo terrível.",
                image: "assets/story-images/castelo-2C.webp",
                options: [
                    {
                        text: "Consolar a filha do vampiro",
                        nextPart: "O Coração da Filha"
                    },
                    {
                        text: "Ignorar a filha e continuar subindo",
                        nextPart: "A Torre Solitária"
                    }
                ]
            },
            {
                // Parte 3A: Confiança ou Engano
                title: "Confiança ou Engano",
                description: "Ela revela que seu pai a mantém prisioneira, mas há algo mais profundo: uma maldição antiga a prende ao castelo, e o próprio sangue dela é a chave para libertá-la ou condená-la. Suas palavras carregam dor, mas também algo indefinível, como se ela estivesse tecendo uma teia ao redor de seus pensamentos. Você sente que cada decisão a partir de agora será crucial, pois está mais envolvido do que poderia imaginar.",
                image: "assets/story-images/castelo-3A.webp",
                options: [
                    {
                        text: "Ajudar a filha a escapar",
                        outcome: "Vocês fogem do castelo, mas o vampiro descobre e uma caçada implacável começa. A liberdade dela tem um preço alto, e o fardo dessa decisão vai te acompanhar para sempre."
                    },
                    {
                        text: "Desconfiar e deixá-la no castelo",
                        outcome: "Você sai do castelo, deixando a filha do vampiro. Ao olhar para trás, percebe que ela nunca foi uma prisioneira verdadeira. A dúvida permanece em sua mente: seria ela a verdadeira vilã?"
                    }
                ]
            },
            {
                // Parte 3B: O Confronto
                title: "O Confronto",
                description: "Ao desafiá-la, a filha do vampiro revela sua verdadeira natureza como uma criatura da noite. Seu corpo transforma-se lentamente, e sua expressão de doçura dá lugar a uma máscara de crueldade. Garras afiadas surgem de suas mãos, e seus olhos brilham com uma fome insaciável. Ela hesita antes de atacar, dividida entre a escuridão e a luz, o que te dá uma pequena janela de oportunidade. Cada movimento agora é uma questão de vida ou morte.",
                image: "assets/story-images/castelo-3B.webp",
                options: [
                    {
                        text: "Lutar contra a filha do vampiro",
                        outcome: "Você vence o confronto, mas ao olhar nos olhos dela, percebe a humanidade que restava, e isso o assombra para sempre. Seu grito final ecoa em sua mente, um lembrete doloroso do que ela poderia ter sido."
                    },
                    {
                        text: "Fugir da filha do vampiro",
                        outcome: "Você consegue escapar, mas a culpa por não ter ajudado a libertá-la de sua maldição o persegue para sempre, como um fantasma que não pode ser exorcizado."
                    }
                ]
            },
            {
                // Parte 3C: O Preço da Ajuda
                title: "O Preço da Ajuda",
                description: "Você aceita a ajuda da filha do vampiro, mas ao confiar nela, algo sombrio começa a emergir. Sua presença ao seu lado se torna cada vez mais opressiva, e o castelo parece reagir à sua proximidade com uma hostilidade crescente. Os corredores se estreitam, e a sensação de que você está sendo conduzido para uma armadilha se torna inescapável.",
                image: "assets/story-images/castelo-3C.webp",
                options: [
                    {
                        text: "Confiar plenamente nela",
                        outcome: "Ela trai sua confiança e o entrega ao pai, revelando-se parte de uma teia de mentiras que você jamais poderia ter previsto. O vampiro o aguarda com um sorriso cruel nos lábios."
                    },
                    {
                        text: "Desconfiar e se preparar para o pior",
                        outcome: "Sua desconfiança salva sua vida. Quando a traição ocorre, você já está preparado e consegue escapar, deixando para trás a filha e seu destino sombrio. Contudo, o sabor amargo da traição o assombra."
                    }
                ]
            },
            {
                // Parte 3D: A Fuga da Cripta
                title: "A Fuga da Cripta",
                description: "Você sai da cripta, mas o ambiente ao seu redor começa a mudar drasticamente. As sombras nas paredes parecem ganhar vida, e o ar torna-se denso e pesado. O castelo está vivo, ciente de sua presença. Seus passos ecoam de maneira ameaçadora, e você sente que o próprio vampiro observa cada movimento seu, aguardando o momento perfeito para atacá-lo.",
                image: "assets/story-images/castelo-3D.webp",
                options: [
                    {
                        text: "Enfrentar o vampiro diretamente",
                        outcome: "O confronto final com o vampiro é intenso, uma luta entre a vida e a morte. Você consegue feri-lo mortalmente, mas o combate deixa cicatrizes profundas em sua alma. O peso dessa vitória amarga o acompanhará pelo resto de sua vida."
                    },
                    {
                        text: "Fugir do castelo",
                        outcome: "Você foge do castelo com vida, mas a lembrança do poder do vampiro e sua filha assombram seus pensamentos para sempre. O castelo não é apenas uma lembrança, é uma presença que você sente, mesmo de longe."
                    }
                ]
            },
            {
                // Parte 3E: O Coração da Filha
                title: "O Coração da Filha",
                description: "Você tenta consolar a filha do vampiro, e ela revela mais sobre sua vida. Seus olhos se enchem de lágrimas enquanto conta sobre o peso de sua existência, presa entre o amor pelo pai e o desejo desesperado por liberdade. Sua voz é suave, mas as palavras carregam uma dor profunda, como se ela estivesse carregando um fardo por séculos. O conflito interno é tão grande que parece que sua alma está prestes a se despedaçar.",
                image: "assets/story-images/castelo-3E.webp",
                options: [
                    {
                        text: "Ajudar a filha a se libertar",
                        outcome: "Você a ajuda a fugir, mas o vínculo emocional que ela tem com o pai dificulta sua liberdade. Mesmo longe, o poder do vampiro ainda a persegue, e sua fuga não garante a paz que ela tanto desejava. A luta por sua liberdade é apenas o começo."
                    },
                    {
                        text: "Deixar que ela decida sozinha",
                        outcome: "Você deixa que ela decida, e ela escolhe ficar ao lado do pai, mesmo sabendo que nunca será verdadeiramente livre. Seu coração é pesado, mas sua lealdade à família supera o desejo de liberdade."
                    }
                ]
            },
            {
                // Parte 3F: A Torre Solitária
                title: "A Torre Solitária",
                description: "Você ignora a filha e continua subindo a escadaria sinuosa. No topo da torre, você encontra o vampiro em sua forma mais poderosa, esperando por você como se já soubesse que você chegaria ali. A lua cheia brilha através das janelas altas, e o brilho frio ilumina sua figura ameaçadora. Ele sorri, um sorriso que não revela nada além de confiança absoluta em seu domínio sobre o castelo e todos que ousam desafiar seu poder.",
                image: "assets/story-images/castelo-3F.webp",
                options: [
                    {
                        text: "Enfrentar o vampiro",
                        outcome: "A batalha com o vampiro é feroz, uma luta entre a vida e a morte. Você consegue destruí-lo, mas, ao derrotá-lo, a maldição que envolvia o castelo se volta contra você. A vitória tem um preço alto, um sacrifício inevitável que sela seu destino."
                    },
                    {
                        text: "Fugir antes de enfrentá-lo",
                        outcome: "Você foge da torre e deixa o castelo para trás, mas o arrependimento de não ter confrontado o vampiro o atormenta pelo resto de seus dias. Cada noite, você se pergunta se poderia ter feito diferente."
                    }
                ]
            }
        ]
    },
    
    //História 2: O Lago da Lua Prateada
    {
        title: "O Lago da Lua Prateada",
        description: "Você é uma jovem aventureira que adentra uma floresta encantada em busca do mítico Lago da Lua Prateada, um lugar onde o luar toca a superfície da água de forma mágica, e onde antigas criaturas guardiãs, como elfas, ninfas e fadas, habitam. Dizem que quem se banhar nas águas do lago sob o luar terá seus desejos realizados, mas a magia que permeia esse lugar é tão perigosa quanto bela. Cada passo que você dá dentro dessa floresta parece conduzi-la mais profundamente nos mistérios da natureza.",
        parts: [
            {
                // Parte 1: O Chamado do Lago
                title: "O Chamado do Lago",
                description: "Você caminha pela floresta densa enquanto o luar ilumina suavemente seu caminho. O ar ao seu redor está impregnado de fragrâncias florais e o som suave de folhas sendo tocadas pelo vento. Após horas de jornada, o som de água corrente chama sua atenção. A brisa fresca traz consigo uma sensação de calma e poder. Ao chegar, o deslumbrante Lago da Lua Prateada se revela. As águas do lago brilham com o reflexo da lua, criando um espetáculo hipnotizante. Perto da margem, uma elfa de pele prateada e cabelos como névoa está presente, sua aura é tão etérea quanto o brilho da lua. Seus olhos se voltam para você com um misto de curiosidade e sabedoria.",
                image: "assets/story-images/lago-1.webp",
                options: [
                    {
                        text: "Aproximar-se da elfa e pedir sua ajuda",
                        nextPart: "O Conselho da Elfa"
                    },
                    {
                        text: "Ignorar a elfa e caminhar diretamente até o lago para fazer seu desejo",
                        nextPart: "A Decisão Impulsiva"
                    },
                    {
                        text: "Ficar à distância e observar, sem interferir",
                        nextPart: "Observadora Silenciosa"
                    }
                ]
            },
            {
                // Parte 2A: O Conselho da Elfa
                title: "O Conselho da Elfa",
                description: "A elfa o recebe com um sorriso gentil, seus olhos prateados brilhando com a luz do luar. Ela parece perceber sua dúvida antes mesmo de você falar, e explica que o lago tem o poder de conceder desejos, mas alerta que as águas são traiçoeiras. Ela oferece seu conhecimento sobre o lago e seus segredos, explicando que a magia do lugar responde à pureza de intenções. Ela avisa que o poder não vem sem sacrifícios, e que aqueles que tentam enganar o lago pagam um preço alto. Suas palavras, embora suaves, carregam uma seriedade que pesa em seu coração.",
                image: "assets/story-images/lago-2A.webp",
                options: [
                    {
                        text: "Confiar na elfa e seguir seus conselhos",
                        nextPart: "O Teste da Altruísmo"
                    },
                    {
                        text: "Desconfiar da elfa e seguir por conta própria",
                        nextPart: "A Armadilha do Poder"
                    }
                ]
            },
            {
                // Parte 2B: A Decisão Impulsiva
                title: "A Decisão Impulsiva",
                description: "Você ignora a elfa e caminha diretamente até o lago. O ar ao redor do lago parece pesar à medida que você se aproxima da superfície. Ao tocar a água, uma sensação gelada percorre seu corpo, mas é uma frieza que vem de dentro, mexendo com suas emoções e sua alma. O reflexo da lua na água começa a se distorcer, e a superfície do lago borbulha, como se a própria água estivesse reagindo à sua presença. De repente, uma versão sombria de seu desejo começa a se manifestar, uma visão perturbadora que parece sair de suas piores memórias e ambições.",
                image: "assets/story-images/lago-2B.webp",
                options: [
                    {
                        text: "Retirar-se antes que seja tarde demais",
                        nextPart: "A Retirada Cautelosa"
                    },
                    {
                        text: "Persistir e fazer o desejo",
                        nextPart: "O Preço do Poder"
                    }
                ]
            },
            {
                // Parte 2C: Observadora Silenciosa
                title: "Observadora Silenciosa",
                description: "Você decide não interferir e observa à distância. A elfa começa a realizar um antigo ritual, suas mãos traçando símbolos no ar enquanto murmura palavras em uma língua esquecida. O lago brilha em resposta, e você percebe que ele reage não apenas aos desejos, mas à pureza de coração de quem se aproxima. A cena diante de você é tão mágica quanto reveladora, dando-lhe uma nova perspectiva sobre seus próprios desejos. O peso de suas ambições parece ser desafiado pela tranquilidade ao seu redor.",
                image: "assets/story-images/lago-2C.webp",
                options: [
                    {
                        text: "Aproximar-se e revelar suas intenções",
                        nextPart: "O Desejo Altruísta"
                    },
                    {
                        text: "Permanecer à distância e continuar observando",
                        nextPart: "O Observador Silencioso"
                    }
                ]
            },
            {
                // Parte 3A: O Teste da Altruísmo
                title: "O Teste da Altruísmo",
                description: "A elfa guia você até o centro do lago, onde o luar forma um círculo perfeito de luz sobre a água. Ela explica que o lago realiza desejos, mas apenas se forem genuínos e altruístas. O teste que o lago oferece não será fácil, e pode exigir um sacrifício pessoal profundo. A cada palavra da elfa, o ar parece ficar mais pesado, e você sente o poder do lago crescendo ao seu redor. A tentação de usar o poder para si mesmo é grande, mas a advertência da elfa ecoa em sua mente.",
                image: "assets/story-images/lago-3A.webp",
                options: [
                    {
                        text: "Aceitar o teste e sacrificar algo importante",
                        outcome: "Você aceita o teste e, com o coração pesado, sacrifica algo de grande valor para você. Em troca, o lago concede seu desejo, e uma sensação de paz e conexão profunda com a natureza toma conta de você. O luar parece brilhar mais intensamente, e você deixa o lago com uma compreensão renovada de seu lugar no mundo."
                    },
                    {
                        text: "Recusar o sacrifício e sair do lago",
                        outcome: "Você se recusa a sacrificar o que é mais precioso e decide deixar o lago. A elfa o observa em silêncio enquanto você se afasta. O lago brilha uma última vez antes de se cobrir com sombras, como se reconhecesse sua decisão. O vazio deixado por sua recusa pesa em seu coração."
                    }
                ]
            },
            {
                // Parte 3B: A Armadilha do Poder
                title: "A Armadilha do Poder",
                description: "Você decide seguir por conta própria, ignorando os conselhos da elfa. O desejo que você faz é concedido quase imediatamente, mas algo está profundamente errado. O poder que você almejava parece se manifestar de uma maneira distorcida. O lago começa a ondular violentamente, e a escuridão ao redor se intensifica. O que parecia ser um simples desejo logo se revela uma armadilha da própria natureza mágica do lago.",
                image: "assets/story-images/lago-3B.webp",
                options: [
                    {
                        text: "Tentar desfazer o desejo",
                        outcome: "Você tenta desesperadamente desfazer o desejo, mas a magia do lago já começou a cobrar seu preço. Seu corpo e sua mente começam a se deteriorar, e a sensação de estar preso em uma teia mágica se intensifica. O que antes era um sonho se transforma rapidamente em um pesadelo sem fim."
                    },
                    {
                        text: "Aceitar as consequências e viver com o fardo",
                        outcome: "Você decide aceitar as consequências de seu desejo egoísta. O poder que você recebeu começa a corroer sua alma lentamente. Cada momento que passa, você percebe que o que parecia ser uma bênção é, na verdade, uma maldição que a acompanhará pelo resto de seus dias."
                    }
                ]
            },
            {
                // Parte 3C: A Retirada Cautelosa
                title: "A Retirada Cautelosa",
                description: "Sentindo que algo está errado, você decide se afastar do lago antes que seja tarde demais. Ao se afastar, o luar parece hesitar, como se estivesse tentando te chamar de volta. O desejo não realizado ainda ecoa em sua mente, e uma tentação sutil tenta puxá-la de volta. A sensação de estar à beira de algo grande permanece com você.",
                image: "assets/story-images/lago-3C.webp",
                options: [
                    {
                        text: "Partir e deixar o lago para trás",
                        outcome: "Você parte em segurança, decidida a nunca mais retornar. Embora o lago continue a existir em algum lugar nas profundezas da floresta, você sabe que resistir à tentação foi a decisão mais sábia. O caminho de volta é mais leve, como se a floresta estivesse te reconhecendo por sua sabedoria."
                    },
                    {
                        text: "Retornar para tentar mais uma vez",
                        outcome: "A tentação é forte demais, e você acaba retornando ao lago. Ao tocar a água mais uma vez, a magia do lago revela sua verdadeira face, e as ilusões começam a tomar conta de sua mente. Você se perde no poder que tanto almejava e se afasta da realidade para sempre."
                    }
                ]
            },
            {
                // Parte 3D: O Preço do Poder
                title: "O Preço do Poder",
                description: "Você insiste em fazer seu desejo, mesmo sentindo as advertências ao seu redor. O lago responde com um brilho intenso, e uma onda de poder percorre seu corpo, enchendo-o com uma sensação de invencibilidade. No entanto, esse poder carrega um fardo terrível, e logo você percebe que cada vez que o usa, está dando algo em troca.",
                image: "assets/story-images/lago-3D.webp",
                options: [
                    {
                        text: "Usar o poder para conquistar seus objetivos",
                        outcome: "Você usa o poder para alcançar grandes feitos, tornando-se uma figura imponente e respeitada. No entanto, com cada uso, sua vitalidade é drenada lentamente. Aos poucos, você percebe que está trocando anos de sua vida por cada conquista, e a glória começa a se transformar em um fardo que você mal pode suportar."
                    },
                    {
                        text: "Abandonar o poder antes que seja tarde demais",
                        outcome: "Você decide abandonar o poder e deixar o lago para trás. Embora a tentação continue a chamar seu nome, você escolhe a liberdade e a paz sobre o fardo de um poder destrutivo. O lago permanece silencioso enquanto você se afasta, respeitando sua escolha de evitar o caminho da destruição."
                    }
                ]
            },
            {
                // Parte 3E: O Desejo Altruísta
                title: "O Desejo Altruísta",
                description: "Você se aproxima do lago com suas intenções claras e puras. O lago começa a brilhar intensamente, respondendo diretamente à sinceridade de seu coração. A elfa, observando de perto, sorri em aprovação. O lago parece reconhecer que seu desejo não é para ganho pessoal, mas em benefício de algo maior. A atmosfera ao redor se enche de uma tranquilidade que você nunca sentiu antes.",
                image: "assets/story-images/lago-3E.webp",
                options: [
                    {
                        text: "Pedir algo em benefício do bem maior",
                        outcome: "O lago concede seu desejo, e uma sensação de paz profunda preenche o ar. As criaturas ao redor sorriem em aprovação, e o brilho da lua parece mais intenso. Você sente que sua escolha trouxe harmonia ao local, e sua alma se enche de uma serenidade duradoura."
                    },
                    {
                        text: "Pedir algo egoísta, buscando poder pessoal",
                        outcome: "O lago brilha intensamente por um momento, mas logo o brilho se apaga, deixando uma sensação de vazio. Seu pedido é concedido, mas ao custo de algo muito maior. Sua alma começa a se corroer lentamente, e o que parecia ser uma vitória se transforma em um peso que você carrega consigo para sempre."
                    }
                ]
            },
            {
                // Parte 3F: O Observador Silencioso
                title: "O Observador Silencioso",
                description: "Você decide não interferir e continua a observar em silêncio enquanto as criaturas mágicas ao redor do lago realizam seus rituais. O brilho suave da água reflete suas intenções e as delas, como um espelho da alma. O lago parece responder àqueles que têm corações puros e intenções verdadeiras, e quanto mais você observa, mais compreende a natureza da magia que o cerca.",
                image: "assets/story-images/lago-3F.webp",
                options: [
                    {
                        text: "Decidir revelar suas intenções e fazer seu desejo",
                        outcome: "Você finalmente se aproxima do lago e faz seu desejo com o coração aberto. O lago responde com um brilho suave e acolhedor, concedendo seu pedido de maneira justa, sem exigir um sacrifício profundo. Você sai do lago sentindo uma leveza e um entendimento mais profundo de si mesma."
                    },
                    {
                        text: "Decidir não fazer nenhum desejo e sair do lago em paz",
                        outcome: "Você decide que não precisa de desejos, e as criaturas ao redor do lago aplaudem sua sabedoria. O lago reflete sua imagem uma última vez antes de desaparecer em meio ao brilho do luar, e você deixa o local com um profundo senso de paz interior."
                    }
                ]
            }
        ]
    },    

    // História 3: A Coroa dos Quatro Ventos
    {
        title: "A Coroa dos Quatro Ventos",
        description: "Você é um cavaleiro de um reino distante, em busca da lendária Coroa dos Quatro Ventos. Dizem que a coroa foi forjada pelos deuses antigos e contém o poder dos ventos do Norte, Sul, Leste e Oeste, conferindo ao seu portador o domínio sobre o clima e as tempestades. Sua jornada o leva a enfrentar desafios mortais e segredos antigos enquanto escala a montanha para alcançar a Fortaleza Celestial, onde a coroa está guardada. Cada passo que você dá é permeado pelo som dos ventos que parecem sussurrar segredos dos antigos deuses.",
        parts: [
            {
                // Parte 1: A Subida da Montanha
                title: "A Subida da Montanha",
                description: "A jornada começa na base da montanha, onde o vento assobia forte, cortando sua pele como navalhas. O caminho à frente é íngreme e traiçoeiro. Três trilhas se abrem diante de você, cada uma prometendo perigos únicos, guardados pelos ventos que ali reinam. Apenas um verdadeiro herói poderá alcançar a Fortaleza Celestial e reclamar a coroa. O som constante dos ventos o rodeia, como se testassem sua determinação.",
                image: "assets/story-images/coroa-1.webp",
                options: [
                    {
                        text: "Enfrentar o Vento Norte pela trilha da neve congelante",
                        nextPart: "A Provação do Vento Norte"
                    },
                    {
                        text: "Arriscar-se pelo penhasco traiçoeiro dos Ventos Leste e Oeste",
                        nextPart: "O Penhasco dos Ventos Furiosos"
                    },
                    {
                        text: "Aventurar-se pela misteriosa floresta encantada do Vento Sul",
                        nextPart: "A Floresta das Sombras"
                    }
                ]
            },
            {
                // Parte 2A: A Provação do Vento Norte
                title: "A Provação do Vento Norte",
                description: "A trilha da neve é brutal e desolada. O Vento Norte uiva como uma besta selvagem, tentando forçá-lo a desistir. Cada passo afunda na neve profunda e o frio corta seus ossos. Você sente o peso da solidão enquanto o gelo e o vento parecem querer te consumir. A força do Vento Norte não é apenas física, mas também uma prova de resistência mental.",
                image: "assets/story-images/coroa-2A.webp",
                options: [
                    {
                        text: "Buscar abrigo em uma caverna e se proteger da tempestade",
                        nextPart: "O Refúgio Gelado"
                    },
                    {
                        text: "Enfrentar o Vento Norte com determinação e avançar",
                        nextPart: "O Encontro com o Guardião de Gelo"
                    }
                ]
            },
            {
                // Parte 2B: O Penhasco dos Ventos Furiosos
                title: "O Penhasco dos Ventos Furiosos",
                description: "O caminho estreito pelas bordas do penhasco é perigoso. Os Ventos irmãos Leste e Oeste sopram com fúria, empurrando-o para o abismo abaixo. A cada passo, o vento tenta derrubá-lo, e a incerteza sobre o que o aguarda no fim do caminho é uma ameaça constante. Mais à frente, você avista uma ponte frágil, balançando violentamente sob o poder dos ventos.",
                image: "assets/story-images/coroa-2B.webp",
                options: [
                    {
                        text: "Atravessar a ponte com cautela",
                        nextPart: "A Travessia do Desespero"
                    },
                    {
                        text: "Escalar um desfiladeiro para evitar a ponte e tentar outro caminho",
                        nextPart: "A Ascensão Perigosa"
                    }
                ]
            },
            {
                // Parte 2C: A Floresta das Sombras
                title: "A Floresta das Sombras",
                description: "A floresta é envolta em uma névoa mística, e o Vento Sul sussurra palavras que parecem tentar sua sanidade. As árvores são altas e antigas, cada uma coberta de musgo que brilha sob a luz esverdeada do sol que mal penetra o denso dossel. Criaturas das sombras se escondem entre as árvores, observando-o atentamente, esperando o momento certo para atacar. A atmosfera é carregada de magia antiga, e você sente que a floresta está viva, testando sua coragem.",
                image: "assets/story-images/coroa-2C.webp",
                options: [
                    {
                        text: "Confiar na própria coragem e seguir adiante",
                        nextPart: "O Ritual dos Ventos"
                    },
                    {
                        text: "Seguir os sussurros e confiar nas criaturas que habitam a floresta",
                        nextPart: "O Labirinto Ilusório"
                    }
                ]
            },
            {
                // Parte 3A: O Refúgio Gelado
                title: "O Refúgio Gelado",
                description: "Dentro da caverna, o silêncio é interrompido apenas pelo som do vento batendo do lado de fora. O abrigo parece seguro à primeira vista, mas logo você percebe que o frio é mais do que um simples clima. As paredes parecem respirar com o gelo, e logo você descobre que a caverna é um antigo santuário, guardado por uma criatura de gelo que testa a força de vontade dos que ali se refugiam.",
                image: "assets/story-images/coroa-3A.webp",
                options: [
                    {
                        text: "Enfrentar a criatura e provar seu valor",
                        outcome: "Você enfrenta a criatura gélida com toda sua força e inteligência. Após uma batalha exaustiva, você a derrota, provando seu valor. O Vento Norte, impressionado com sua determinação, o guia em segurança até a Fortaleza Celestial."
                    },
                    {
                        text: "Esperar a tempestade passar, sem arriscar um confronto",
                        outcome: "Você decide não enfrentar a criatura e espera a tempestade passar. Quando o vento finalmente acalma, outros aventureiros já alcançaram a Fortaleza Celestial, e você percebe que perdeu sua chance de reclamar a coroa."
                    }
                ]
            },
            {
                // Parte 3B: O Encontro com o Guardião de Gelo
                title: "O Encontro com o Guardião de Gelo",
                description: "Ao avançar pela neve, o Vento Norte parece ganhar força. De repente, um gigante de gelo, com olhos brilhantes como cristais, surge do horizonte. Ele é o guardião do Vento Norte, destinado a proteger a coroa daqueles que não são dignos de seu poder. Sua presença imponente é um teste final para qualquer cavaleiro que deseje a coroa.",
                image: "assets/story-images/coroa-3B.webp",
                options: [
                    {
                        text: "Enfrentar o guardião em combate mortal",
                        outcome: "Você luta bravamente contra o guardião, e após um combate brutal, consegue derrotá-lo. Seu triunfo demonstra que você é digno da coroa, e a Fortaleza Celestial está agora ao seu alcance."
                    },
                    {
                        text: "Tentar negociar com o guardião, oferecendo uma solução pacífica",
                        outcome: "Com sabedoria, você decide não lutar, mas negociar com o guardião. Ele se comove com sua prudência e o deixa passar. Embora avance com honra, a vitória é lembrada mais como uma negociação do que como uma conquista."
                    }
                ]
            },
            {
                // Parte 3C: A Travessia do Desespero
                title: "A Travessia do Desespero",
                description: "Você decide atravessar a ponte oscilante, sentindo o vento furioso tentando jogá-lo para a morte. O som da madeira rangendo ecoa em seus ouvidos, e cada passo que você dá parece aproximar o fim da estrutura frágil. No meio da travessia, a ponte começa a se partir, e você sabe que precisa agir rápido para sobreviver.",
                image: "assets/story-images/coroa-3C.webp",
                options: [
                    {
                        text: "Correr para a segurança antes que a ponte desabe",
                        outcome: "Em um último ato de desespero, você corre e salta para a segurança do outro lado, momentos antes da ponte desabar no abismo. O caminho até a Fortaleza Celestial agora está livre."
                    },
                    {
                        text: "Avançar calmamente, com medo de se movimentar demais e a ponte desabar",
                        outcome: "Você tenta avançar com calma, mas a lentidão se torna sua ruína. A ponte cede debaixo de você, e você cai no abismo, selando seu destino nas profundezas do penhasco."
                    }
                ]
            },
            {
                // Parte 3D: A Ascensão Perigosa
                title: "A Ascensão Perigosa",
                description: "Decidido a evitar a ponte, você escala o desfiladeiro íngreme, com pedras afiadas e traiçoeiras que ameaçam sua vida a cada movimento. O vento continua a tentar derrubá-lo, e o esforço físico para se manter na rocha é extenuante. A cada puxada, você sente o peso da montanha e da tempestade testando sua coragem e resistência.",
                image: "assets/story-images/coroa-3D.webp",
                options: [
                    {
                        text: "Persistir e chegar ao topo, desafiando todas as probabilidades",
                        outcome: "Com força e determinação inabaláveis, você alcança o topo do desfiladeiro. O Vento Oeste, impressionado com sua perseverança, o guia até a entrada da Fortaleza Celestial, reconhecendo sua coragem."
                    },
                    {
                        text: "Voltar e reconsiderar a travessia pela ponte",
                        outcome: "Desanimado, você decide descer e reconsiderar a travessia pela ponte. Mas ao retornar, descobre que a ponte desmoronou. Sua hesitação custou-lhe a única chance de continuar sua jornada."
                    }
                ]
            },
            {
                // Parte 3E: O Ritual dos Ventos
                title: "O Ritual dos Ventos",
                description: "Ao ignorar os sussurros traiçoeiros da floresta, você segue adiante e testemunha um antigo ritual sendo realizado por criaturas ancestrais. As entidades invocam o poder dos quatro ventos, e a energia que flui no ar é palpável. O poder dos ventos parece estar ao seu alcance, mas a tentação de interferir é perigosa.",
                image: "assets/story-images/coroa-3E.webp",
                options: [
                    {
                        text: "Interromper o ritual e tomar o poder dos ventos para si",
                        outcome: "Você interrompe o ritual e toma o poder dos ventos, mas o preço é alto. Embora sua jornada até a Fortaleza Celestial esteja garantida, o poder corrompe sua alma. Aos poucos, você sente sua humanidade se esvaindo, trocando-a pelo controle dos ventos."
                    },
                    {
                        text: "Observar o ritual de longe e aprender os segredos do vento",
                        outcome: "Você decide não interferir e observa o ritual à distância. Com isso, você aprende os segredos antigos dos ventos. O caminho até a Fortaleza Celestial é revelado, mas a magia dos ventos não lhe pertence."
                    }
                ]
            },
            {
                // Parte 3F: O Labirinto Ilusório
                title: "O Labirinto Ilusório",
                description: "As criaturas da floresta o guiam por um caminho que logo se revela um labirinto de ilusões. O tempo e o espaço parecem se distorcer ao seu redor, e seu senso de realidade começa a se perder. O labirinto não é apenas físico, mas também mental, e você deve enfrentar seus próprios medos e dúvidas para escapar. A batalha não é apenas contra o mundo ao seu redor, mas contra sua própria mente.",
                image: "assets/story-images/coroa-3F.webp",
                options: [
                    {
                        text: "Lutar contra as ilusões e encontrar seu próprio caminho",
                        outcome: "Você enfrenta as ilusões, desafiando os demônios internos que tentam quebrar sua sanidade. Com grande esforço, você escapa do labirinto, mas não sem cicatrizes emocionais profundas. Apesar das feridas, o caminho para a Fortaleza Celestial está finalmente diante de você."
                    },
                    {
                        text: "Ceder às ilusões e permitir que elas mostrem o caminho",
                        outcome: "Você cede à tentação das ilusões, permitindo que elas mostrem um caminho mais fácil. Mas ao chegar à Fortaleza Celestial, percebe que foi enganado. A coroa não está lá, e você descobre que foi tudo uma armadilha criada pelo próprio labirinto."
                    }
                ]
            }
        ]
    },
    
    // Outras histórias podem ser adicionadas aqui
];

// Exportar as histórias para o game.js
export default stories;
