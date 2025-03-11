import React from 'react';
import ScrollReveal from '../ScrollReveal';
import LightButton from '../ui/LightButton';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => (
	<div className="relative py-12 md:py-32">
		<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent"></div>
		<div className="max-w-7xl mx-auto px-4 md:px-6 relative">
			<ScrollReveal>
				<SectionHeading title="Sobre Nós" id="sobre" />
			</ScrollReveal>
			<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
				<ScrollReveal direction="left">
					<div className="space-y-6">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">A Nossa Visão</h3>
						<p className="text-slate-400 leading-relaxed">
							Nascemos da nossa paixão por criar experiências autênticas de roleplay. Queremos dar-te a oportunidade de viveres histórias únicas e memoráveis que tu próprio vais criar.
						</p>
						<p className="text-slate-400 leading-relaxed">
							O nosso foco é proporcionar-te um servidor que valoriza a qualidade do roleplay, onde podes mergulhar totalmente na tua personagem e desenvolvê-la ao máximo.
						</p>
					</div>
				</ScrollReveal>
				<ScrollReveal direction="right">
					<div className="relative max-w-[300px] mx-auto">
						<div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-20"></div>
						<img 
							src="logo.png" 
							alt="O Padrinho Logo" 
							className="relative rounded-lg w-full h-auto filter antialiased" 
							style={{ imageRendering: 'auto' }}
						/>
					</div>
				</ScrollReveal>
			</div>

			<ScrollReveal>
				<div className="text-center">
					<h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">A Nossa História</h3>
					<p className="text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
						Tudo começou na comunidade GTApt.net, onde a nossa paixão pelo roleplay nasceu nos tempos do SA-MP. 
						Uma jornada que começou há mais de uma década e que hoje continua mais forte do que nunca no FiveM.
					</p>
					<LightButton>
						Descobre a Nossa História
					</LightButton>
				</div>
			</ScrollReveal>
		</div>
	</div>
);

export default AboutSection;