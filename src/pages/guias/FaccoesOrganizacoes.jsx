import React from 'react';
import GuideNavigation from '../../components/GuideNavigation';

const FaccoesOrganizacoes = () => (
    <>
        <GuideNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">Facções e Organizações</h1>
            
            <div className="flex flex-col gap-8">
                <p className="text-slate-300 text-lg">Descobre o poder e a influência das famílias que controlam Los Santos. Escolhe o teu caminho e deixa a tua marca neste mundo do crime organizado.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">1. Famílias Principais</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Conhece a estrutura e territórios de cada família</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Descobre as especialidades e negócios principais</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Aprende sobre as alianças e rivalidades históricas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Compreende os códigos de honra de cada família</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">2. Organizações Independentes</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Explora os sindicatos e associações influentes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Conecta-te com grupos de contrabandistas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Estabelece contactos com operadores independentes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Negoceia com comerciantes neutros estratégicos</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">3. Relações Entre Grupos</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Participa em acordos territoriais importantes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Envolve-te em negociações complexas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Ajuda a resolver conflitos entre famílias</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Constrói alianças estratégicas valiosas</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-semibold text-amber-500">4. Como Te Juntares</h2>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Conhece o processo de recrutamento de cada família</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Prepara-te para cumprir os requisitos de entrada</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Supera o período de teste com distinção</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500/80 mt-1">•</span>
                                <span>Participa na cerimónia de iniciação com honra</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-slate-400 italic mt-4">A família que escolheres será mais do que uma organização - será o teu legado em Los Santos.</p>
            </div>
        </div>
    </>
);

export default FaccoesOrganizacoes;