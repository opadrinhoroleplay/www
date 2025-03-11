import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award, BookOpen, Users, PersonStanding, TrendingUp, Wallet, Building2, GraduationCap, FileText, TicketIcon, Sparkles } from 'lucide-react';

const GuideNavigation = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const guideCategories = [
        {
            title: "Essenciais",
            guides: [
                { title: "Regras do Servidor", slug: "regras-do-servidor", icon: <BookOpen className="w-4 h-4" /> },
                { title: "Como Fazer Roleplay", slug: "como-fazer-roleplay", icon: <PersonStanding className="w-4 h-4" /> },
                { title: "Criar Personagens", slug: "criar-personagens", icon: <Users className="w-4 h-4" /> },
                { title: "Diretrizes", slug: "diretrizes", icon: <FileText className="w-4 h-4" /> }
            ]
        },
        {
            title: "Progressão",
            guides: [
                { title: "Sistema de Progressão", slug: "sistema-de-progressao", icon: <TrendingUp className="w-4 h-4" /> },
                { title: "Economia do Servidor", slug: "economia", icon: <Wallet className="w-4 h-4" /> },
                { title: "Facções e Organizações", slug: "faccoes-e-organizacoes", icon: <Building2 className="w-4 h-4" /> }
            ]
        },
        {
            title: "Suporte",
            guides: [
                { title: "Tickets e Bugs", slug: "tickets-e-bugs", icon: <TicketIcon className="w-4 h-4" /> },
                { title: "Live Service", slug: "live-service", icon: <Sparkles className="w-4 h-4" /> }
            ]
        },
        {
            title: "Avaliações",
            guides: [
                { title: "Quiz de Diretrizes", slug: "quiz", icon: <Award className="w-4 h-4" /> },
                { title: "Quiz de Regras", slug: "regras-quiz", icon: <GraduationCap className="w-4 h-4" /> }
            ]
        }
    ];

    return (
        <nav className="bg-neutral-900/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <Link 
                        to="/" 
                        className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 font-medium"
                    >
                        ← Voltar ao Início
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-8">
                            {guideCategories.map((category) => (
                                <div key={category.title} className="relative group">
                                    <button className="px-3 py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
                                        {category.title}
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative bg-neutral-900 backdrop-blur-sm border border-white/10">
                                                {category.guides.map((guide) => (
                                                    <Link
                                                        key={guide.slug}
                                                        to={`/guias/${guide.slug}`}
                                                        className={`px-4 py-3 text-sm flex items-center gap-3 ${
                                                            location.pathname === `/guias/${guide.slug}`
                                                                ? 'bg-amber-400/10 text-amber-400'
                                                                : 'text-slate-300 hover:bg-white/5 hover:text-amber-400'
                                                        } transition-colors`}
                                                    >
                                                        {guide.icon}
                                                        {guide.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-400 hover:text-amber-400 transition-colors"
                            aria-label="Menu principal"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 pt-2 pb-4 space-y-1 border-t border-white/5">
                    {guideCategories.map((category) => (
                        <div key={category.title}>
                            <div className="px-3 py-2 text-sm font-medium text-slate-400">{category.title}</div>
                            {category.guides.map((guide) => (
                                <Link
                                    key={guide.slug}
                                    to={`/guias/${guide.slug}`}
                                    className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${
                                        location.pathname === `/guias/${guide.slug}`
                                            ? 'text-amber-400 bg-white/5'
                                            : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
                                    } transition-colors`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {guide.icon}
                                    {guide.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default GuideNavigation;