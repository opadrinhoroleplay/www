import React from 'react';
import GuideNavigation from '../../components/GuideNavigation';

const LiveServicePage = () => (
    <>
        <GuideNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">Live Service</h1>
            
            <div className="flex flex-col gap-8">
                <p className="text-slate-300 text-lg">Descobre como estamos sempre a melhorar a tua experiência com atualizações e novos conteúdos.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">Atualizações Regulares</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Correções semanais de bugs e problemas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Melhorias constantes de desempenho</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Novos conteúdos e recursos mensais</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Eventos especiais e temporadas temáticas</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">Comunicação e Transparência</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Notas de atualização detalhadas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Anúncios prévios de grandes mudanças</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Comunicação direta com a comunidade</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Roadmap público de desenvolvimento</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">O Teu Feedback Importa</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Sugestões da comunidade são valorizadas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Votações para futuras funcionalidades</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Programa de testes beta</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Recompensas por feedback construtivo</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">Compromisso com a Qualidade</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Testes rigorosos antes dos lançamentos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Monitorização constante do desempenho</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Backups regulares e segurança</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Equipa dedicada de suporte</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-slate-400 italic mt-4">O nosso compromisso é fazer-te sentir o entusiasmo do primeiro dia, todos os dias!</p>
            </div>
        </div>
    </>
);

export default LiveServicePage; 