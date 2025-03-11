import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react"

const HistoryEvent = ({ year, title, description }) => (
    <div className="border-l-2 border-amber-500 pl-4 pb-8">
        <span className="text-amber-500 font-bold">{year}</span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3">{title}</h3>
        <p 
            className="text-slate-400"
            dangerouslySetInnerHTML={{ __html: description }}
        />
    </div>
);

const GTAptHistory = () => {
    return (
        <div className="min-h-screen bg-neutral-950 pt-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <Link 
                        to="/historia" 
                        className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Voltar à História
                    </Link>
                </div>

                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                            História da GTApt
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
                        <p className="text-slate-400 mt-8">
                            A evolução da maior comunidade portuguesa de Grand Theft Auto
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-8 mb-32">
                    <ScrollReveal>
                        <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20">
                            <div className="space-y-8">
                                <HistoryEvent
                                    year="2002"
                                    title="As Origens no IRC"
                                    description="O canal #GTA na PTnet é criado em março de 2002, nascido das cinzas do #GTA1, com o objetivo de reunir amigos para jogar o primeiro GTA. Apesar do GTA III já existir na altura, o foco era no GTA original e GTA2."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2003"
                                    title="O Nascimento do Site"
                                    description="A GTApt começa como uma simples página HTML com links úteis para a equipa do canal #GTA. Inicialmente feita em bloco de notas, a página era uma necessidade prática para organizar endereços que não cabiam no tópico do IRC."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2003-2004"
                                    title="Crescimento e Evolução"
                                    description="Com o lançamento do Vice City, o canal #GTA cresce significativamente, atingindo entre 15 a 30 utilizadores regulares. O site evolui para FrontPage, melhorando sua organização e expandindo conteúdos para ajudar novos jogadores."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2004-2005"
                                    title="Era do Multiplayer"
                                    description="Com o crescimento do multiplayer, a GTApt torna-se o <em>principal hub português para MTA e SA-MP</em>. O canal #GTA atinge seu recorde de 56 utilizadores simultâneos, tornando-se o maior canal sobre GTA em Portugal."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2006"
                                    title="Mudança de Liderança"
                                    description="No final do ano, uNi assume a liderança da GTApt após yield. Sob sua administração, o site evolui para PHP, facilitando a publicação de notícias e atualizações de conteúdo."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2007"
                                    title="O Padrinho Roleplay"
                                    description="VIRUXE lança O Padrinho Roleplay, um servidor SA-MP que se tornaria um dos <em>marcos da comunidade portuguesa de GTA</em>. O servidor torna-se oficialmente vinculado à GTApt."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2008-2015"
                                    title="Anos Dourados"
                                    description="A GTApt consolida-se como a maior comunidade portuguesa de GTA, com <strong>dezenas de milhares de membros ativos</strong>. O site torna-se referência para notícias, guias e multiplayer, sendo reconhecido oficialmente pela Rockstar Games como fã-site."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2015-2023"
                                    title="Transição"
                                    description="Com o lançamento do GTA V e posteriormente o FiveM, a comunidade passa por mudanças significativas. O fórum mantém-se como ponto de encontro para os fãs portugueses de GTA."
                                />

                                <hr className="my-8 border-amber-800" />

                                <HistoryEvent
                                    year="2023"
                                    title="Nova Era"
                                    description="RoamPT assume a liderança da GTApt, trazendo uma nova visão para a comunidade. O legado do que começou como uma simples página de links continua vivo, mantendo o espírito original de ajuda e partilha."
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20 mt-8">
                            <h3 className="text-2xl font-bold text-amber-500 mb-6">Links Importantes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link 
                                    to="/historia/entrevista-yield" 
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    Entrevista ao Fundador (yield)
                                </Link>
                                <a 
                                    href="https://gtapt.net" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    GTApt.net - Comunidade Portuguesa de GTA
                                </a>
                                <a 
                                    href="https://discord.gg/t36bYQ7VvX" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    Discord GTApt
                                </a>
                                <a 
                                    href="https://twitter.com/gtaportugal" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    Twitter @gtaportugal
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default GTAptHistory; 