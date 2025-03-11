import React from 'react';
import GuideNavigation from '../../components/GuideNavigation';

const CriarPersonagens = () => (
    <>
        <GuideNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">Criar Personagens</h1>
            
            <div className="flex flex-col gap-8">
                <p className="text-slate-300 text-lg">Vem descobrir como dar vida à personagem dos teus sonhos e criar uma história que ficará gravada na memória de todos.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">1. História de Origem</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Escolhe uma origem que te transporte aos anos 40/50</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Desenvolve laços familiares que enriqueçam a tua história</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Cria motivações profundas para a tua entrada no submundo</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Constrói uma história de imigração marcante (se aplicável)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">2. Aparência e Estilo</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Veste-te com o requinte da época dourada da máfia</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Define características físicas que te tornem memorável</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Adapta o teu estilo à tua posição na família</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Presta atenção aos pequenos detalhes do teu visual</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">3. Personalidade</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Cultiva traços de caráter que te destaquem</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Desenvolve maneirismos que te tornem único</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Estabelece os teus próprios códigos de honra</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Cria relações significativas no mundo do crime</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">4. Habilidades e Especialidades</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Desenvolve talentos que façam sentido para a época</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Escolhe uma especialidade que te defina na organização</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Aprende os segredos do submundo criminal</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Mantém as tuas capacidades realistas e equilibradas</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-slate-400 italic mt-4">A tua personagem é mais do que um nome - é uma história viva que ajuda a construir o nosso mundo.</p>
            </div>
        </div>
    </>
);

export default CriarPersonagens;