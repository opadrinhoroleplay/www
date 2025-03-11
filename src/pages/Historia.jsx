import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react"

const TimelineEvent = ({ year, title, description, isLeft }) => (
    <div className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}>
        <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-amber-900/20 group-hover:border-amber-500/50 transition-all duration-300">
                <span className="text-amber-500 font-bold">{year}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
        <div className="hidden md:flex flex-col items-center w-24">
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <div className="w-1 flex-1 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
        <div className="flex-1"></div>
    </div>
);

const BoardOfHonor = () => (
    <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20">
        <h3 className="text-2xl font-bold text-amber-500 mb-6">Quadro de Honra</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-800/50 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-white font-bold text-lg">uNi</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400">GTAForums Admin</span>
                </div>
                <p className="text-sm text-slate-400">
                    Membro desde 2004, administrador do GTAForums e embaixador da rede GTANet. 
                    Em finais de 2006, assumiu a liderança da GTApt após yield.
                    Colecionador de memorabilia Rockstar e apaixonado pela comunidade GTA.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {["Yield", "Commando", "undo", "StaticX", "T-1000", "Vip3r", "ViRuXe"].map((name) => (
                    <div key={name} className="text-center p-3 bg-neutral-900/30 rounded-lg hover:bg-neutral-800/30 transition-all duration-300">
                        <span className="text-white font-medium">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ExternalLinks = () => (
    <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20">
        <h3 className="text-2xl font-bold text-amber-500 mb-6">Links Importantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
                to="/historia/entrevista-yield" 
                className="text-slate-300 hover:text-amber-400 transition-colors"
            >
                Entrevista ao Fundador (yield)
            </Link>
            <Link 
                to="/historia/gtapt" 
                className="text-slate-300 hover:text-amber-400 transition-colors"
            >
                História da GTApt
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
);

const Historia = () => {
    return (
        <div className="min-h-screen bg-neutral-950 pt-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-8">
                    <Link 
                        to="/" 
                        className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Voltar
                    </Link>
                </div>

                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                            A Nossa História
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
                        <p className="text-slate-400 mt-8 max-w-2xl mx-auto">
                            Uma jornada que começou em 2003 com a GTApt (gta.pt.to), continuando até hoje no mesmo espírito. 
                            Descobre como nasceu "O Padrinho Roleplay" e como nos tornámos no que somos hoje.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-12 mb-16">
                    <ScrollReveal>
                        <TimelineEvent
                            year="2000-2004"
                            title="As Origens"
                            description="O VIRUXE começou com uma cópia do GTA2 para a PlayStation 1 chipada, saltando depois diretamente para o Vice City no PC. Foi através de pesquisas por ajuda nas missões do Vice City que descobriu a GTApt (gta.pt.to na altura), juntando-se depois ao canal #GTA no IRC da PTnet."
                            isLeft={true}
                        />
                    </ScrollReveal>

                    <ScrollReveal>
                        <TimelineEvent
                            year="2004-2005"
                            title="Multi Theft Auto: Vice City"
                            description="No final de 2004, já integrado na comunidade do IRC, o VIRUXE descobriu o MTA:VC 0.4. Esta nova forma de jogar multiplayer fortaleceu ainda mais os laços da comunidade que já se conhecia através do IRC."
                            isLeft={false}
                        />
                    </ScrollReveal>

                    <ScrollReveal>
                        <TimelineEvent
                            year="2007-2015"
                            title="A Era do SA-MP"
                            description="Com o SA-MP, VIRUXE criou O Padrinho Roleplay ao traduzir para português europeu o gamemode 'The Godfather' (lançado por Fear em julho de 2007). Com o tempo, foi adicionando novas funcionalidades e corrigindo bugs, transformando-o num marco na história do multiplayer português. Sob a sua liderança, O Padrinho Roleplay continuou a ser pioneiro no SA-MP, sendo um dos maiores servidores roleplay, criando experiências únicas que definiram o padrão para a comunidade. Eventualmente, o servidor tornou-se oficialmente vinculado à GTApt."
                            isLeft={true}
                        />
                    </ScrollReveal>

                    <ScrollReveal>
                        <TimelineEvent
                            year="2023"
                            title="O Sonho do FiveM"
                            description="Com a evolução da tecnologia e o sucesso do FiveM, VIRUXE começou a planear o regresso d'O Padrinho Roleplay com uma visão renovada e moderna."
                            isLeft={false}
                        />
                    </ScrollReveal>

                    <ScrollReveal>
                        <TimelineEvent
                            year="2024"
                            title="Em Desenvolvimento"
                            description="O projeto continua em desenvolvimento, mantendo os valores originais de qualidade e autenticidade que sempre nos definiram. Em breve, uma nova era começará."
                            isLeft={true}
                        />
                    </ScrollReveal>
                </div>

                <div className="space-y-8 mb-32">
                    <ScrollReveal>
                        <BoardOfHonor />
                    </ScrollReveal>

                    <ScrollReveal>
                        <ExternalLinks />
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Historia; 