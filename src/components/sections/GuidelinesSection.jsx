import React from 'react';
import GuideCard from '../cards/GuideCard';
import ScrollReveal from '../ScrollReveal';
import DarkButton from '../ui/DarkButton';
import SectionHeading from '../ui/SectionHeading';

const GuidelinesSection = () => (
	<div className="relative py-12 md:py-32">
		<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent"></div>
		<div className="max-w-7xl mx-auto px-4 md:px-6 relative">
			<ScrollReveal>
				<SectionHeading title="Guias e Regras" id="guias" />
			</ScrollReveal>
			<div className="flex flex-wrap justify-center gap-4 md:gap-6 [&>*]:w-full [&>*]:sm:w-[calc(50%-1rem)] [&>*]:lg:w-[calc(33.333%-1rem)] max-w-sm sm:max-w-none mx-auto">
				<ScrollReveal direction="right" delay={0.1}>
					<GuideCard
						title="Regras do Servidor"
						description="Conhece as nossas regras que te ajudam a manter uma experiência autêntica e divertida para todos os jogadores."
						slug="regras-do-servidor"
					/>
				</ScrollReveal>
				<ScrollReveal direction="bottom" delay={0.2}>
					<GuideCard
						title="Como Fazer Roleplay"
						description="Descobre como podes criar as melhores histórias e fazer parte das aventuras mais memoráveis da nossa comunidade."
						slug="como-fazer-roleplay"
					/>
				</ScrollReveal>
				<ScrollReveal direction="left" delay={0.3}>
					<GuideCard
						title="Criar Personagens"
						description="Aprende a dar vida à personagem dos teus sonhos e a fazê-la brilhar no nosso universo."
						slug="criar-personagens"
					/>
				</ScrollReveal>
				<ScrollReveal direction="right" delay={0.4}>
					<GuideCard
						title="Sistema de Progressão"
						description="Vê como podes evoluir e crescer dentro da nossa comunidade através do teu empenho e dedicação."
						slug="sistema-de-progressao"
					/>
				</ScrollReveal>
				<ScrollReveal direction="bottom" delay={0.5}>
					<GuideCard
						title="Economia do Servidor"
						description="Descobre todas as formas de fazeres dinheiro e construíres o teu próprio império."
						slug="economia"
					/>
				</ScrollReveal>
				<ScrollReveal direction="left" delay={0.6}>
					<GuideCard
						title="Facções e Organizações"
						description="Explora os diferentes grupos onde te podes destacar e fazer a diferença."
						slug="faccoes-e-organizacoes"
					/>
				</ScrollReveal>
				<ScrollReveal direction="bottom" delay={0.7}>
					<GuideCard
						title="Diretrizes"
						description="Conhece as diretrizes essenciais para teres uma experiência de roleplay autêntica e envolvente."
						slug="diretrizes"
					/>
				</ScrollReveal>
				<ScrollReveal direction="right" delay={0.8}>
					<GuideCard
						title="Tickets e Bugs"
						description="Nós aproveitamos as situações menos positivas como uma oportunidade para aperfeiçoarmos a cidade. Assim, cada problema só precisará de 1 ticket teu para ser corrigido ou resolvido para sempre."
						slug="tickets-e-bugs"
					/>
				</ScrollReveal>
				<ScrollReveal direction="left" delay={0.9}>
					<GuideCard
						title="Live Service"
						description="Garantimos desenvolvimento pós lançamento com updates e patches para que sintas de novo o entusiasmo do primeiro dia."
						slug="live-service"
					/>
				</ScrollReveal>
			</div>

			<ScrollReveal delay={1}>
				<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
					<DarkButton to="/guias/quiz">Quiz de Diretrizes</DarkButton>
					<DarkButton to="/guias/regras-quiz">Quiz de Regras</DarkButton>
				</div>
			</ScrollReveal>
		</div>
	</div>
);

export default GuidelinesSection;