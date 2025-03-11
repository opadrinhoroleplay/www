import React from 'react';
import { siFivem } from 'simple-icons';
import { LayoutDashboard, UserPlus } from 'lucide-react';
import { getReferral } from '../../utils/referral';
import LightButton from '../ui/LightButton';
import PortalButton from '../ui/PortalButton';

const HeroSection = () => {
	const handlePortalClick = (e) => {
		e.preventDefault();
		
		// Handle portal navigation with referral
		const username = getReferral();
		const baseUrl = 'https://portal.opadrinhoroleplay.pt';
		window.location.href = username ? `${baseUrl}?ref=${encodeURIComponent(username)}` : baseUrl;
	};

	const username = getReferral();

	return (
		<section className="relative h-[80vh] w-full overflow-hidden">
			<img 
				src="/hero.jpg" 
				alt="Los Angeles cityscape view from Hollywood hills" 
				className="w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40" />
			
			{/* Referral Banner */}
			{username && (
				<div className="absolute top-0 inset-x-0 z-20">
					<div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-b border-amber-500/20 backdrop-blur-sm py-2.5 transition-all duration-300">
						<div className="container mx-auto px-4">
							<div className="flex items-center justify-center gap-2 text-white">
								<UserPlus className="w-4 h-4 text-amber-400 transition-colors duration-300" />
								<p className="text-sm text-slate-200 transition-colors duration-300">
									Foste convidado por{' '}
									<span className="font-medium text-amber-400 transition-colors duration-300">{username}</span>
									{' '}para te juntares à nossa comunidade
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
				<div className="text-center space-y-12">
					<div className="relative">
						<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 transition-all duration-500">
							<div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-white to-slate-300 rounded-full blur-xl opacity-20 transition-all duration-500"></div>
							<div className="relative w-full h-full bg-gradient-to-br from-white via-slate-200 to-slate-400 [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url('/logo.png')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] drop-shadow-lg transition-all duration-500"></div>
						</div>
						<h1 className="relative text-5xl sm:text-7xl md:text-[8rem] font-bold tracking-tight leading-none mt-8 drop-shadow-xl transition-all duration-500">
							<span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent [text-shadow:0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-500">O Padrinho</span>
							<span className="block text-2xl sm:text-4xl md:text-6xl mt-2 sm:mt-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-light drop-shadow-lg transition-all duration-500">ROLEPLAY</span>
						</h1>
					</div>
					<p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light drop-shadow-md backdrop-blur-[2px] py-2 px-4 transition-all duration-300">
						Vem descobrir connosco um mundo de histórias únicas, onde tu és o protagonista da tua própria aventura nas ruas de Los Santos
					</p>
					<div className="space-y-3">
						<p className="text-sm text-slate-300/90 transition-colors duration-300">Regista-te no portal para começares a tua aventura</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative px-4">
							<div className="cursor-not-allowed relative group">
								<PortalButton className="cursor-not-allowed"/>
								<div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden sm:group-hover:block bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-md text-white/90 text-sm px-4 py-2.5 rounded-xl whitespace-nowrap shadow-lg transition-all duration-300 ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-0 opacity-0 translate-y-[-5px]">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse transition-colors duration-300"></div>
										<span className="transition-colors duration-300">Portal em construção</span>
									</div>
								</div>
							</div>
							<div className="relative group hidden sm:block">
								<button 
									// onClick={handlePortalClick}
									className="fivem-button cursor-not-allowed flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 text-white rounded-lg text-lg font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
									style={{boxShadow: '0 0 0 1px rgba(4,4,5,0.2), 0 2px 2px rgba(0,0,0,0.1)'}}
								>
									<svg role="img" viewBox="0 0 24 24" className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110" fill="currentColor">
										<path d={siFivem.path} />
									</svg>
									Ligar ao Servidor
								</button>
								<div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden sm:group-hover:block bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-md text-white/90 text-sm px-4 py-2.5 rounded-xl whitespace-nowrap shadow-lg transition-all duration-300 ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-0 opacity-0 translate-y-[-5px]">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse transition-colors duration-300"></div>
										<span className="transition-colors duration-300">Servidor em breve</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;