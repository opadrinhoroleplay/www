import React from 'react';
import GenericQuiz from '../../components/Quiz/GenericQuiz';

const guidelines = [
    {
        "title": "Imersão na Personagem",
        "description": "Mantém-te sempre fiel à personalidade e história da tua personagem para uma experiência mais realista.",
        "question": {
            "text": "O que deves fazer para manter a imersão no jogo de roleplay?",
            "answers": [
                "Agir de acordo com a personalidade da tua personagem.",
                "Usar informações fora do contexto do jogo para teu benefício.",
                "Ignorar as interações que não te interessam."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Consequências das Ações",
        "description": "Todas as ações da tua personagem têm consequências no mundo do jogo, afetando não só a ti como também os outros jogadores.",
        "question": {    
            "text": "Como deves tratar as ações da tua personagem?",
            "answers": [
                "Com responsabilidade, reconhecendo que afetam outros jogadores.",
                "Como irrelevantes, sem impacto no mundo do jogo.",
                "De forma isolada, sem consequências para a história maior."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Combat Logging",
        "description": "Sair do jogo intencionalmente durante uma interação para evitar consequências no roleplay.",
        "question": {
            "text": "O que significa o termo \"Combat Logging\"?",
            "answers": [
                "Sair do jogo propositadamente a meio de uma interação com outro jogador.",
                "Entrar no jogo só para combater ignorando todos os procedimentos do roleplay.",
                "Comprar armas sem pagar.",
                "Ver as logs de combate."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Dark Roleplay",
        "description": "Roleplay que envolve temas muito negativos ou comportamentos inapropriados que podem afetar o bem-estar dos jogadores.",
        "question": {
            "text": "O que significa fazer \"Dark Roleplay\"?",
            "answers": [
                "Assediar, abusar, ter preconceitos ou fazer comentários racistas/homofóbicos em roleplay.",
                "Fazer um personagem do sexo oposto com o objetivo de tirar partido disso.",
                "Fazer BDSM em espaços públicos ou de trabalho.",
                "Forçar outro jogador a meter um saco na cabeça e jogar às escuras."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Bug Exploit",
        "description": "Uso de falhas no jogo para obter vantagens de forma desonesta.",
        "question": {
            "text": "O que deves fazer se vires alguém a abusar de um bug (Bug Exploit)?",
            "answers": [
                "Informar um administrador através do servidor ou Discord.",
                "Ignorar a situação.",
                "Perguntar como se faz.",
                "Fazer um vídeo no YouTube a explicar como tirar partido disso."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Acidentes de Trânsito",
        "description": "Procedimentos a seguir após envolveres-te em acidentes de trânsito durante o roleplay.",
        "question": {
            "text": "Compraste uma mota nova e ao testá-la tiveste um acidente a mais de 150km/h. A tua personagem saltou da mota mas não ficou totalmente incapacitada. Qual o procedimento correto?",
            "answers": [
                "Como não fiquei incapacitado, posso chamar um amigo ou serviços de emergência para me darem o tratamento necessário.",
                "Entrar num grupo de pessoas com deficiência.",
                "Verificar se estou em segurança para usar um Kit Médico.",
                "Procurar a mota e pedir ajuda para a transportar até uma oficina."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Comunicação Fora de Personagem",
        "description": "As situações em que é permitido deixar de atuar conforme a personagem e comunicar-se como jogador.",
        "question": {
            "text": "Quando é permitido comunicar \"Fora de Personagem\" (voz/texto)?",
            "answers": [
                "Quando autorizado por um Administrador.",
                "Quando sei que alguém é Administrador e estamos sozinhos.",
                "Quando voltar do Limbo.",
                "Quando chamar um Deus numa Igreja."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Fugas e Perseguições",
        "description": "Ações a tomar durante perseguições policiais e ao enfrentar situações inevitáveis.",
        "question": {
            "text": "Numa fuga à Polícia deparas-te com uma curva mais apertada e sabes que não vais conseguir fazê-la sem bater. Qual o procedimento correto?",
            "answers": [
                "Faço Pain Auditivo (ex: gritar) e continuo com a fuga.",
                "Ofender a parede.",
                "Praticar o Combat Logging.",
                "Chamar um Administrador, os polícias não fizeram \"Fear\" da parede."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Interacção com Administradores",
        "description": "Como agir perante a presença de um Administrador durante uma situação de roleplay.",
        "question": {
            "text": "Um estranho aborda-te, e por ter pouca experiência utiliza palavras proíbidas em Roleplay. Um terceiro jogador aproxima-se casualmente mas sei que é Administrador. Qual o procedimento correto?",
            "answers": [
                "Ativar o modo Passivo e educar o estranho discretamente com assistência de um Administrador.",
                "Denunciar instantaneamente ao Moderador que se aproxima.",
                "Tirar clip para avaliação e punição.",
                "Chamar o Administrador e dar ideias para o servidor."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Sugestões para o Servidor",
        "description": "Onde e como apresentar ideias construtivas para o servidor.",
        "question": {
            "text": "Tens ideias construtivas para o servidor. Onde as podes sugerir?",
            "answers": [
                "Criar um tópico no Fórum do Discord, com a tag \"Sugestão\".",
                "Assim que encontrar um Administrador no servidor.",
                "Aproveitar um Ticket para mudar de assunto.",
                "Ir a uma igreja e chamar por um Deus."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Comunicação Paralela",
        "description": "Como gerir a comunicação entre jogadores fora do contexto do jogo.",
        "question": {
            "text": "Estou no Servidor com um amigo enquanto estamos em chamada no Discord. O que devo fazer?",
            "answers": [
                "Não falar sobre aspectos do Roleplay das vossas personagens que possam eventualmente causar Meta-Jogo (\"Meta-Gaming\"), que dá expulsão permanente.",
                "Ser egoísta e fazer roleplay apenas pelo Discord.",
                "Não dar mute no Discord para toda a gente ouvir o eco da nossa conversa.",
                "Utilizar o Discord apenas para falar com o meu amigo."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Comandos de Interação por Texto",
        "description": "Para que servem e como usar corretamente os comandos de interação por texto em roleplay.",
        "question": {
            "text": "Para que servem os comandos de interação por texto? [/me]",
            "answers": [
                "Para informar de uma ação que não consigo expressar visualmente no jogo.",
                "Para comunicar o meu ID sem interromper o Roleplay.",
                "Para pular mecânicas de um sistema.",
                "Para comunicar sem fazer barulho."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Fail-RP",
        "description": "O que significa e como evitar o Fail-RP, um erro comum no roleplay.",
        "question": {
            "text": "O que entendes por Fail-RP?",
            "answers": [
                "Ignorar as interações relacionadas com uma mecânica de jogo que estás a executar.",
                "Fazer de conta que estás morto.",
                "Fazer assaltos de dia em espaços abertos.",
                "Conduzir a alta velocidade sem utilizar o cinto de segurança."
            ],
            "rightAnswer": 0
        }
    }
];

const GuidelineQuiz = () => (
    <GenericQuiz
        data={guidelines}
        title="Prova o Teu Valor"
        successMessage="Parabéns, Soldato! Estás pronto para te juntares à Família!"
        partialSuccessMessage="Estás no caminho certo para te tornares um verdadeiro membro da Família!"
        failureMessage="Continua a estudar as regras da Família para te tornares um de nós!"
    />
);

export default GuidelineQuiz;