import React from 'react';
import GenericQuiz from '../../components/Quiz/GenericQuiz';

const rules = [
    {
        "title": "Respeito aos Membros",
        "description": "Respeita todos os membros do servidor, independentemente do seu papel ou posição na história.",
        "question": {
            "text": "O que é mais importante ao interagir com outros membros no servidor?",
            "answers": [
                "Respeitar a todos, independentemente do papel ou posição.",
                "Ignorar membros com posições inferiores na história.",
                "Interagir apenas com membros da mesma facção."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Comunicação Respeitosa",
        "description": "Mantém a comunicação respeitosa e evita linguagem ofensiva ou abusiva.",
        "question": {
            "text": "Qual é a melhor forma de se comunicar no servidor?",
            "answers": [
                "Usar linguagem respeitosa e clara.",
                "Usar linguagem ofensiva quando descontente.",
                "Ignorar outros jogadores."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Evitar Spam",
        "description": "Evita spam, seja em chat, voz ou através de ações no jogo.",
        "question": {
            "text": "O que é considerado spam no servidor?",
            "answers": [
                "Repetir mensagens ou ações continuamente.",
                "Participar de conversas e atividades.",
                "Reportar problemas aos administradores."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Reportar Problemas",
        "description": "Reporta comportamentos inadequados ou violações das regras aos moderadores ou administradores do servidor.",
        "question": {
            "text": "O que deves fazer ao testemunhar uma violação de regras?",
            "answers": [
                "Reportar aos moderadores ou administradores.",
                "Ignorar e continuar a jogar.",
                "Retaliar e quebrar as regras também."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Evitar Metagaming",
        "description": "Evita metagaming, ou seja, usar informações obtidas fora do jogo para benefício dentro do jogo.",
        "question": {
            "text": "O que é considerado metagaming?",
            "answers": [
                "Usar informações de fora do jogo para ganhar vantagem dentro do jogo.",
                "Reportar bugs aos administradores.",
                "Seguir as regras de roleplay."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Evitar Powergaming",
        "description": "Não pratiques powergaming, que é forçar ações ou situações aos outros jogadores sem lhes dar oportunidade de reagir.",
        "question": {
            "text": "O que é considerado powergaming?",
            "answers": [
                "Forçar ações ou situações aos outros jogadores sem lhes dar oportunidade de reagir.",
                "Participar de eventos no servidor.",
                "Ajudar novos jogadores a entender as regras."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Identificação de Personagem",
        "description": "Mantém uma identidade consistente para a tua personagem, ajudando outros jogadores a reconhecer-te e interagir contigo de maneira coerente.",
        "question": {
            "text": "Por que é importante manter uma identidade consistente para a tua personagem?",
            "answers": [
                "Ajuda outros jogadores a reconhecer-te e interagir contigo de maneira coerente.",
                "Para poderes mudar de personagem frequentemente.",
                "Para evitar seguir as regras do servidor."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Interferência de Eventos",
        "description": "Não interrompas ou atrapalhes eventos de roleplay em curso, a menos que tenhas uma razão in-character válida para fazê-lo.",
        "question": {
            "text": "Quando é aceitável interromper um evento de roleplay em curso?",
            "answers": [
                "Quando tens uma razão in-character válida para fazê-lo.",
                "Quando estás entediado e queres causar caos.",
                "Quando não gostas dos jogadores envolvidos no evento."
            ],
            "rightAnswer": 0
        }
    },
    {
        "title": "Exploração de Bugs",
        "description": "Não explores bugs ou glitches para ganho pessoal ou para prejudicar outros jogadores.",
        "question": {
            "text": "O que deves fazer ao descobrir um bug ou glitch?",
            "answers": [
                "Reportar aos moderadores ou administradores.",
                "Usar o bug para ganhar vantagem no jogo.",
                "Ensinar outros jogadores a explorar o bug."
            ],
            "rightAnswer": 0
        }
    }
];

const RulesQuiz = () => (
    <GenericQuiz
        data={rules}
        title="Conheces as Regras?"
        successMessage="Parabéns! Demonstraste um excelente conhecimento das regras!"
        partialSuccessMessage="Estás no bom caminho! Continua a estudar as regras para te tornares um membro exemplar!"
        failureMessage="Continua a estudar as regras para melhor compreenderes o nosso servidor!"
    />
);

export default RulesQuiz; 