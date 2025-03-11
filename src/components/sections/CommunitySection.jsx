import React from 'react';
import HighlightCard from '../cards/HighlightCard';
import DiscordButton from '../DiscordButton';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const CommunitySection = () => (
	<div className="relative py-12 md:py-32">
		<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent"></div>
		<div className="max-w-7xl mx-auto px-4 md:px-6 relative">
			<ScrollReveal>
				<SectionHeading title="Comunidade" id="comunidade" />
			</ScrollReveal>
			<div className="grid md:grid-cols-2 gap-6 md:gap-8">
				<ScrollReveal direction="left" delay={0.2}>
					<HighlightCard
						title="Histórias em Destaque"
						description="Vem descobrir algumas das histórias mais incríveis que os nossos jogadores já criaram. A próxima pode ser a tua!"
						image={"wedding.png"}
						disabled
						disabledText="Em breve"
					/>
				</ScrollReveal>
				<ScrollReveal direction="right" delay={0.4}>
					<HighlightCard
						title="Facções e Organizações"
						description="Explora os diferentes grupos onde te podes destacar e fazer parte de algo maior. Qual será o teu lugar?"
						image="lspd.jpg"
					/>
				</ScrollReveal>
			</div>
			{/* <ScrollReveal delay={0.6}>
				<div className="flex justify-center mt-12">
					<DiscordButton />
				</div>
			</ScrollReveal> */}
		</div>
	</div>
);

export default CommunitySection;