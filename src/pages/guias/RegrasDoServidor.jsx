import React from 'react';
import GuideNavigation from '../../components/GuideNavigation';

const RegrasDoServidor = () => (
    <>
        <GuideNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">Regras do Servidor</h1>
            
            <div className="flex flex-col gap-8">
                <p className="text-slate-300 text-lg">Antes de começares a tua jornada, descobre as regras essenciais que mantêm o nosso servidor único e autêntico.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">1. Respeito ao Roleplay</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Mantém-te sempre no personagem durante as tuas interações</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Não uses informações obtidas fora do roleplay (Meta-Gaming)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Respeita o valor da vida do teu personagem (Value of Life)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Não faças combat logging (sair durante situações de combate)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">2. Conduta da Máfia</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Respeita a hierarquia da tua e das outras famílias</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Conduz os teus negócios ilegais com discrição</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Fundamenta a tua vingança e retaliação com motivos roleplay válidos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Respeita os territórios das famílias rivais</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">3. Comportamento Geral</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Mantém um comportamento respeitoso com todos os jogadores</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Evita linguagem ofensiva ou discriminatória</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Não uses hacks, mods ou exploits</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Segue as instruções dos administradores</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">4. Consequências</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Violações menores resultam em advertências</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Infrações repetidas levam a suspensões temporárias</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Violações graves resultam em banimento permanente</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Apelos são considerados após período de reflexão</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-slate-400 italic mt-4">Estas regras existem para garantir uma experiência justa e divertida para todos os membros da nossa comunidade.</p>
            </div>
        </div>
    </>
);

export default RegrasDoServidor;