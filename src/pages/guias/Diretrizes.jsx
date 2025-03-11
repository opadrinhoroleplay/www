import React from 'react';
import GuideNavigation from '../../components/GuideNavigation';

const Diretrizes = () => (
    <>
        <GuideNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">Diretrizes</h1>
            
            <div className="flex flex-col gap-8">
                <p className="text-slate-300 text-lg">Conhece as diretrizes essenciais que garantem uma experiência de roleplay autêntica e envolvente para todos os jogadores.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">1. Imersão e Autenticidade</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Mantém-te sempre fiel à personalidade da tua personagem</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Evita quebrar a imersão com comportamentos fora de contexto</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Respeita o ambiente e a época histórica do servidor</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Usa comandos de roleplay apropriadamente (/me, etc.)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">2. Comunicação e Interação</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Comunica sempre dentro do contexto do roleplay</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Evita comunicação fora de personagem sem autorização</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Respeita as interações com outros jogadores</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Mantém um comportamento maduro e respeitoso</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">3. Consequências e Responsabilidade</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Aceita as consequências das tuas ações no roleplay</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Evita combat logging e outras práticas prejudiciais</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Segue os procedimentos corretos em situações específicas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Reporta problemas através dos canais apropriados</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">4. Melhores Práticas</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Contribui para um ambiente positivo e construtivo</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Participa ativamente na construção de histórias</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Ajuda novos jogadores a se integrarem</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Sugere melhorias através dos canais oficiais</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-slate-400 italic mt-4">Seguir estas diretrizes não só melhora a tua experiência, mas também contribui para uma comunidade mais rica e envolvente.</p>
            </div>
        </div>
    </>
);

export default Diretrizes; 